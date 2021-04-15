//input array
let arr = ["malayalam","121","telgu","car"];

//IIFE to print the palindromes in and array
(arr => {
    let palindrome = arr.filter(item => item === item.split("").reverse().join(""));
    console.log(palindrome.join(" "));
})(arr);
