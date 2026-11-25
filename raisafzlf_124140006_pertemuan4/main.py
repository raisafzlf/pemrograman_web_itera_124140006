"""Program utama: menguji seluruh fungsi pada modul math_operations."""
 
import math_operations as mo
from math_operations import celsius_ke_fahrenheit, celsius_ke_kelvin, PI
 
 
def main():
    """Menjalankan pengujian geometri dan konversi suhu."""
    print(f"Nilai konstanta PI = {PI}")
 
    print("\n=== PERSEGI ===")
    for sisi in (4, 7.5, 10):
        print(f"Sisi {sisi:>5} -> Luas: {mo.luas_persegi(sisi):>8.2f} | "
              f"Keliling: {mo.keliling_persegi(sisi):>8.2f}")
 
    print("\n=== PERSEGI PANJANG ===")
    for p, l in ((5, 3), (10, 2.5), (8, 8)):
        print(f"{p:>4} x {l:<4} -> "
              f"Luas: {mo.luas_persegi_panjang(p, l):>8.2f} | "
              f"Keliling: {mo.keliling_persegi_panjang(p, l):>8.2f}")
 
    print("\n=== LINGKARAN ===")
    for r in (7, 10, 3.5):
        print(f"r = {r:<4} -> Luas: {mo.luas_lingkaran(r):>8.2f} | "
              f"Keliling: {mo.keliling_lingkaran(r):>8.2f}")
 
    print("\n=== KONVERSI SUHU ===")
    print(f"{'Celsius':>8}{'Fahrenheit':>14}{'Kelvin':>10}")
    for c in (0, 25, 37, 100, -40):
        print(f"{c:>8}{celsius_ke_fahrenheit(c):>14.2f}"
              f"{celsius_ke_kelvin(c):>10.2f}")
 
 
if __name__ == "__main__":
    main()
 
