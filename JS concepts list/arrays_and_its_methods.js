//Q1
//Demo how we can use filter method in Arrays and how it returns either true or false and show how it does not change the original array.

// .filter is called on an array.
// .filter method takes in a callback function.
// that callback function iterates thru all the items in the array
// and returns eiether a true or a false depending upon the conditions set.
// and if it returns true for a particular iteration , that item is added to the modified array.
// so in layman terms we can say that whenever we have an array but we want to pick only certain items from that array
// then we can use the filter method.
const myArr = [
  {
    userId: 1,
    id: 1,
    title: 'quidem molestiae enim',
  },
  {
    userId: 1,
    id: 2,
    title: 'sunt qui excepturi placeat culpa',
  },
  {
    userId: 1,
    id: 3,
    title: 'omnis laborum odio',
  },
];

const modifiedArr = myArr.filter((item) => item.id % 2 !== 0);
console.log(modifiedArr);
console.log(myArr);

//as we can observe here that modifiedArr is the one which contains the filtered values while the original array remians
//intact.
//---------------------------------------

//Q2
// Demo how we can use the map method in Arrays to do
// a. have an array of objects with name, age and return only an array of name.
// b. modify the contents of the array passed in task a to add a new key and return that array.
// c. modify the contents such that we get rid of a field and add a new field.
// Also show how it does not alter the original array.

//a.
//map method takes in a callback.
// that callback modified the items of the array
// and the modified item is pushed in the modified array.
// its mostly used to transfrom the items of the array into something else depending on the purpose.
const myArr = [
  {
    id: 1,
    name: 'quidem molestiae enim',
  },
  {
    id: 2,
    name: 'sunt qui excepturi placeat culpa',
  },
  {
    id: 3,
    name: 'omnis laborum odio',
  },
];

const modifiedArr = myArr.map((item) => item.name);
console.log(modifiedArr);
console.log(myArr);
//as we can observe from above we just picked the name field from all the objects and pushed it into new array.
// wahtever we return in the callback gets pushed to the modified array.
//and again just like the filter method it also does not change the original array.

//b.
const newArr = myArr.map((item) => {
  item.randomNum = Math.floor(Math.random() * 10);
  return item;
});

console.log(newArr);

//now in this implementation of map we added a new field to the items in the array.
//hence we ccan conclude that .map method can be used to transfrom an array such that we can get rid of few fields or
// add new fields to the items of the array.

//c.
const myArr = [
  {
    userId: 1,
    id: 1,
    title: 'quidem molestiae enim',
  },
  {
    userId: 1,
    id: 2,
    title: 'sunt qui excepturi placeat culpa',
  },
  {
    userId: 1,
    id: 3,
    title: 'omnis laborum odio',
  },
  {
    userId: 1,
    id: 4,
    title: 'non esse culpa molestiae omnis sed optio',
  },
];

const modArray = myArr.map(({ userId, ...rest }) => {
  return {
    ...rest,
    randomNum: Math.random() * 10,
  };
});

console.log(modArray);
// as we can observe from above that the one kwy which is not required can be passed as a standalone key in
//map method's callback function. and the others can be passed as ...rest .

//--------------------------------------
//Q3
//Demo how can we use .find method to find the first match of an item in an array based on a criteria . Also show how it returns an "undefined" in case the value is not found.

//.find is called on an array.
// it takes a callback function as an argument.
//in the callback function we pass a match critera as a return statement.
//if the criteria is met then .find() stops executing and returns the first value
//which meets the criteria.

const myArr = [
  {
    userId: 1,
    id: 1,
    title: 'quidem molestiae enim',
  },
  {
    userId: 1,
    id: 2,
    title: 'sunt qui excepturi placeat culpa',
  },
  {
    userId: 1,
    id: 3,
    title: 'omnis laborum odio',
  },
];

const foundItem = myArr.find((item) => item.userId === 1);
console.log(foundItem);
const notFound = myArr.find((item) => item.userId !== 1);
console.log(notFound);

// and yes if no item is found which meets the criteria then undefined
// is returned.

//-----------------------------

//Q4
// Demo how we can use the forEach method to loop over an array and also demo how it does not return any values.
//b. Also show that it its illegal to use break and continue in a forEach method.
//c. Check if we alter the values of items of the array ,does it make any change to the original array therefore showing how the modifications done in the forEach method's callback is not reflected for all datatypes passed in the array.


const myArr = [
  {
    userId: 1,
    id: 1,
    title: 'quidem molestiae enim',
  },
  {
    userId: 1,
    id: 2,
    title: 'sunt qui excepturi placeat culpa',
  },
  {
    userId: 1,
    id: 3,
    title: 'omnis laborum odio',
  },
  {
    userId: 1,
    id: 4,
    title: 'non esse culpa molestiae omnis sed optio',
  },
];

myArr.forEach((item) => {
  console.log(item);
});

//as we can see , .forEach can be used to loop over an array just like how a normal for loop works.
// the callback function passed in the argument of the .forEach method is executed for each
//element inside of the array.

//b.

myArr.forEach((item)=>{
  if(item.userId===1){
    break;
  }else{
    continue;
  }
  console.log("overhere");
})

//as we can observe on runnning the code above ,that we get a syntax error
//stating Illegal break statement. therefore it can be concluded that
//use of break or continue statements inside of a forEach is illegal.

//c.

const myArr2 = [1, 2, 3, 4];
const myArr3 = ['saurav', 'gourav'];
const myArr4 = [{ name: 'saurav' }, { name: 'gourav' }];

myArr2.forEach((item) => {
  item = item + 2;
});

myArr3.forEach((item) => {
  item = item + ' jha';
});

myArr4.forEach((item) => {
  item.name = item.name + ' jha';
});
console.log(myArr2);
console.log(myArr3);
console.log(myArr4);

//as we can observe from the above that whether there would be modifications in the original array depends on if the array items are primitive or non-primitive.

//Q5.
// Demo how we can use the some method to find even if any one of the items in the array matches our condition then it returns a true ,else a false.

const myArr = [
  {
    userId: 1,
    id: 1,
    title: 'quidem molestiae enim',
  },
  {
    userId: 1,
    id: 2,
    title: 'sunt qui excepturi placeat culpa',
  },
  {
    userId: 1,
    id: 3,
    title: 'omnis laborum odio',
  },
  {
    userId: 1,
    id: 4,
    title: 'non esse culpa molestiae omnis sed optio',
  },
];

const elementPresent = myArr.some((item) => item.id > 3);
const elementAbsent = myArr.some((item) => item.userId !== 1);
console.log(elementPresent);
console.log(elementAbsent);
//as we can observe from the above that , .some method iterates thru the array and if the callback
// returns true for any one of the items ,then true is returned for overall value.
// and if after iterating thru the entire array if for all the elements the callback returns false
// then an overall false is returned.

//-------------------

//Q6. 
//Demo how we can use the every method to find if all the items of the array matches our condition then only it returns a true ,else a false.

const myArr = [
  {
    userId: 1,
    id: 1,
    title: 'quidem molestiae enim',
  },
  {
    userId: 1,
    id: 2,
    title: 'sunt qui excepturi placeat culpa',
  },
  {
    userId: 1,
    id: 3,
    title: 'omnis laborum odio',
  },
  {
    userId: 1,
    id: 4,
    title: 'non esse culpa molestiae omnis sed optio',
  },
];

const sameForAll = myArr.every((item) => item.userId === 1);
const notTrueForAll = myArr.every((item) => item.id === 4);
console.log(sameForAll);
console.log(notTrueForAll);

//as we can observe from above that .every iterates thru all the elements of the array
//and returns true only if the callback returns true for all the items.
//else an overall false is returned.

//--------------------------------------
//Q7.
// Demo how we can use the reduce method to find the sum of all the items in an array and also find the max element in an array.

const myArr = [
  {
    userId: 1,
    id: 1,
    title: 'quidem molestiae enim',
    listens: 2,
  },
  {
    userId: 1,
    id: 2,
    title: 'sunt qui excepturi placeat culpa',
    listens: 6,
  },
  {
    userId: 1,
    id: 3,
    title: 'omnis laborum odio',
    listens: 9,
  },
  {
    userId: 1,
    id: 4,
    title: 'non esse culpa molestiae omnis sed optio',
    listens: 4,
  },
];

const totalListens = myArr.reduce((currentListens, item) => {
  return item.listens + currentListens;
}, 0);

const allTitles = myArr.reduce((currentTitle, item) => {
  return item.title + ' ' + currentTitle;
}, '');

console.log(totalListens);
console.log(allTitles);

//as we can observe that .reduce method's callback takes in 2 arguments , first one is currentValue of the iterator
// and other is the item itself.
// also .reduce itself takes 2 arguments , one is the callback f(x) and the other is the initial value
//of the iterator.

//--------------------------------------

//Q8
//Demo how we can use .includes method to check for the existence of a value inside an array also how its better then find method also see how it checks for strict equality.

//Demo how we can use .includes method to check for the existence of a value inside an array also how its better then find method also see how it checks for strict equality.

const myArr = [1, 2, 3];

console.log(myArr.includes(2));
console.log(myArr.includes('2'));

// .includes method as demostrated above can be simply used to check for the presense of an element
//in an array.
// it returns true/false depending upon the value passed.
// it is better than .find method when we just wanna check the presense of an element in the array.
// also it checks for strict equality which means that it checks for value and type both when comparing
//values.

//----------------------------

//Q9. 
//Explain how the below snippet gives false.
/*
const arr = [
  { name: 'saurav', age: 24 },
  { name: 'gaurav', age: 45 },
  { name: 'ram', age: 34 },
  ];
  console.log(arr.includes({ name: 'saurav', age: 24 }));
  */

  const arr = [
    { name: 'saurav', age: 24 },
    { name: 'gaurav', age: 45 },
    { name: 'ram', age: 34 },
  ];
  console.log(arr.includes({ name: 'saurav', age: 24 }));
  
  //.includes starts iterating over the array starting with the first item,
  //tho it appears that since the value and type are same for the first item
  //and passed in item ,then it should return true but we are missing a
  //point here 2 objects are considered to be equal in js , only if they both reference to the
  //same object in memory.

//--------------------------
//Q10.