"""Tugas 2: Program Pengelolaan Data Nilai Mahasiswa."""
 
data_mahasiswa = [
    {"nama": "Taufiq", "nim": "124140100",
     "nilai_uts": 85, "nilai_uas": 90, "nilai_tugas": 88},
    {"nama": "Anugrah", "nim": "124140200",
     "nilai_uts": 75, "nilai_uas": 70, "nilai_tugas": 80},
    {"nama": "Marga", "nim": "124140300",
     "nilai_uts": 60, "nilai_uas": 65, "nilai_tugas": 70},
    {"nama": "Raisa", "nim": "124140400",
     "nilai_uts": 55, "nilai_uas": 50, "nilai_tugas": 60},
    {"nama": "Fazila", "nim": "124140500",
     "nilai_uts": 40, "nilai_uas": 45, "nilai_tugas": 50},
]
 
 
def hitung_nilai_akhir(uts: float, uas: float, tugas: float) -> float:
    """Menghitung nilai akhir dengan bobot 30% UTS, 40% UAS, 30% Tugas.
 
    Parameter:
        uts (float): nilai UTS.
        uas (float): nilai UAS.
        tugas (float): nilai tugas.
    Return:
        float: nilai akhir.
    """
    return (0.3 * uts) + (0.4 * uas) + (0.3 * tugas)
 
 
def tentukan_grade(nilai_akhir: float) -> str:
    """Menentukan grade (A-E) dari nilai akhir.
 
    Parameter:
        nilai_akhir (float): nilai akhir mahasiswa.
    Return:
        str: huruf grade A, B, C, D, atau E.
    """
    if nilai_akhir >= 80:
        return "A"
    elif nilai_akhir >= 70:
        return "B"
    elif nilai_akhir >= 60:
        return "C"
    elif nilai_akhir >= 50:
        return "D"
    else:
        return "E"
 
 
def proses_data(daftar: list) -> None:
    """Menambahkan kunci 'nilai_akhir' dan 'grade' ke setiap dictionary.
 
    Parameter:
        daftar (list): list dictionary data mahasiswa.
    Return:
        None (data dimodifikasi langsung).
    """
    for mhs in daftar:
        mhs["nilai_akhir"] = hitung_nilai_akhir(
            mhs["nilai_uts"], mhs["nilai_uas"], mhs["nilai_tugas"]
        )
        mhs["grade"] = tentukan_grade(mhs["nilai_akhir"])
 
 
def cetak_tabel(daftar: list) -> None:
    """Mencetak tabel Nama, NIM, Nilai Akhir, dan Grade.
 
    Parameter:
        daftar (list): list dictionary data mahasiswa yang sudah diproses.
    Return:
        None.
    """
    garis = "=" * 60
    print(garis)
    print(f"{'No':<4}{'Nama':<20}{'NIM':<14}{'Nilai Akhir':>12}{'Grade':>8}")
    print(garis)
    for no, mhs in enumerate(daftar, start=1):
        print(f"{no:<4}{mhs['nama']:<20}{mhs['nim']:<14}"
              f"{mhs['nilai_akhir']:>12.2f}{mhs['grade']:>8}")
    print(garis)
 
 
def cetak_info(judul: str, mhs: dict) -> None:
    """Mencetak informasi singkat seorang mahasiswa.
 
    Parameter:
        judul (str): judul yang ditampilkan.
        mhs (dict): data mahasiswa.
    Return:
        None.
    """
    print(f"{judul}")
    print(f"  Nama        : {mhs['nama']}")
    print(f"  NIM         : {mhs['nim']}")
    print(f"  Nilai Akhir : {mhs['nilai_akhir']:.2f}")
    print(f"  Grade       : {mhs['grade']}")
 
 
def main():
    """Alur utama program."""
    proses_data(data_mahasiswa)
    print("\nDATA NILAI MAHASISWA")
    cetak_tabel(data_mahasiswa)
 
    tertinggi = max(data_mahasiswa, key=lambda m: m["nilai_akhir"])
    terendah = min(data_mahasiswa, key=lambda m: m["nilai_akhir"])
 
    print()
    cetak_info("Mahasiswa dengan nilai akhir TERTINGGI:", tertinggi)
    print()
    cetak_info("Mahasiswa dengan nilai akhir TERENDAH:", terendah)
 
 
if __name__ == "__main__":
    main()
 
