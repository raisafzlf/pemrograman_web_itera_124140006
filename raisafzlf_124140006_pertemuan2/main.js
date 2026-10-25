import { DashboardApp } from "./app.js";
import { escapeHtml, formatDate, daysLeft } from "./utils.js";

const app = new DashboardApp();
let editingId = null;

const $ = (id) => document.getElementById(id);
const form = $("taskForm");

const deadlineLabel = ({ deadline, done }) => {
  if (!deadline) return "";
  const left = daysLeft(deadline);
  let note = "";
  if (!done && left < 0) note = ` <span class="late">terlambat ${-left} hari</span>`;
  else if (!done && left <= 2) note = ` <span class="soon">${left === 0 ? "hari ini" : `${left} hari lagi`}</span>`;
  return `Deadline ${formatDate(deadline)}${note}`;
};

const renderTask = (task) => `
  <li class="task ${task.done ? "done" : ""}" data-id="${task.id}">
    <input type="checkbox" ${task.done ? "checked" : ""} aria-label="Tandai selesai: ${escapeHtml(task.title)}">
    <div class="info">
      <div class="name">${escapeHtml(task.title)}</div>
      <div class="meta">${[escapeHtml(task.course), deadlineLabel(task)].filter(Boolean).join(" · ")}</div>
    </div>
    <div class="actions">
      <button class="btn small" data-action="edit">Edit</button>
      <button class="btn small danger" data-action="delete">Hapus</button>
    </div>
  </li>`;

const render = () => {
  const { total, done, pending } = app.stats;
  $("stats").innerHTML = `
    <div class="stat"><b>${total}</b><span>Total tugas</span></div>
    <div class="stat"><b>${pending}</b><span>Belum selesai</span></div>
    <div class="stat"><b>${done}</b><span>Selesai</span></div>`;

  const list = app.visibleTasks;
  $("taskList").innerHTML = list.length
    ? list.map(renderTask).join("")
    : `<li class="empty">Belum ada tugas di sini. Tambahkan lewat formulir.</li>`;

  document.querySelectorAll(".chip").forEach((chip) =>
    chip.classList.toggle("active", chip.dataset.filter === app.filter));
};

const resetForm = () => {
  editingId = null;
  form.reset();
  $("formTitle").textContent = "Tambah tugas";
  $("submitBtn").textContent = "Simpan tugas";
  $("cancelBtn").hidden = true;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    title: $("title").value.trim(),
    course: $("course").value.trim(),
    deadline: $("deadline").value
  };
  if (!data.title) return;
  editingId ? app.edit(editingId, data) : app.add(data);
  resetForm();
  render();
});

$("cancelBtn").addEventListener("click", resetForm);

$("taskList").addEventListener("click", (e) => {
  const li = e.target.closest(".task");
  if (!li) return;
  const { id } = li.dataset;
  const { action } = e.target.dataset;

  if (action === "delete") {
    if (confirm("Hapus tugas ini?")) {
      app.remove(id);
      if (editingId === id) resetForm();
      render();
    }
  } else if (action === "edit") {
    const { title, course, deadline } = app.find(id);
    editingId = id;
    $("title").value = title;
    $("course").value = course;
    $("deadline").value = deadline;
    $("formTitle").textContent = "Edit tugas";
    $("submitBtn").textContent = "Simpan perubahan";
    $("cancelBtn").hidden = false;
    $("title").focus();
  }
});

$("taskList").addEventListener("change", (e) => {
  if (e.target.type !== "checkbox") return;
  app.toggle(e.target.closest(".task").dataset.id);
  render();
});

$("filters").addEventListener("click", (e) => {
  const { filter } = e.target.dataset;
  if (!filter) return;
  app.filter = filter;
  render();
});

const loadExternal = async () => {
  try {
    const { quote, author } = await app.fetchQuote();
    $("quote").textContent = `“${quote}” — ${author}`;
  } catch (err) {
    $("quote").textContent = "Kutipan tidak dapat dimuat.";
  }
};

render();
loadExternal();