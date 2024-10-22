const KhodamList = [
"Ambatron",
"Mas Faiz",
"Mas Rusdi",
"Anggota PSHT",
"Anggota sound horeg",
"Ambatukam",
"Maaf mah aku gagal",
"Raja iblis",
"Mikey",
"Ganteng",
"Gila",
"Bing chiling",
"Cina",
"Laba laba sunda",
"Atmin slot",
"Waduh",
"Wibu",
"Pacar Mikasa",
"Pacar Elaina",
"Pacar Violet",
"Tch aku bluettoh",
"Pacar Sayu",
"Skibidi",
"Sigma",
"Gyat",
"Kai cenat",
"Roger Sumatra",
"Dokter",
"Pengacara",
"Tukang listrik",
"Guru",
"Sopir truk",
"Pemadam kebakaran",
"Polisi",
"Penari balet",
"Petani",
"Montir",
"Tukang kayu",
"Koki",
"Penyanyi",
"Artis",
"Tentara",
"Pramugari",
"Astronot",
"Ilmuwan",
"Penulis",
"Programmer",
"Desainer grafis",
"Fotografer",
"Aktor",
"Penyiar radio",
"Produser film",
"Pilot",
"Arsitek",
"Atlet",
"Musisi",
"Penjahit",
"Pemandu wisata",
"Pemimpin redaksi",
"Wartawan",
"Ahli bedah",
"Konsultan keuangan",
"Barista",
"Bartender",
"Pemain bola",
"Mekanik sepeda motor",
"Ahli biologi",
"Manajer proyek",
"Direktur pemasaran",
"Teknisi komputer",
"Teknisi jaringan",
"Insinyur sipil",
"Pengusaha",
"Pustakawan",
"Ahli gizi",
"Terapis fisik",
"Editor video",
"Sutradara film",
"Koreografer",
"Penjaga kebun binatang",
"Pelukis",
"Perancang busana",
"Manajer hotel",
"Dosen",
"Apoteker",
"Peneliti",
"Tukang ledeng",
"Pengembang web",
"Teknisi laboratorium",
"Psikolog",
"Guru bahasa",
"Pilot drone",
"Polisi lalu lintas",
"Ahli geologi",
"Pemahat",
"Animator",
"Direktur kreatif",
"Kurator museum",
"Petugas kebersihan",
"Ahli statistik",
"Pengemudi bus",
"Ahli SEO",
"Pelatih olahraga",
"Manajer toko",
"Spesialis HR",
"Perancang interior",
"Ahli akupuntur",
"Tukang bunga",
"Pakar keamanan siber",
"Pengacara paten",
"Ahli forensik",
"Ahli botani",
"Produser acara TV",
"Penulis naskah",
"Manajer restoran",
"Ahli agronomi",
"Tukang las",
"Pengemudi ojek",
"Ahli bahasa",
"Penyusun anggaran",
"Manajer keuangan",
"Spesialis pajak",
"Ahli jantung",
"Dokter anak",
"Ahli radiologi",
"Manajer risiko",
"Teknisi gigi",
"Spesialis kesehatan lingkungan",
"Manajer inventaris",
"Petugas logistik",
"Perawat",
"Paramedis",
"Perancang aplikasi",
"Ahli kecantikan",
"Manajer produksi",
"Penilai properti",
"Spesialis pengembangan produk",
"Penyelam profesional",
"Pengembang perangkat lunak",
"Ahli etika",
"Penasehat hukum",
];

// Kagunaan pungsi
function PilihKhodam(event) {
  event.preventDefault(); // Ameh form tong ngirim default hh
  const nama = document.getElementById("nama").value; // Nyokot nilai ti inputan jeng nyokot elemen nama
  const resultDiv = document.getElementById("result"); // nyokot elemen ti id hasil
  resultDiv.textContent = ""; // ngosongkeun konten samemehna

  if (nama) {
    const randomIndex = Math.floor(Math.random() * KhodamList.length); // Ngahasilkan indeks acak
    const khodampilihan = KhodamList[randomIndex]; // Milihan khodam na acak
    resultDiv.textContent = `Nama ${nama} dan anda adalah '${khodampilihan}'`; // Nampilkeun hasil

    setTimeout(() => {
      resultDiv.textContent = ""; // Ngahapus hasil mun lewat 5 detik heeuh
    }, 5000);
  } else {
    resultDiv.textContent = "Nama tidak boleh kosong"; // Nembongkeun pesan mun teu di eusian
  }
}

// Nambahkeun dedengean
document.getElementById("Khodamform").addEventListener("submit", PilihKhodam);