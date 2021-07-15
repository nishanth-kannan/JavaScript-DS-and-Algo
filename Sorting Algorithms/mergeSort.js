function merge(arr1, arr2){ //merges two sorted arrays into a single sorted array // to be used in mergeSort
    let mergedArr = [];
    let index1 = 0, index2 = 0;

    while(index1 < arr1.length && index2 < arr2.length){ //stops whenevr smaller array ends
        if(arr1[index1] >= arr2[index2]){
            mergedArr.push(arr2[index2]);
            index2++;
        } else {
            mergedArr.push(arr1[index1]);
            index1++;
        }
    }

    if(index1 == arr1.length){ //concats the rest of the bigger array at the end (if theres ay left)
        mergedArr = mergedArr.concat(arr2.slice(index2));
    } else if(index2 == arr2.length){
        mergedArr = mergedArr.concat(arr1.slice(index1));
    }

    return mergedArr;
}
// console.log(merge([1,2,4,6,100], [3,7,9,45]));


function mergeSort(arr){
    if(arr.length <= 1) return arr;

    let mid = Math.floor(arr.length/2);
    let leftArr = mergeSort(arr.slice(0, mid));
    let rightArr =  mergeSort(arr.slice(mid));

    return merge(leftArr, rightArr);
}

console.log(mergeSort([232,34,5,11,43,56,4,221,3,356,35,1]));