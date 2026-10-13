let A = "28";
let B = "30";

console.log("Sebelum", A, B);

let sementara = A;
A = B;
B = sementara;

console.log("Sesudah", A, B);

const panjang = 25;
const lebar = 6;

console.log("Luas persegi panjang adalah " + panjang * lebar);

const celsius = 100;
const fahrenheit = (celsius * 9/5) + 32;

console.log(celsius + " derajat celsius adalah " + fahrenheit + " derajat fahrenheit");

const panjangSisi = 10;
const lebarSisi = 5;
const keliling = 2 * (panjangSisi + lebarSisi);

console.log("Keliling persegi panjang adalah " + keliling);

const farenheit2 = 120;
const celsius2 = (farenheit2 - 32) * 5/9;

console.log(farenheit2 + " konversi derajat fahrenheit ke celsius adalah " + celsius2 + " derajat celsius");

let diskon = 0.2;
let hargaAwal = 150000;
let hargaDiskon = hargaAwal - (hargaAwal * diskon);

console.log("Harga awal: " + hargaAwal);
console.log("Harga setelah diskon: " + hargaDiskon);