//latihan 1
const barang = ["Pertamax", "Pertalite", "Solar", "Dexlite", "Premium"];
console.log(barang[0]);
console.log(barang[barang.length - 1]);

// latihan 2
barang.push("Pertamax Turbo");
console.log(barang);
barang.pop();
console.log(barang);

// latihan 3
for (let i = 0; i < barang.length; i++) {
    console.log(barang[i]);
}
for (const item of barang) {
    console.log(item);
}

// latihan 4
const daftar = [15000, 22000, 8000, 30000]
function hitungTotal(daftar){
    let total = 0;
    for (const item of daftar){
        total += item;
    }
    return total;
}
console.log("Total harga semua barang adalah " + hitungTotal(daftar));

// latihan 5
const daftarAngka = [80, 65, 90, 75];
function hitungRataRata(daftarAngka){
    let total = 0;
    for (const item of daftarAngka){
        total += item;
    }
    return total / daftarAngka.length;
}
console.log("Rata-rata nilai adalah " + hitungRataRata(daftarAngka));

// latihan 6
const nilaiAngka = [12, 45, 7, 89, 23];
function cariNilaiTertinggi(nilaiAngka){
    let tertinggi = nilaiAngka[0];
    for (const item of nilaiAngka){
        if (item > tertinggi){
            tertinggi = item;
        } 
    }
    return tertinggi;
}
console.log("Nilai tertinggi adalah " + cariNilaiTertinggi(nilaiAngka));

// latihan 7
const daftarNilai = [80, 40, 55, 90, 54, 70];
function hitungYangLulus(daftarNilai){
    let lulus = 0;
    for (const item of daftarNilai){
        if (item >= 55){
            lulus++;
        }
    }
    return lulus;
}
console.log("Jumlah siswa yang lulus adalah " + hitungYangLulus(daftarNilai));

//latihan 8
function ambilGenap(daftarAngka){
    const genap = [];
    for (const item of daftarAngka){
        if (item % 2 === 0){
            genap.push(item);
        }
    }
    return genap;
}
console.log("Bilangan genap dari daftar adalah " + ambilGenap([1, 2, 3, 4, 5, 6]));