
class Member:
    def __init__(self, id_anggota, nama):
        self._id_anggota = id_anggota
        self._nama = nama

    def tampilkan_data(self):
        print("ID Anggota:", self._id_anggota)
        print("Nama:", self._nama)
