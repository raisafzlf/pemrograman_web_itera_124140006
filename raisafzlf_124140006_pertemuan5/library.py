
class Library:
    def __init__(self):
        self.__koleksi = []

    def tambah_item(self, item):
        self.__koleksi.append(item)
        print("Item berhasil ditambahkan.")

    def tampilkan_item(self):
        print("\n=== DAFTAR KOLEKSI PERPUSTAKAAN ===")

        if len(self.__koleksi) == 0:
            print("Koleksi masih kosong.")
        else:
            for item in self.__koleksi:
                print(item.get_detail())

    def cari_item(self, kata_kunci):
        print("\n=== HASIL PENCARIAN ===")

        ditemukan = False

        for item in self.__koleksi:
            if kata_kunci.lower() == item._judul.lower() or kata_kunci == item._id:
                print(item.get_detail())
                ditemukan = True

        if not ditemukan:
            print("Item tidak ditemukan.")
