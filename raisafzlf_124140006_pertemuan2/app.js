import { makeId } from "./utils.js";
import { defaultTasks } from "./data.js";

const STORAGE_KEY = "dashboard-tugas-v1";

export class TaskItem {
  constructor({ id = makeId(), title, course = "", deadline = "", done = false }) {
    this.id = id;
    this.title = title;
    this.course = course;
    this.deadline = deadline;
    this.done = done;
  }

  toggle() { return new TaskItem({ ...this, done: !this.done }); }
  update(changes) { return new TaskItem({ ...this, ...changes }); }
}

export class DashboardApp {
  constructor() {
    this.tasks = this.load();
    this.filter = "all";
  }

  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const list = raw ? JSON.parse(raw) : defaultTasks;
      return list.map((item) => new TaskItem(item));
    } catch (err) {
      console.error("Gagal membaca localStorage:", err);
      return [];
    }
  }

  save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.tasks));
  }

  add(data) {
    this.tasks = [...this.tasks, new TaskItem(data)];
    this.save();
  }

  edit(id, changes) {
    this.tasks = this.tasks.map((t) => (t.id === id ? t.update(changes) : t));
    this.save();
  }

  toggle(id) {
    this.tasks = this.tasks.map((t) => (t.id === id ? t.toggle() : t));
    this.save();
  }

  remove(id) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
    this.save();
  }

  find(id) { return this.tasks.find((t) => t.id === id); }

  get visibleTasks() {
    const rules = {
      all: () => true,
      active: ({ done }) => !done,
      done: ({ done }) => done
    };
    return this.tasks.filter(rules[this.filter]);
  }

  get stats() {
    const total = this.tasks.length;
    const done = this.tasks.filter(({ done }) => done).length;
    return { total, done, pending: total - done };
  }

  async fetchQuote() {
    const res = await fetch("https://dummyjson.com/quotes/random");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const { quote, author } = await res.json();
    return { quote, author };
  }
}