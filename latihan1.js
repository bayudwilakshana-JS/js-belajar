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