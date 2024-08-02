//num3 is optional parameter
function add(num1:number,num2:number,num3?:number):number{
    return num3?num1+num2+num3:num1+num2;
}

console.log(add(1,2));
console.log(add(1,2,3));


//num3 is required parameter
const sub=(num1:number,num2:number,num3=10):number=>num1-num2-num3;

console.log(sub(2,3));
console.log(sub(2,3,5));

const mult=function(num1:number,num2:number): number{
    return num1*num2;
}

console.log(mult(2,3));


//rest parameters
function add2(num1:number,num2:number,...num3:number[]):number{
    return num1+num2+num3.reduce((a,b)=>a+b,0);
}

let numbers=[1,2,3,4]
console.log(add2(1,2,...numbers));

