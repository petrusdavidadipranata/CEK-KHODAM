function pilihBuah() {
    var nama = document.getElementById('nama').value.trim(); // Mengambil nilai input nama

    // Validasi input nama
    if (nama === '') {
        alert('Silakan masukkan nama Anda.');
        return;
    }

    var hasilElem = document.getElementById('hasil');
    var loadingElem = document.getElementById('loading');
    var buah = ['Serigala Birahi', 'Buaya Darat', 'Mahkota dewa', 'Ular Naga', 'Buaya Putih', 'Buaya Belang', 'Kucing Oren', 'Harimau Pink', 'Kosong', 'Pocong Ngesot', 'Harimau Putih','Kosong','Raja Macan', 'Kera Ijo', 'Kuda Kepang', 'Beruk', 'Jaran','Dewa Kodok', 'Kanjeng Ratu Kulon', 'Nyi Roro Ngalor', 'Eyang Semar', 'Kosong' , 'Noyo Genggong', 'Kucing Kawin', 'Macan Birahi', 'Kosong', 'Siput Racing', 'Kura Kura berjembut','Singa Gondrong', 'Tuyul Gondrong', 'Kunti Botak', 'Sundel Bolongnya 2', 'Kosong', 'Kuda Sumbing', 'Kambing Guling', 'Babi Ngepet', 'Babi Terkunci Stang', 'Arjuna Mencari LC', 'Suster Ngepot', 'Genderuwo o nya 8', 'Sambel Terasi', 'Zebra kros'];

    loadingElem.style.display = 'block';
    hasilElem.style.display = 'none';

    setTimeout(function() {
        var randomIndex = Math.floor(Math.random() * buah.length);
        var hasilPemilihan = buah[randomIndex];

        loadingElem.style.display = 'none';
        hasilElem.style.display = 'block';
        hasilElem.innerHTML = `<p class="nama">${nama}</p><p>Khodamnya:</p><p class="hsl">${hasilPemilihan}</p>`;
    }, 2000);
}
