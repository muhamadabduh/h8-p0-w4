/*
Problem
Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string. Functiona akan me-return sebuah kata baru dimana setiap huruf akan digantikan dengan huruf alfabet setelahnya. Contoh, huruf a akan menjadi b, c akan menjadi d, k menjadi l, dan z menjadi a.

Code
*/
function ubahHuruf(kata) {
  var abjad = 'abcdefghijklmnopqrstuvwxyz';
  var kataBaru = '';
  for (var i = 0; i < kata.length;i++){
    for(var j = 0; j < abjad.length;j++){
        if(kata[i] === abjad[j]){
            if(abjad[j] === 'z'){
                kataBaru += 'a';
            } else {
                kataBaru += abjad[j+1];
            }
        } 
    }
  }
  return kataBaru;
}

// TEST CASES
console.log(ubahHuruf('woz')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu