//input array
let arr = [1,5,6];

//IIFE to calculate and print the sum of numbers in an array
(a => {
    let sum = a.reduce((sum,item) => sum + item,0);
    console.log(sum);
})(arr);
