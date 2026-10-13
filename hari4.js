const harga = [15000,22000,8000,30000];
const barang = ["Pertalite", "Pertamax", "Dexlite"];

console.log(barang[0]);
console.log(barang[2]);    
console.log(barang[1]);

const buah = ["Apel", "Mangga"];
buah.push("Semangka");
buah.pop();
buah.unshift("Jeruk");
buah.shift();
buah[0] = "Pisang";

// mencari dan memotong array
const angka = [10, 20, 30, 40, 50];
angka.includes(30); // true
angka.indexOf(40); // 3
angka.slice(1,3); // [20, 30]

// perulangan array
const nilai = [80, 65, 90];
// cara 1: for biasa , kalau butuh nomor indeksnya
for (let i = 0; i < nilai.length; i++) {
    console.log("Indeks" + i + " : " + nilai[i]);
}

// cara 2: for of , lebih ringkas kalau cuma butuh isinya saja
for (const n of nilai) {
    console.log(n);
}

// array di dalam fungsi
function hitungTotal(daftarHarga) {
    let total = 0;
    for (const h of daftarHarga) {
        total += h;
    }
    return total;
}
console.log(hitungTotal([15000, 22000, 8000])); // 45000    