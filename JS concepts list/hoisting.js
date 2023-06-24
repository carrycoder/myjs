//Q1
// what does hoisting mean in js? show with an example. how is code executed in js? line by line from top to bottom?

//hoisting refers to ability of js to put some code on the top of the js file before the execution of the code actually begins.

console.log(myValue);
var myValue = 3;

//as we can observe on executing the above code that we get "undefined" as the logged value.
//but we dont get an error.
//the reason why that happens is because js takes the variable myValue above the js code and
//initializes its value as var myValue = undefined.
//in js code is executed from top to bottom line by line.

//--------------------

//Q2
//how is a function hoisting different from variable hoisting?
console.log(findSum(2, 3));
console.log(myValue);
function findSum(a, b) {
  return a + b;
}

var myValue = 4;

//we can observe from the above that when a function is hoisted , js takes the entire function
//definition to the top of the file and we get desired outputs but in case of variable hoisiting
//js does not take the entire variable and its initialized value to the top but just the variable
//itself and initializes it with undefined. so we dont get to see any errors in the console but the value
//which is printed is undefined.
//-----------------------------------------

//Q3
//is hoisting applicable to variables declared with let or const keywords?

console.log(variableConst);
console.log(variableLet);
const variableConst = 4;
let variableLet = 5;

// as we can observe from the above that variables which are declared with const or let
//keyword are not hoisted.
//we get this error ->ReferenceError: Cannot access 'variableConst' before initialization
//see in case of variables declared with var we dont get to see such errors but only a value which
//is undefined.

//--------------------------------------------------

//Q4
// how is hoisting functions different when a function expression is used and when function keyword is used? show how the error is different when var keyword is used in the function expression.

console.log(myFunc(3, 4));
const myFunc = (a, b) => {
  return a + b;
};

// this time around we used function expression to define our function and as we can observe that
// we get an error -> ReferenceError: Cannot access 'myFunc' before initialization
//therefore we can conlcude that only those functions are hoisted which are
// defined with the function keyword.

//b
console.log(myFunc2(3, 4));
var myFunc2 = (a, b) => {
  return a + b;
};

// this time around we declared the function expression with the var keyword
// and get an error like -> TypeError: myFunc2 is not a function
// as we can see the error is a bit different , why did that happen tho
//its because since the expression is declared with the var keyword
//so js hoisted it and initialized it as var myFunc2 = undefined.

//--------------------------------

//Q5
//check it with a combination of files but first check within the module .

// we will create functions
//myFunc and myFunc2 both with the const keyword
//so we already know that these wont be hoisted.
// the thing is that myFunc internally calls
// myFunc2 function but this myFunc2 function is declared after myFunc in the file.
// now altho logically it makes sense that myFunc2 function should be declared later than
// myFunc but we did the opposite
//is it going to make any differenece?
//the answer lies in the fact where the function is finally called
//if myFunc function is called before myFunc2 is declared we will
//get to see an error
//but if the myFunc function is called after all the functions are declared then
//its gonna be fine.
//so its always a good practice to declare all the functions at the top of the file.
//also its a good practice to define all the internal functions before its parent.
//that helps with the readability.

// const myFunc = (a, b) => {
//   const mynewVal = myFunc2(a, b);
//   return mynewVal;
// };

// const myFunc2 = (a, b) => {
//   return a + b;
// };

// const myAnswer = myFunc(3, 4);

//in the example above we wont see any errors.

const myFunc = (a, b) => {
  const mynewVal = myFunc2(a, b);
  return mynewVal;
};

const myAnswer = myFunc(3, 4);

const myFunc2 = (a, b) => {
  return a + b;
};

//but in this one we get to see an error so we can conclude that it all boils down to the fact
//where the function is finally executed. but still to maintian readability we can still
//consider decalring those internal functions above the parent function.

//b.
//in case of modules.
//we can create a file server2.js and define the functions as
const myFunc = (a, b) => {
  const mynewVal = myFunc2(a, b);
  return mynewVal;
};

const myFunc2 = (a, b) => {
  return a + b;
};

module.exports = myFunc;

//in server.js
const otherFunc = require('./server2.js');
console.log(otherFunc(3, 4));

//this wont throw any errors cuzz the entire module is first loaded and executed and then
//only it is executed so therefore there would be no errors.
