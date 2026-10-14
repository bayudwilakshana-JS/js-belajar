// // belajar object
// const produk = {
//     nama: "Pertalite",
//     harga: 10000,
//     stok: 500,
//     kategori: "Bahan Bakar",
// };
// produk.stok = 450;
// produk.satuan = "liter";
// console.log(produk);

// // object dalam fungsi
// function hitungNilaiStok(produk) {
//     return produk.harga * produk.stok;
// }
// console.log("Nilai stok produk adalah " + hitungNilaiStok(produk));

// belajar array of object : bentuk data nyata 
// const daftarProduk1 = [
//     { nama : "Pertalite" , harga : "10000" , stok : "500"},
//     { nama : "Pertamax" , harga : "16500" , stok : "300"},
//     { nama : "Dexlite" , harga : "23700" , stok : "0"},
// ];
// console.log(daftarProduk1[1].nama);
// console.log(daftarProduk1.length);

// for (const p of daftarProduk){
//     console.log(p.nama + ": Rp " + p.harga + " (stok " + p.stok + ")");
// }


// latihan 1
const siswa = {
    nama : "Bayu",
    usia : 15,
    kelas: 10,
};
siswa.usia = 16;
siswa.alamat = "Jl.Rambutan"
console.log(siswa);

// latihan 2 
function perkenalan(siswa){
    return "Halo, aku " + siswa.nama + ", umur " + siswa.usia + ", kelas " + siswa.kelas;
}
console.log(perkenalan(siswa));

// latihan 3 

const daftarProduk = [
    { nama : "Pertalite" , harga : 10000 , stok : 500},
    { nama : "Pertamax" , harga : 16500 , stok : 300},
    { nama : "Dexlite" , harga : 23700, stok : 0},
    { nama : "Solar" , harga : 5000 , stok : 200},
];

for (const item of daftarProduk) {
    console.log(item);
}

//latihan 4
function hitungTotalStok(daftarProduk){
    let total =0;
    for (const p of daftarProduk){
        total += p.stok;
    }
    return total;
}
console.log(hitungTotalStok(daftarProduk));

//latihan 5
function hitungNilaiPersediaan(daftarProduk) {
    let total =0;
    for (const item of daftarProduk){
        total += item.stok * item.harga;
    }
    return total;
}
console.log(hitungNilaiPersediaan(daftarProduk));

function cariProduk(daftar, namaCari) {
    // 1. Loop setiap produk di dalam daftar
    for (const produk of daftar) {
        // 2. Cek apakah namanya cocok (menggunakan toLowerCase agar fleksibel)
        if (produk.nama === namaCari) {
            // Jika ketemu, langsung kembalikan objek produk tersebut
            return produk;
        }
    }
    
    // 3. Jika loop selesai sampai habis dan tidak ketemu, kembalikan null
    return null;
}

// === Tes dengan nama yang ADA ===
console.log(cariProduk(daftarProduk, "Pertamax")); 
// Output: { nama: 'Pertamax', harga: 16500, stok: 300 }

// === Tes dengan nama yang TIDAK ADA ===
console.log(cariProduk(daftarProduk, "Pertalite Premium")); 
// Output: null

function ambilStokHabis(daftarProduk){
    const habis =[];
 for (const item of daftarProduk){
        if (item.stok === 0){
            habis.push(item);
        }
    }
    return habis;
}
console.log("Stok Habis : ", ambilStokHabis(daftarProduk));

function jualProduk(daftarProduk, nama, jumlah) {
    // 1. Loop setiap produk di dalam daftar
    for (const produk of daftarProduk) {
        // 2. Cek apakah nama produk cocok (diabaikan huruf besar/kecilnya)
        if (produk.nama) {
            
            // 3. Cek apakah stok mencukupi
            if (produk.stok < jumlah) {
                return "Stok tidak cukup";
            }
            
            // 4. Jika cukup, kurangi stok dan kembalikan "Berhasil"
            produk.stok -= jumlah;
            return "Berhasil";
        }
    }
    
    // 5. Jika loop selesai tapi produk tidak ditemukan sama sekali
    return "Stok tidak cukup";
}

// === Contoh Pengujian ===
console.log(jualProduk(daftarProduk, "Pertalite", 100)); // "Berhasil"
console.log(jualProduk(daftarProduk, "Pertalite", 1000)); // "Stok tidak cukup"