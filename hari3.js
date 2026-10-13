function sapa(nama) {
    console.log("Halo " + nama + ", selamat datang!");
}
sapa("Andi");
sapa("Bayu");

function hitungLuasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
}
const luas = hitungLuasPersegiPanjang(10, 5);
console.log("Luas persegi panjang adalah " + luas);

function celsiusKeFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
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
const nilai = [85, 84, 70, 69, 55, 54];
for (let i = 0; i < nilai.length; i++) {
    const hasilGrade = grade(nilai[i]);
    console.log("Nilai Anda adalah " + nilai[i] + ", sehingga mendapatkan grade " + hasilGrade);
}

function ganjilGenap(angka) {
    if (angka % 2 === 0) {
        return "genap";
    }
    return "ganjil";
}
for (let i = 1; i <= 5; i++) {
    console.log(i + " adalah bilangan " + ganjilGenap(i));
}


function hitungHargaDiskon(harga, persenDiskon) {
    return harga - (harga * persenDiskon / 100);
}
console.log("Harga setelah diskon adalah " + hitungHargaDiskon(150000, 20));

function jumlahSampaiN(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
const hasilJumlah = jumlahSampaiN(100);
console.log("Jumlah sampai 100 adalah " + hasilJumlah);