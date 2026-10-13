function sapa (nama) {
    console.log("Halo " + nama + ", selamat datang!");
}
sapa ("Andi");
sapa ("Bayu");

function hitungLuasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
}
const luas = hitungLuasPersegiPanjang(10, 5);
console.log("Luas persegi panjang adalah " + luas);

function celsiusKeFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
const suhuFahrenheit = celsiusKeFahrenheit(37);
console.log("Suhu dalam Fahrenheit adalah " + suhuFahrenheit);

function grade(nilai) {
    if (nilai >= 85) {
        return "A";
    } else if (nilai >= 70 && nilai < 85) {
        return "B";
    } else if (nilai >= 55 && nilai < 70) {
        return "C";
    } else {
        return "tidak lulus";
    }
}
const nilai = 53;
const hasilGrade = grade(nilai);
console.log("Nilai Anda adalah " + nilai + ", sehingga mendapatkan grade " + hasilGrade);

function ganjilGenap(angka) {
for (let i = 1; i <= angka; i++) {
    if (i % 2 === 0) {
        console.log(i + " adalah bilangan genap");
    } else {
        console.log(i + " adalah bilangan ganjil");
    }
}
}
ganjilGenap(5);

function hitungHargaDiskon(hargaAwal, diskon) {
    return hargaAwal - (hargaAwal * diskon);
}
const hargaAwal = 150000;
const diskon = 0.2;
const hargaDiskon = hitungHargaDiskon(hargaAwal, diskon);
console.log("Harga awal: " + hargaAwal);
console.log("Harga setelah diskon: " + hargaDiskon);

function jumlahSampaiN(n) {
    let total = 0;  
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
const hasilJumlah = jumlahSampaiN(100);
console.log("Jumlah sampai 100 adalah " + hasilJumlah);