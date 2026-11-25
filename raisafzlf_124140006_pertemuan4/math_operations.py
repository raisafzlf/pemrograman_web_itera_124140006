"""Modul math_operations: geometri dan konversi suhu."""
 
PI = 3.14159
 
def luas_persegi(sisi: float) -> float:
    """Luas persegi.
 
    Parameter: sisi (float) panjang sisi.
    Return: float luas = sisi * sisi.
    """
    return sisi * sisi
 
def keliling_persegi(sisi: float) -> float:
    """Keliling persegi.
 
    Parameter: sisi (float) panjang sisi.
    Return: float keliling = 4 * sisi.
    """
    return 4 * sisi
 
def luas_persegi_panjang(panjang: float, lebar: float) -> float:
    """Luas persegi panjang.
 
    Parameter: panjang (float), lebar (float).
    Return: float luas = panjang * lebar.
    """
    return panjang * lebar
 
def keliling_persegi_panjang(panjang: float, lebar: float) -> float:
    """Keliling persegi panjang.
 
    Parameter: panjang (float), lebar (float).
    Return: float keliling = 2 * (panjang + lebar).
    """
    return 2 * (panjang + lebar)
 
def luas_lingkaran(jari_jari: float) -> float:
    """Luas lingkaran.
 
    Parameter: jari_jari (float).
    Return: float luas = PI * r^2.
    """
    return PI * jari_jari ** 2
 
def keliling_lingkaran(jari_jari: float) -> float:
    """Keliling lingkaran.
 
    Parameter: jari_jari (float).
    Return: float keliling = 2 * PI * r.
    """
    return 2 * PI * jari_jari
 
def celsius_ke_fahrenheit(celsius: float) -> float:
    """Konversi Celsius ke Fahrenheit.
 
    Parameter: celsius (float) suhu dalam derajat Celsius.
    Return: float suhu dalam Fahrenheit = C * 9/5 + 32.
    """
    return celsius * 9 / 5 + 32
 
def celsius_ke_kelvin(celsius: float) -> float:
    """Konversi Celsius ke Kelvin.
 
    Parameter: celsius (float) suhu dalam derajat Celsius.
    Return: float suhu dalam Kelvin = C + 273.15.
    """
    return celsius + 273.15
 
