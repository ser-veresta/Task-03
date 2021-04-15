//input array
let arr = [2,5,8,1,6,12,11,17];

//IIFE to print all the odd number in the given array
((a) => {
    let oddNum = a.filter(a => a%2 == 1);
    console.log(oddNum.join(" "));
})(arr);
