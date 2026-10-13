const nilai2 = 53;
if (nilai2 >= 85) {
    console.log("Selamat, Anda lulus dengan nilai A");
} else if (nilai2 >= 70 && nilai2 < 85) {
    console.log("Selamat, Anda lulus dengan nilai B");
} else if (nilai2 >= 55 && nilai2 < 70) {
    console.log("Selamat, Anda lulus dengan nilai C");
}else {
    console.log("Maaf, Anda tidak lulus");
} 

const angka2 = 7;
if (angka2 % 2 === 0) {
    console.log(angka2 + " adalah bilangan genap");
}else {
    console.log(angka2 + " adalah bilangan ganjil");
}

for (let i = 1; i <= 10; i++) {
  console.log("Perulangan Angka ke-" + i);
}

let total = 0;
for (let i = 1; i <= 100; i++) {
  total += i;
}
console.log("Total: " + total);

const perkalian = 7;
for (let i = 1; i <= 10; i++) {
  console.log(perkalian + " x " + i + " = " + (perkalian * i));
}

const fizzBuzz = 20;
for (let i = 1; i <= fizzBuzz; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}