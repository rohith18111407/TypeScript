//string datatype
var lname;
lname = "Rohith";
var newname = lname.toUpperCase();
console.log(newname);
//number datatype
var age;
age = 21;
age = 21.5;
var dob = "25";
var result = parseInt(dob);
console.log(result);
//boolean datatype
var isValid = false;
console.log(isValid);
//Array Dataype
var empList;
empList = ["Rohith", "Rohith1", "Rohith2"];
var numList;
numList = [1, 2, 3, 4, 5];
var results = numList.filter(function (num) { return num > 2; });
console.log(results);
var num = numList.find(function (num) { return num === 2; });
console.log(num);
var emp = empList.find(function (emp) { return emp === "Rohith"; });
console.log(emp);
var sum = numList.reduce(function (acc, num) { return acc + num; });
console.log(sum);
;
var c = 1 /* Color.Blue */;
console.log(c);
var swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
console.log(swapNumbs[0]);
//any datatype
var department;
department = "IT";
console.log(department);
department = 10;
console.log(department);
function add(num1, num2) {
    return num1 + num2;
}
var newSum = add(10, 20);
console.log(newSum);
