# Dashboard Tugas Kuliah

Aplikasi untuk mencatat tugas kuliah: tambah, edit, hapus, tandai selesai, filter, serta menampilkan cuaca kampus ITERA (Open-Meteo) dan kutipan harian (DummyJSON). Data tersimpan di `localStorage`.

## Cara menjalankan
Buka folder di VS Code, klik kanan `index.html` → **Open with Live Server** (wajib, karena memakai `type="module"`).

## Screenshot
![Tampilan aplikasi](screenshot.png)  <!-- ganti dengan screenshot kamu -->

## Fitur ES6+ yang dipakai
| Fitur | File : baris |
|---|---|
| `let` / `const` | js/main.js : (isi baris) |
| Arrow functions (lebih dari 3) | js/modules/utils.js : (isi baris), js/main.js : (isi baris) |
| Template literals | js/main.js : (isi baris) |
| Async/Await + fetch | js/app.js : (isi baris), js/main.js : (isi baris) |
| Classes (`TaskItem`, `DashboardApp`) | js/app.js : (isi baris) |
| Destructuring | js/app.js, js/main.js |
| Spread operator | js/app.js (`[...this.tasks, ...]`, `{ ...this }`) |
| Modules (import/export) | semua file js |
| localStorage | js/app.js : (isi baris) |
