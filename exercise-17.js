/*
Diberikan sebuah function totalDigitRekursif(angka) yang menerima satu parameter berupa angka. Function akan me-return nilai total dari digit tersebut dengan menambahkan satu per satu angka dari digit paling depan ke paling belakang. Wajib menggunakan rekursif untuk berlatih rekursif! Disarankan untuk tidak menggunakan looping for untuk soal ini.

Contoh:

512, berarti outputnya adalah 8, karena 5 + 1 + 2 = 8. 1542, berarti outputnya adalah 12, karena 1 + 5 + 4 + 2 = 12.

Code
*/
function totalDigitRekursif(angka) {
    var angkaBaru = String(angka);
//   console.log(angkaBaru[0]+angkaBaru[1]);
//   console.log(angka);
    if(angkaBaru.length == 1){
        return Number(angkaBaru);
    } else {
        return Number(angkaBaru[0]) + totalDigitRekursif(angkaBaru.substr(1));
    }
  
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5