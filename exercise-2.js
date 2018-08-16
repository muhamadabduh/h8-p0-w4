/*
Problem
Diberikan sebuah function fpb(angka1, angka2) yang menerima dua parameter angka. Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar). FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut.

pseudocode:
0. buat variabel array untuk menampung faktor-faktor prima masing-masing angka
1. urutkan array penampung faktor tersebut dari yang terkecil ke yang terbesar
2. buat variabel i untuk menghitung faktor yang sama dari kedua angka.
3. cek jika faktor sama, tambahkan i. jika berbeda

*/



function fpb(angka1, angka2) {
    
    var faktorAngka1 = [];
    for(var i = 2; i < angka1; i++){
        if(angka1%i === 0){
            faktorAngka1.push(i);
        }
    }

    var faktorAngka2 = [];
    for (var j = 0; j < angka2; j++){
        if(angka2%j === 0){
            faktorAngka2.push(j);
        }
    }

    if(faktorAngka1.length == 0 || faktorAngka2.length == 0){
        return 1;
    }


    var faktorSekutu = [];
    for(var k = 0; k < faktorAngka1.length; k++){
        for(var l = 0; l < faktorAngka2.length; l++){
            if(faktorAngka1[k] === faktorAngka2[l]){
                faktorSekutu.push(faktorAngka1[k]);
            }
        }
    }

return faktorSekutu[faktorSekutu.length-1];

}
// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1