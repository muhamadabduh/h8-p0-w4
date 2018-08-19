/*
Problem
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false.

Code
*/
function checkAB(num) {
    var posisiA = [];
    var posisiB = [];
    for (var i = 0; i < num.length; i++){
        if(num[i] === 'a'){
            posisiA.push(i);
        } else if(num[i]=== 'b'){
            posisiB.push(i);
        }
    }
    if(posisiA.length == 0 || posisiB.length == 0){
        return false;
    }
    var jarakAB = [];
    for (var j = 0; j < posisiA.length; j++){
        for (var k = 0; k < posisiB.length; k++){
            jarakAB.push(Math.abs(posisiA[j]-posisiB[k]));
        }
    }
   
    var check = false;
    var l = 0;
    while(check == false){
        if(jarakAB[l] >= 3){
            check = true;
        }
        l++;
    }
    return check;
    
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false