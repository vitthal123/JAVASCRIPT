function arraySortedOrNot(arr, n) {
    // code here
    let isArrSorted=false;
    for(let i=0;i<n;i++){
        if(arr[i]>arr[i+1]){
            isArrSorted=true;
            break;
        }
    }
    if (isArrSorted){
        return 0
    }else{
        return 1;
    }
}

// N = 5
// arr[] = {10, 20, 30, 40, 50}
// Output: 1
let arr=[10, 20, 30, 40, 50]
let a=arraySortedOrNot(arr,6)
console.log(a);