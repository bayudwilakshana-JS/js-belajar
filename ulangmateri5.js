const daftarManga = [
    { nama: "Manga", judul: "Jigokuraku", harga: 65000, stok: 20 },
    { nama: "Manga", judul: "Gokurakugai", harga: 55000, stok: 10 },
    { nama: "Manga", judul: "Gachiakuta", harga: 50000, stok: 5 },
    { nama: "Manga", judul: "Kagurabachi", harga: 45000, stok: 0 },
];

for (const manga of daftarManga) {
    console.log("Judul :" + manga.judul + ", Harga : " + manga.harga);
}

function jualManga(daftarManga, judul, jumlah) {
    // cek apakah stok valid
    if (jumlah <= 0) { return "Jumlah tidak valid";}
    //1. cek perulangan setiap manga di dalam daftar
    for (const judulManga of daftarManga) {
        if (judulManga.judul === judul) {

            if (judulManga.stok < jumlah) {
                return "Stok tidak cukup";
            }

            judulManga.stok -= jumlah;
            return "Berhasil"
        }
    }
    return "Produk tidak ditemukan"
}

console.log(jualManga(daftarManga, "Jigokuraku", -20));
console.log(daftarManga);

function ambilStokHabis(daftarManga){
    const habis = [];
    for (const item of daftarManga){
        if(item.stok === 0){
            habis.push(item)
        }
    }
    return habis;
}
console.log("Stok habis: ", ambilStokHabis(daftarManga));

function cariJudulManga(daftarManga, cariNama){
    for(const manga of daftarManga){
        if(manga.judul === cariNama){
            return manga;
        }
    }
    return null;
}
console.log(cariJudulManga(daftarManga, "Gachiakuta"));
console.log(cariJudulManga(daftarManga, "Goodbye Eri"));

function hitungNilaiStok(daftarManga){
    let total= 0;
    for (const s of daftarManga){
        total += s.stok * s.harga
    }
    return total;
}
console.log(hitungNilaiStok(daftarManga));

function hitungTotalStok(daftarManga){
    let total = 0;
    for (const p of daftarManga){
        total += p.stok;
    }
    return total;
}
console.log(hitungTotalStok(daftarManga));