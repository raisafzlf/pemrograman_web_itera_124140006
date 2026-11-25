# RESTful API Manajemen Mata Kuliah

## Identitas Mahasiswa

- **Nama:** Raisa Fazila
- **NIM:** 124140006
- **Kelas:** [Isi kelas RA/RB]

## Deskripsi Aplikasi

Aplikasi RESTful API Manajemen Mata Kuliah merupakan aplikasi berbasis web yang digunakan untuk mengelola data mata kuliah. Aplikasi ini dibuat menggunakan Pyramid Framework dan PostgreSQL sebagai database.

Aplikasi menyediakan fitur untuk menampilkan, menambahkan, mengubah, dan menghapus data mata kuliah.

## Teknologi yang Digunakan

- Python
- Pyramid Framework
- SQLAlchemy
- PostgreSQL
- Alembic

## Struktur Data Mata Kuliah

Data mata kuliah memiliki atribut:

| Atribut | Tipe Data | Keterangan |
|---|---|---|
| id | Integer | Primary key |
| kode_mk | Text | Kode mata kuliah, harus unik |
| nama_mk | Text | Nama mata kuliah |
| sks | Integer | Jumlah SKS |
| semester | Integer | Semester mata kuliah |

## Fitur API

| Method | Endpoint | Fungsi |
|---|---|---|
| GET | `/api/matakuliah` | Menampilkan semua mata kuliah |
| GET | `/api/matakuliah/{id}` | Menampilkan mata kuliah berdasarkan ID |
| POST | `/api/matakuliah` | Menambahkan mata kuliah |
| PUT | `/api/matakuliah/{id}` | Mengubah data mata kuliah |
| DELETE | `/api/matakuliah/{id}` | Menghapus mata kuliah |

## Instalasi dan Menjalankan Aplikasi

1. Aktifkan virtual environment.
2. Instal kebutuhan proyek:

   `python -m pip install -e ".[testing]"`

3. Jalankan migrasi database:

   `alembic -c development.ini upgrade head`

4. Masukkan data awal:

   `initialize_pyramid_mahasiswa_db development.ini`

5. Jalankan aplikasi:

   `pserve development.ini --reload`

6. Buka API melalui browser:

   `http://localhost:6543/api/matakuliah`

## Validasi Data

Aplikasi memiliki validasi sebagai berikut:

- Kode mata kuliah wajib diisi.
- Nama mata kuliah wajib diisi.
- SKS wajib diisi dan harus berupa bilangan bulat positif.
- Semester wajib diisi dan harus berupa bilangan bulat positif.

## Pengujian API

Pengujian dilakukan menggunakan PowerShell dengan perintah `Invoke-RestMethod`.

Endpoint yang telah diuji:

- GET semua mata kuliah: berhasil.
- GET mata kuliah berdasarkan ID: berhasil.
- POST menambahkan mata kuliah: berhasil.
- PUT mengubah data mata kuliah: berhasil.
- DELETE menghapus mata kuliah: berhasil.
- Validasi SKS tidak positif: berhasil ditolak.
- Validasi kode mata kuliah kosong: berhasil ditolak.

## Dokumentasi Screenshot Pengujian

### 1. GET Semua Mata Kuliah
![GET Semua Mata Kuliah](screenshots/01-get-semua.png)

### 2. GET Mata Kuliah Berdasarkan ID
![GET Detail Mata Kuliah](screenshots/02-get-detail.png)

### 3. POST Menambahkan Mata Kuliah
![POST Mata Kuliah](screenshots/03-post.png)

### 4. PUT Mengubah Mata Kuliah
![PUT Mata Kuliah](screenshots/04-put.png)

### 5. DELETE Menghapus Mata Kuliah
![DELETE Mata Kuliah](screenshots/05-delete.png)