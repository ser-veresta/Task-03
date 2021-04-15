//input array
let arr = [1,1,2,5,2,3,3,3,3,3,5,5];

//IIFE to remove the repeating elements and print the array
(arr => {
    let count = -1;
    for(let i in arr){
        let j = 0;
        count = -1;
        while(j<arr.length){
            if(arr[i] == arr[j]){
                count++;
            }
            if(count == 1){
                arr.splice(j,1);
                count--;
            }
            else{
                j++;
            }
        }
    }
    console.log(arr.join(" "));
})(arr);
