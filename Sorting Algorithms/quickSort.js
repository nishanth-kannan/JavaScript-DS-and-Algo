function pivot(arr, start = 0, end = arr.length - 1){ //this code only works if pivot is the starting elem
    let pivotIndex = start; // index of elem you wanna take as pivot
    let pivotElem = arr[start]; 

    const swap = (arr, i, j) => { //swap function
        [arr[i], arr[j]] = [arr[j], arr[i]];
        return arr;
    }
    
    for(let i = start + 1; i <= end; i++){ //looping through elems other than the pivot (to the right of the pivot, which is why it works only for first elem pivot)
        if(arr[i] < pivotElem){
            pivotIndex++;
            swap(arr, pivotIndex, i); // keep swapping elems till all the ones lesser than pivot on left, and all greater on the right
        }
    }
    swap(arr, pivotIndex, start); // put pivot elem in rightful place
    //console.log(arr);
    return pivotIndex; // return index of pivot
}

function quickSort(arr, left = 0, right = arr.length - 1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right); // index of pivot of each iter
        quickSort(arr, left, pivotIndex-1); // quick sort on left of pivot
        quickSort(arr, pivotIndex+1, right); // quick sort on right side of pivot
    }
    return arr;
}


//pivot([6, 3, 1, 4, 5, 2, 8, 7]);
console.log(quickSort([-3, 6, 3, 1, 4, 5, 2, 8, 7]));