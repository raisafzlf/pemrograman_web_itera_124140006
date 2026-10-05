const nama = "Raisa Fazila";
let umur = 20;
const kota = "Bandar Lampung";

document.getElementById("hasil").innerHTML += `
  <p>Nama: ${nama}</p>
  <p>Umur: ${umur}</p>
  <p>Kota: ${kota}</p>
`;

let nilai = 80;
let status = nilai >= 70 ? "Lulus" : "Tidak Lulus";

document.getElementById("hasil").innerHTML += `
  <p>Nilai: ${nilai}</p>
  <p>Status: ${status}</p>
`;

let kategori = "";

if (umur < 12) {
  kategori = "Anak-anak";
} else if (umur <= 17) {
  kategori = "Remaja";
} else if (umur <= 59) {
  kategori = "Dewasa";
} else {
  kategori = "Lansia";
}

document.getElementById("hasil").innerHTML += `
  <p>Kategori umur: ${kategori}</p>
`;

let hari = 1;
let namaHari = "";

switch (hari) {
  case 1:
    namaHari = "Senin";
    break;
  case 2:
    namaHari = "Selasa";
    break;
  case 3:
    namaHari = "Rabu";
    break;
  case 4:
    namaHari = "Kamis";
    break;
  case 5:
    namaHari = "Jumat";
    break;
  case 6:
    namaHari = "Sabtu";
    break;
  case 7:
    namaHari = "Minggu";
    break;
  default:
    namaHari = "Hari tidak valid";
}

document.getElementById("hasil").innerHTML += `
  <p>Hari: ${namaHari}</p>
`;

let grade = nilai >= 90 ? "A" :
            nilai >= 80 ? "B" :
            nilai >= 70 ? "C" : "D";

document.getElementById("hasil").innerHTML += `
  <p>Grade: ${grade}</p>
`;

let hasilPerkalian = "";

for (let i = 1; i <= 10; i++) {
  hasilPerkalian += `${i} x 5 = ${i * 5}<br>`;
}

document.getElementById("hasil").innerHTML += `
  <hr>
  <h2>Tabel Perkalian</h2>
  ${hasilPerkalian}
`;

function faktorial(n) {
  let hasil = 1;

  for (let i = 1; i <= n; i++) {
    hasil *= i;
  }

  return hasil;
}

document.getElementById("hasil").innerHTML += `
  <h2>Faktorial</h2>
  <p>5! = ${faktorial(5)}</p>
`;

function cekPrima(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

document.getElementById("hasil").innerHTML += `
  <h2>Cek Bilangan Prima</h2>
  <p>7 adalah bilangan ${cekPrima(7) ? "prima" : "bukan prima"}</p>
`;

function hitungBMI(berat, tinggi) {
  return berat / (tinggi * tinggi);
}

let bmi = hitungBMI(55, 1.65);

document.getElementById("hasil").innerHTML += `
  <h2>Kalkulator BMI</h2>
  <p>BMI: ${bmi.toFixed(2)}</p>
`;

let fizzBuzz = "";

for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    fizzBuzz += "FizzBuzz ";
  } else if (i % 3 === 0) {
    fizzBuzz += "Fizz ";
  } else if (i % 5 === 0) {
    fizzBuzz += "Buzz ";
  } else {
    fizzBuzz += i + " ";
  }
}

document.getElementById("hasil").innerHTML += `
  <h2>FizzBuzz</h2>
  <p>${fizzBuzz}</p>
`;

const mahasiswa = [
  {
    nama: "Raisa",
    nilai: 85
  },
  {
    nama: "Alya",
    nilai: 90
  },
  {
    nama: "Dina",
    nilai: 75
  },
  {
    nama: "Sinta",
    nilai: 88
  },
  {
    nama: "Nadia",
    nilai: 92
  }
];

let daftarMahasiswa = "";

mahasiswa.forEach(function (mhs) {
  daftarMahasiswa += `<li>${mhs.nama} - ${mhs.nilai}</li>`;
});

document.getElementById("hasil").innerHTML += `
  <hr>
  <h2>Daftar Mahasiswa</h2>
  <ul>
    ${daftarMahasiswa}
  </ul>
`;

let nilaiTertinggi = mahasiswa[0];

for (let mhs of mahasiswa) {
  if (mhs.nilai > nilaiTertinggi.nilai) {
    nilaiTertinggi = mhs;
  }
}

document.getElementById("hasil").innerHTML += `
  <h2>Nilai Tertinggi</h2>
  <p>${nilaiTertinggi.nama} - ${nilaiTertinggi.nilai}</p>
`;

let totalNilai = 0;

for (let mhs of mahasiswa) {
  totalNilai += mhs.nilai;
}

let rataRataNilai = totalNilai / mahasiswa.length;

let nilaiDiAtasRata = mahasiswa.filter(function (mhs) {
  return mhs.nilai > rataRataNilai;
});

let daftarDiAtasRata = "";

nilaiDiAtasRata.forEach(function (mhs) {
  daftarDiAtasRata += `<li>${mhs.nama} - ${mhs.nilai}</li>`;
});

document.getElementById("hasil").innerHTML += `
  <h2>Nilai di Atas Rata-rata</h2>
  <p>Rata-rata: ${rataRataNilai.toFixed(2)}</p>
  <ul>
    ${daftarDiAtasRata}
  </ul>
`;

mahasiswa.sort(function (a, b) {
  return a.nama.localeCompare(b.nama);
});

let daftarUrut = "";

mahasiswa.forEach(function (mhs) {
  daftarUrut += `<li>${mhs.nama} - ${mhs.nilai}</li>`;
});

document.getElementById("hasil").innerHTML += `
  <h2>Urutan Berdasarkan Nama</h2>
  <ul>
    ${daftarUrut}
  </ul>
`;

const dom = document.getElementById("hasil");

let item = 0;

dom.innerHTML += `
  <hr>
  <h2>Manipulasi DOM</h2>
  <button id="tambah">Tambah Item</button>
  <button id="hapus">Hapus Item</button>
  <div id="daftarItem"></div>
`;

const daftarItem = document.getElementById("daftarItem");

document.getElementById("tambah").addEventListener("click", function () {
  item++;

  const data = document.createElement("p");
  data.textContent = "Item " + item;

  daftarItem.appendChild(data);
});

document.getElementById("hapus").addEventListener("click", function () {
  if (daftarItem.lastChild) {
    daftarItem.removeChild(daftarItem.lastChild);
    item--;
  }
});

dom.innerHTML += `
  <h2>Fetch API</h2>
  <button id="ambilData">Ambil Data</button>
  <div id="dataApi"></div>
`;

document.getElementById("ambilData").addEventListener("click", async function () {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    let hasil = "";

    data.slice(0, 5).forEach(function (post) {
      hasil += `
        <p>
          <strong>${post.title}</strong><br>
          ${post.body}
        </p>
      `;
    });

    document.getElementById("dataApi").innerHTML = hasil;
  } catch (error) {
    document.getElementById("dataApi").innerHTML =
      "Gagal mengambil data.";
  }
});