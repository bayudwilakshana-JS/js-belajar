function grade(nilai) {
    if (nilai >= 85) {
        return "A";
    } else if (nilai >= 70) {
        return "B";
    } else if (nilai >= 55) {
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

function hitungHargaDiskon(harga, persenDiskon) {
    return harga - (harga * persenDiskon / 100);
}
console.log("Harga setelah diskon adalah " + hitungHargaDiskon(150000, 20));