# Tugas Praktikum Pemrograman Web – Aplikasi Kasir & Keranjang Belanja

Repository ini berisi tugas praktikum Pemrograman Web tentang pembuatan aplikasi kasir dan keranjang belanja sederhana.

- **Nama:** Raisa Fazila
- **NIM:** 124140006
- **Program Studi:** Informatika

---

## Deskripsi

Aplikasi ini merupakan kasir sederhana yang digunakan untuk menambahkan barang ke dalam keranjang dan menghitung total pembayaran.

Aplikasi dibuat menggunakan HTML, CSS, dan JavaScript. Data barang yang sudah dimasukkan ke keranjang disimpan menggunakan `localStorage`, sehingga data tetap ada saat halaman di-refresh.

---

## Fitur

- Menambahkan barang ke keranjang
- Validasi nama, harga, dan jumlah barang
- Menghitung subtotal barang
- Menghitung total belanja
- Diskon 10% jika total belanja minimal Rp50.000
- Menghitung kembalian
- Menghapus barang dari keranjang
- Menyimpan data keranjang menggunakan `localStorage`
- Mengosongkan keranjang untuk transaksi baru

---

## Struktur File

```text
📁 raisafazila_124140006_pertemuan1
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## LocalStorage

Data keranjang disimpan menggunakan `localStorage`.

```javascript
localStorage.setItem("keranjang", JSON.stringify(keranjang));

let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
```

`JSON.stringify()` digunakan untuk menyimpan data keranjang, sedangkan `JSON.parse()` digunakan untuk mengambil kembali data yang sudah disimpan.

---

## Teknologi yang Digunakan

- HTML
- CSS
- JavaScript
- LocalStorage

---

## Cara Menjalankan

1. Buka folder project di Visual Studio Code.
2. Buka file `index.html`.
3. Jalankan menggunakan Live Server atau buka langsung di browser.
4. Aplikasi sudah bisa digunakan.

---

## Cara Menggunakan

1. Masukkan nama barang.
2. Masukkan harga barang.
3. Masukkan jumlah barang.
4. Klik **Tambah ke Keranjang**.
5. Barang akan masuk ke tabel keranjang.
6. Masukkan uang bayar untuk melihat kembalian.
7. Klik **Hapus** jika ingin menghapus barang.
8. Klik **Transaksi Baru** untuk mengosongkan keranjang.

---

## Dokumentasi

### 1. Tampilan Awal Aplikasi

Menampilkan halaman utama aplikasi kasir yang berisi form tambah barang, keranjang belanja, dan bagian pembayaran.
<img width="948" height="888" alt="tampilan awal" src="https://github.com/user-attachments/assets/8c23180b-8e2f-47af-a77a-3b4dbc497d07" />



### 2. Menambahkan Barang

Menampilkan proses pengisian nama barang, harga satuan, dan jumlah barang sebelum dimasukkan ke keranjang.
<img width="978" height="481" alt="tambah barang" src="https://github.com/user-attachments/assets/5c5eb02a-c283-423d-9c6f-0b82f97b812b" />



### 3. Keranjang Belanja

Menampilkan barang yang sudah ditambahkan ke keranjang beserta harga, jumlah, subtotal, dan tombol hapus.
<img width="923" height="226" alt="keranjang" src="https://github.com/user-attachments/assets/a3baaa3a-e120-4fee-9f6f-d5d80dde60de" />


### 4. Pembayaran, Diskon, dan Kembalian

Menampilkan total belanja, diskon, total akhir, uang yang dibayarkan, serta hasil kembalian.
<img width="924" height="388" alt="pembayaran" src="https://github.com/user-attachments/assets/3fb85d6a-95af-4000-be54-5fc01c28f992" />



---

## Tujuan

Tugas ini dibuat untuk menerapkan materi JavaScript yang sudah dipelajari selama praktikum, seperti variabel, kondisi, perulangan, function, event handler, array, manipulasi DOM, dan `localStorage`.
