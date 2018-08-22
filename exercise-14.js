/*
Problem
Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). Dilarang mengubah isi dalam function mostFrequentLargestNumbers!
*/
function sorting(arrNumber) {
    if(arrNumber.length < 1){
        return [];
    }
    for (var i = 0; i < arrNumber.length; i++){
        for(var j = 0; j < arrNumber.length-i-1; j++){
            if(arrNumber[j] > arrNumber[j+1]){
                var tmp = arrNumber[j];
                arrNumber[j] = arrNumber[j+1];
                arrNumber[j+1] = tmp; 
            }
        }
    }
    return arrNumber;
}


function getTotal(arrNumber) {
    if(arrNumber.length < 1){
        return '';
    }
    var input = sorting(arrNumber);
    var highestNum = input[input.length-1];
    var count = 0;
    for(var k = 0; k < input.length; k++){
        
        if(input[k] == highestNum){
            count++;
        }
    }
    return 'angka paling besar adalah ' + input[input.length-1] + ' dan jumlah kemunculan sebanyak ' + count + ' kali';
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''