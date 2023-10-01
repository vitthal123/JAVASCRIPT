/**
 * The sorting is done on string element default
 */
let arr1=[2,5,11,1,6,8,21];
arr1.sort(arrayDescOrder);
console.log(arr1);

// function for Acending Order
function arrayAscOrder(x,y){
return x-y
}

// function for Acending Order
function arrayDescOrder(x,y){
    return y-x
    }

/**
 * string type array
 */
let arr2=['banana','apple','pomegranete','grape'];
arr2.sort();
console.log(arr2);
