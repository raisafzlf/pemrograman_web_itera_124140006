
from library_item import Book, Magazine
from library import Library
from member import Member


# Membuat objek perpustakaan
perpustakaan = Library()

# Membuat data anggota
anggota1 = Member("A001", "Raisa")

# Membuat beberapa buku dan majalah
buku1 = Book("B001", "Laskar Pelangi", "Andrea Hirata")
buku2 = Book("B002", "Bumi", "Tere Liye")
majalah1 = Magazine("M001", "National Geographic", "Edisi 10")

# Menampilkan data anggota
print("=== DATA ANGGOTA ===")
anggota1.tampilkan_data()

# Menambahkan item ke perpustakaan
perpustakaan.tambah_item(buku1)
perpustakaan.tambah_item(buku2)
perpustakaan.tambah_item(majalah1)

# Menampilkan semua koleksi
perpustakaan.tampilkan_item()

# Mencari item berdasarkan ID
perpustakaan.cari_item("B001")

# Mencari item berdasarkan judul
perpustakaan.cari_item("Bumi")
