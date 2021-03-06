/*
Problem
Diberikan function hitungHuruf(kalimat) yang akan menerima satu parameter berupa string. Function akan me-return kata dari kalimat yang memiliki jumlah perulangan huruf yang paling besar. Contoh: "Today, is the greatest day ever!" akan me-return "greatest" karena kata "greatest" memiliki 2 huruf e dan 2 huruf t, dan muncul lebih dulu. Jika tidak ditemukan kalimat dengan kata yang memiliki huruf berulang, return -1.

Code
*/
function hitungHuruf(kata) {
    var kumpulanKata = kata.split(' ');
    for (var i = 0; i < kumpulanKata.length; i++){
        var word = kumpulanKata[i];
        for(var j = 0; j < word.length; j++){
            var count = 0;
            for(var k = 0; k < word.length; k++) {
                if (word[k] === word[j]){
                    count++;
                }
            } 
            if(count > 1){
                return kumpulanKata[i];
            }
        }
    }
    // return kumpulanKata;
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau;