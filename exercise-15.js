/*
Problem
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

NOTE:
Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga
*/
function changeVocals (str) {
  var vocals = [['a','b'], ['i','j'], ['u','v'], ['e','f'], ['o','p']];
  var newStr = '';
  for (var i = 0; i < str.length; i++){
    if(str[i] === 'a'|| str[i] ==='A'|| str[i] ==='i'|| str[i] ==='I'|| str[i] ==='u'|| str[i] ==='U'|| str[i] ==='e'|| str[i] ==='E'|| str[i] ==='o'|| str[i] ==='O'){
        for (var j = 0; j < vocals.length; j++){
            if(str[i] === vocals[j][0]){
                newStr += vocals[j][1];
            } else if(str[i] === vocals[j][0].toUpperCase()){
                newStr += vocals[j][1].toUpperCase();
            }
        }
    } else {
        newStr += str[i];
    }
  }
  return newStr;
}
// console.log(changeVocals('Abduh'));

function reverseWord (str) {
  var reverseString = '';
  for (var k = str.length-1; k >= 0; k--){
    reverseString += str[k];
  }
  return reverseString;
}

function setLowerUpperCase (str) {
  var strNew = '';
  for(var l = 0; l < str.length ; l++){
      if(str[l] === str[l].toLowerCase()){
          strNew += str[l].toUpperCase();
      } else if (str[l] === str[l].toUpperCase()){
          strNew += str[l].toLowerCase();    
      } else {
          strNew += str[l];
      }
  }
  return strNew;
}

function removeSpaces (str) {
  var noSpace = str.split(' ');
  var strBaru = '';
  for (var m = 0; m < noSpace.length; m++){
      strBaru += noSpace[m];
  }
  return strBaru;
}
// console.log(removeSpaces('ini saya'));
function passwordGenerator (name) {
  if (name.length < 5){
      return 'Minimal karakter yang diinputkan adalah 5 karakter';
  } else {
       return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'