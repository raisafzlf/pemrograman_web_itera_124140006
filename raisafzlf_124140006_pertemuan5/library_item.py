from abc import ABC, abstractmethod

class LibraryItem(ABC):
    def __init__(self, id, judul):
        self._id = id
        self._judul = judul
        self._dipinjam = False

    @property
    def is_dipinjam(self):
        return self._dipinjam

    @abstractmethod
    def get_detail(self):
        pass


class Book(LibraryItem):
    def __init__(self, id, judul, penulis):
        super().__init__(id, judul)
        self._penulis = penulis

    def get_detail(self):
        status = "Dipinjam" if self.is_dipinjam else "Tersedia"
        return f"Buku: {self._judul}, Penulis: {self._penulis}, Status: {status}"


class Magazine(LibraryItem):
    def __init__(self, id, judul, edisi):
        super().__init__(id, judul)
        self._edisi = edisi

    def get_detail(self):
        status = "Dipinjam" if self.is_dipinjam else "Tersedia"
        return f"Majalah: {self._judul}, Edisi: {self._edisi}, Status: {status}"
