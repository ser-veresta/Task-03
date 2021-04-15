//input string
let str = "the TiTlE rocks";

//titleCaps fuction to change the given string to title caps
let titleCaps = (s) =>{
    s = s.toLowerCase();
    let arr = s.split(" ");
    return (arr.map(word => word.charAt(0).toUpperCase() + word.slice(1))).join(" ");
}

//pritning the output in the console
console.log(titleCaps(str));
