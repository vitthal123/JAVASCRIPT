// 8. Write a JavaScript function that accepts a number as a parameter 
// and checks whether it is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that 
// has no positive divisors other than 1 and itself.

function isPrimeNo(num){
    let sqnum=Math.sqrt(num);
    let primeFlag=false;
    for(let i=2;i<sqnum;i++){
        if(num%i==0){
            primeFlag=true;
            return primeFlag;
        }
    }
    return primeFlag;
}

let p=isPrimeNo(27);
console.log(p);