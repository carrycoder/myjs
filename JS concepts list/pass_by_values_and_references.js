//Q1
//how are values passed in functions in js?
//pass by values and references

//how are values passed in functions in JS?
//the answer to this question lies in the fact what kind of variable is passed
//as argument in the function.
//in js we have 2 types of variables
//1 . primitive types
// and non primitive types
// primitive types are -> boolean, number , strings , symbol , null ,undefined.
//now the point to note here is that when primitive types are passed as arguments
//then those are passed by values while when the non primitive types are passed such as arrays and objects then those are passed by references.

//e.g.

let myValue = 4;

const myFunc = (someValue) => {
  someValue++;
  console.log(`from inside ${someValue}`);
};

myFunc(myValue);
console.log(`from outside ${myValue}`);

// when we pass a non primitive like an object or array

const myObj = {
  name: 'foobar',
  luckyNum: 4,
};

const myFunc2 = (someObj) => {
  someObj.luckyNum++;
  console.log(`frominside ${JSON.stringify(someObj)}`);
};

myFunc2(myObj);
console.log(`from outside ${JSON.stringify(myObj)}`);

// doing it for other non primitive like an array.

let myArr = [
  {
    id: 2,
    name: 'boofar',
  },
  {
    id: 3,
    name: 'loofar',
  },
];

const myArrayModify = (someArr) => {
  someArr.push({
    id: 4,
    name: 'fourth',
  });
  console.log(`from inside ${JSON.stringify(someArr)}`);
};
myArrayModify(myArr);
console.log(`from outside ${JSON.stringify(myArr)}`);

// hence now we can conclude that in js whether the variables are passed are passed by reference or value depends on the fact that if the type of variable is primitive or non-primitive.

//------------------------------
//Q2
//what are the primitive and non-primitive types in js?
//primitive types include -> number, string, undefined , null , symbol,boolean.
//non primitive types include -> objects, arrays etc.
//NOTE -> STRING IS A PRIMITIVE WHILE AN ARRAY IS NON.
//primitive types in JS are immutable while non ones are mutable.
//that means that we can change the properties of the non ones while we cant do the same for primitive ones.

const myArr = [1, 2, 3];
myArr[0] = 6;
console.log(myArr);

// primitive

const myStr = '123';
myStr[0] = '6';
console.log(myStr);

// hence we can conclude that we cant change the properties of the mutable ones while we can do it for non.

//------------------------
