let a = parseFloat(prompt("Nhập vào số thứ nhất : "));
let b = parseFloat(prompt("Nhập vào số thứ hai : "));
let c = parseFloat(prompt("Nhập vào số thứ ba :"));

// let max;
// if(a >= b && a >=c)
// {
//      max = a;
// }
// else if(b >= c && b >=d)
// {
//     max = b;
// }
// else {
//     max = c;
// }
// console.log("Đây là số lớn nhất",max);
let max = Math.max(a,b,c);
console.log("max = ",max);