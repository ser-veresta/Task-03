//input array and k
let arr = [1,2,3];
let k = 1;

//IIFE to rotate the given array k times and print the output
((arr,k) => {
    let i = 0,temp;
    while(i<k){
        temp = arr.pop();
        arr.unshift(temp);
        i++;
    }
    console.log(arr.join(" "));
})(arr,k);
