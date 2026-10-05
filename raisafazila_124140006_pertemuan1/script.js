let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];

const formBarang = document.getElementById("formBarang");
const daftarBarang = document.getElementById("daftarBarang");

const namaBarang = document.getElementById("namaBarang");
const harga = document.getElementById("harga");
const qty = document.getElementById("qty");

const totalBelanja = document.getElementById("totalBelanja");
const diskon = document.getElementById("diskon");
const totalAkhir = document.getElementById("totalAkhir");
const uangBayar = document.getElementById("uangBayar");
const kembalian = document.getElementById("kembalian");

function rupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

function tampilkanBarang() {
  daftarBarang.innerHTML = "";

  let total = 0;

  for (let i = 0; i < keranjang.length; i++) {
    let barang = keranjang[i];
    let subtotal = barang.harga * barang.qty;

    total += subtotal;

    daftarBarang.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${barang.nama}</td>
        <td>${rupiah(barang.harga)}</td>
        <td>${barang.qty}</td>
        <td>${rupiah(subtotal)}</td>
        <td>
          <button class="hapus" onclick="hapusBarang(${i})">
            Hapus
          </button>
        </td>
      </tr>
    `;
  }

  totalBelanja.innerText = rupiah(total);

  let jumlahDiskon = 0;

  if (total >= 50000) {
    jumlahDiskon = total * 0.10;
  }

  diskon.innerText = rupiah(jumlahDiskon);

  let totalBayar = total - jumlahDiskon;

  totalAkhir.innerText = rupiah(totalBayar);

  hitungKembalian();

  localStorage.setItem(
    "keranjang",
    JSON.stringify(keranjang)
  );

  if (keranjang.length === 0) {
    document.getElementById("keranjangKosong").style.display = "block";
  } else {
    document.getElementById("keranjangKosong").style.display = "none";
  }
}

formBarang.addEventListener("submit", function(event) {
  event.preventDefault();

  document.getElementById("errorNama").innerText = "";
  document.getElementById("errorHarga").innerText = "";
  document.getElementById("errorQty").innerText = "";

  let nama = namaBarang.value.trim();
  let hargaBarang = Number(harga.value);
  let jumlah = Number(qty.value);

  let valid = true;

  if (nama.length < 3) {
    document.getElementById("errorNama").innerText =
      "Nama barang minimal 3 karakter.";
    valid = false;
  }

  if (harga.value === "" || hargaBarang < 500) {
    document.getElementById("errorHarga").innerText =
      "Harga minimal Rp500.";
    valid = false;
  }

  if (
    qty.value === "" ||
    jumlah < 1 ||
    !Number.isInteger(jumlah)
  ) {
    document.getElementById("errorQty").innerText =
      "Qty harus berupa angka bulat minimal 1.";
    valid = false;
  }

  if (!valid) {
    return;
  }

  keranjang.push({
    nama: nama,
    harga: hargaBarang,
    qty: jumlah
  });

  formBarang.reset();

  tampilkanBarang();
});

function hapusBarang(index) {
  keranjang.splice(index, 1);
  tampilkanBarang();
}

function hitungKembalian() {
  let total = 0;

  for (let barang of keranjang) {
    total += barang.harga * barang.qty;
  }

  let jumlahDiskon = 0;

  if (total >= 50000) {
    jumlahDiskon = total * 0.10;
  }

  let totalBayar = total - jumlahDiskon;
  let bayar = Number(uangBayar.value);

  if (uangBayar.value === "") {
    kembalian.innerText = "Kembalian: Rp0";
    return;
  }

  if (bayar < totalBayar) {
    let kurang = totalBayar - bayar;

    kembalian.innerText =
      "Uang masih kurang " + rupiah(kurang);

    kembalian.style.color = "red";
  } else {
    let hasil = bayar - totalBayar;

    kembalian.innerText =
      "Kembalian: " + rupiah(hasil);

    kembalian.style.color = "green";
  }
}

uangBayar.addEventListener("input", function() {
  hitungKembalian();
});

document.getElementById("reset").addEventListener("click", function() {
  keranjang = [];

  localStorage.removeItem("keranjang");

  uangBayar.value = "";

  tampilkanBarang();
});

tampilkanBarang();