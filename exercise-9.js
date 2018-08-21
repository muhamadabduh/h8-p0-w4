/*
Problem
Diberikan function tukarBesarKecil(kalimat) yang menerima satu parameter berupa string. Function akan me-return string tersebut dengan menukar karakter yang uppercase menjadi lowercase, dan sebaliknya. Spasi dan simbol diabaikan.

Code
*/

function tukarBesarKecil(kalimat) {
    var abjad = 'abcdefghijklmnopqrstuvwxyz';
    var ABJAD = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var newKalimat = '';
    for (var i = 0; i < kalimat.length; i++){
        
        if(kalimat[i] === ' ' || kalimat[i] === '0' || kalimat[i] === '1' || kalimat[i] === '2' || kalimat[i] === '3' || kalimat[i] === '4' || kalimat[i] === '5' || kalimat[i] === '6' || kalimat[i] === '7' || kalimat[i] === '8' || kalimat[i] === '9'|| kalimat[i] === '-' || kalimat[i] === '_'){
            newKalimat += kalimat[i];
        } else {
            for(var j = 0; j < abjad.length && j<ABJAD.length; j++){
                if(kalimat[i] === abjad[j]){
                    newKalimat += abjad[j].toUpperCase();
                } else if(kalimat[i] === ABJAD[j]){
                    newKalimat += ABJAD[j].toLowerCase();
                }
            }
        }
    }
    
    return newKalimat;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"