//string datatype

let lname:string;

lname="Rohith";

let newname=lname.toUpperCase();

console.log(newname);


//number datatype

let age:number;

age=21;
age=21.5;

let dob="25";

let result=parseInt(dob);

console.log(result);

//boolean datatype

let isValid:boolean=false;

console.log(isValid);


//Array Dataype

let empList : string[];

empList=["Rohith","Rohith1","Rohith2"];

let numList:Array<number>;

numList=[1,2,3,4,5];

let results=numList.filter((num)=>num>2);

console.log(results);

let num=numList.find((num)=>num===2);

console.log(num);

let emp=empList.find((emp)=>emp==="Rohith");

console.log(emp);

let sum=numList.reduce((acc,num)=>acc+num);

console.log(sum);

//enum datatype

const enum Color
{
    Red,
    Blue,
    Yellow
};

let c:Color = Color.Blue;

console.log(c);

let swapNumbs : [number,number];

function swapNumbers(num1,num2):[number,number]{
    return [num2,num1];
}

swapNumbs=swapNumbers(10,20);

console.log(swapNumbs[0]);

//any datatype

let department:any;

department="IT";
console.log(department);

department=10;
console.log(department);


function add(num1:number,num2:number){
    return num1+num2;
}

let newSum=add(10,20);

console.log(newSum);

