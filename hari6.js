const daftarProduk = [
  { nama: "Pertalite", harga: 10000, stok: 500 },
  { nama: "Pertamax", harga: 16500, stok: 300 },
  { nama: "Dexlite", harga: 23700, stok: 0 },
  { nama: "Solar", harga: 5000, stok: 200 }
];

const namaSaja = daftarProduk.map((p) => p.nama);
const naikHarga = daftarProduk.map((p) => p.harga + 500);
const ambilStok = daftarProduk.filter((p) => p.stok > 0);
const ambilHarga = daftarProduk
    .filter((p) => p.harga >= 10000)
    .map((p) => p.nama);
console.log(namaSaja);   // ["Pertalite", "Pertamax", "Dexlite", "Solar"]
console.log(naikHarga);
console.log(ambilStok);
console.log(ambilHarga);

const hitungTotalStok = daftarProduk.reduce((total, n) => total + n.stok, 0);
console.log(hitungTotalStok);

const hitungTotalHarga = daftarProduk.reduce((total, p) => total + p.harga * p.stok, 0);
console.log(hitungTotalHarga);

const cariNama = daftarProduk.find((p) => p.nama === "Avtur");
console.log(cariNama);

const ambilNamaStok = daftarProduk
    .filter((p) => p.stok >0 && p.harga < 12000)
    .map((p) => p.nama);

console.log(ambilNamaStok);

const ambilHargaTertinggi = daftarProduk.reduce((tertinggi, p) => {
    if (p.harga > tertinggi){
        return p.harga;
    }else {
        return tertinggi;
    }
}, 0);
console.log(ambilHargaTertinggi);

const stokKosong = daftarProduk.some((p) => p.stok === 0);
console.log(stokKosong);

const hargaProduk = daftarProduk.every((p) => p.harga > 0);
console.log(hargaProduk);