//input array
let arr = [1,2,3,4,5,8,9];

//prime fuction to return true if the given number is a prime
let prime = a => {
    let flag = true;
    for(let i=2;i<a;i++){
        if(a%i === 0){
            flag = false;
            break;
        }
    }
    return flag;
}

//IIFE to print all prime numbers in and array
(arr => {
    let primeNum = arr.filter(item => prime(item));
    console.log(primeNum.join(" "));
})(arr);
