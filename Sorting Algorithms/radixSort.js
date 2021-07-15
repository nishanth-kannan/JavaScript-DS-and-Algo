//works only for integers technically, but blazing fast

//helper functions
function getDigit(num, digit){
    // let reqDigit = 0;
    // num = Math.abs(num);
    // for(let i = 0; i <= digit; i++){
    //     reqDigit = num % 10;
    //     num = Math.floor(num / 10);
    //     //console.log(num, reqDigit);
    // }
    // return reqDigit;
    return Math.floor(Math.abs(num) / Math.pow(10, digit)) % 10;
}

function digitCount(num){
    // let count = 0;
    // if(num == 0) return 1;
    // while(getDigit(num, count) > 0){
    //     count++;
    // }
    // return count;
    if(num == 0) return 1;
    return Math.floor(Math.log10(num)) + 1;
}

function mostDigits(arr){
    // let max = -1;
    // for(let elem of arr){
    //     max = max > digitCount(elem) ? max : digitCount(elem);
    // }
    // return max;
    return Math.max(...arr.map(num => digitCount(num)));
}

function radixSort(arr){
    let maxDigitCount = mostDigits(arr);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < arr.length; i++){
            let digit = getDigit(arr[i], k);
            digitBuckets[digit].push(arr[i]);
        }
        arr = [].concat(...digitBuckets);
    }
    return arr;
}

console.log(getDigit(12345, 5));
console.log(digitCount(123));   
console.log(mostDigits([172379, 21389, 21234]));
console.log(radixSort([2376912, 347187, 18237, 314718, 123134, 34, 1, 2123, 24]))