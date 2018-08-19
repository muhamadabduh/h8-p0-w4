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
        
        for(var j = 0; j < abjad.length && j<ABJAD.length; j++){
            if(kalimat[i] === abjad[j]){
                // console.log(kalimat[i], abjad[j]);
                newKalimat += ABJAD[j];
            } else if(kalimat[i] === ABJAD[j]){
                newKalimat += abjad[j];
            }
        }
        if(kalimat[i] === ' '){
            newKalimat += ' ';
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