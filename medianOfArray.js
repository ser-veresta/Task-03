//input arrays
let arr1 = [1,12,15,26,38];
let arr2 = [2,13,17,30,45,];

//IFFE to calculate the median and print it 
((arr1,arr2) => {
    let joinedArray = arr1.concat(arr2);
    joinedArray.sort((a,b) => a-b);
    let len = arr1.length;
    console.log(parseInt((joinedArray[len] + joinedArray[len-1])/2));
})(arr1,arr2);
