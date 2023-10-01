const arr = [1, 423, 6, 46, 34, 23, 13, 53, 4];

function getMax(arr){
    let Max=0;
    for(let num of arr){
        if(num>Max){
            Max=num;
        }
    }
    return Max;
}

function getMin(arr){
    let Min=0;
    for(let num of arr){
        if(num<Min){
            Min=num;
        }
    }
    return Min;
}

let max_num=getMax(arr);
console.log(max_num);

let min_num=getMin(arr);
console.log(min_num);