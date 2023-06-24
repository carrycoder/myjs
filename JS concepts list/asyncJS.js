//Q0.
//what is async execution and give an example .

console.log('start');

setTimeout(() => {
  console.log('inside setTimeout');
}, 1000);

console.log('end');

//when we execute the above code , setTimeout() is an async method which executes the callback passed to it
//wrt to the delay provided.
//but that doesnot stop JS from executing the next line of code.
//so using async execution we get the non blocking nature.
//Overall, async in computer science refers to the ability to perform tasks concurrently and non-blockingly, enabling efficient utilization of resources and improving the responsiveness of programs, particularly when dealing with I/O operations and other potentially time-consuming tasks.

//Q1
//what is a callback function ? are callbacks async by themselves? give a simple example. also give an example of a async callback.

const sum = (a, b, callback) => {
  const answer = a + b;
  callback(answer);
};

const printResult = (value) => {
  console.log(`the answer is ${value}`);
};

sum(1, 2, printResult);

//lets imagine a scenario where we want to add 2 numbers and log the result to the console.
//very simple scenario
//but we know for a reason that before logging the result to the console.
//we have to make sure that we have added those 2 numbers else
//we might get an error.
//therefore our printResult function is passed as a callback.
//callback means nothing but a function passed to another function
//which the parent function executes after a certain period of time.

//the above example is a synchronous code.
//so we can say that callbacks are not async by default
//but its the method that we implement which makes it async.

const sum = (a, b, callback) => {
  let val = 0;
  setTimeout(() => {
    val = a + b;
    callback(val);
  }, 10);
  console.log('the sum is ');
};

const printResult = (value) => {
  console.log(value);
};

sum(1, 2, printResult);
//earlier we saw an example where the callback was sync in nature but here in this we have mimiced the async behavior for
//the sum evalutaion which means it will take some time to execute meanwhile js will move to the next line of code outside
//setTimeout().

//---------------------------------

//Q2
//Create a function sum which adds 2 numbers but make it async by delaying the response by 2 seconds
//and show how if we dont utilize the callbacks we get undesirable responses.

const sum = (a, b) => {
  setTimeout(() => {
    return a + b;
  }, 2000);
};

const printResult = (value) => {
  console.log(value);
};

const answer = sum(3, 4);

printResult(answer);

//in this example , as we can see we get undefined as the response
//since we know JS doesnt wait for anything and executes code line by line
//and we know for a fact that printResult() f(x) should be executed only after
//sum has finished processing.

//---------------------------------

//Q3
//Now solve the previous problem by utilizing callbacks.

const sum = (a, b, callback) => {
  setTimeout(() => {
    const answer = a + b;
    callback(answer);
  }, 2000);
};

const printResult = (value) => {
  console.log(value);
};

sum(1, 2, printResult);

//in this case we get the right answer as we used callbacks this time.

//---------------------------------

//Q4
//Give an example of 2 async methods one of which is promise-based by design and the other
//is callback based.

//a function or a method can be eiether promise based or callback based by design.
//it means when that method is called , then either it may return a promise or
//take a callback function which gets executed once the work is done.
import axios from 'axios';
const url = 'https://api.github.com/users/varuask';

const p = axios.get(url);

p.then((data) => {
  console.log(data.data.id);
});

//axios.get method is promise based which means that it returns a promise
//now using a then handler , when the promise fullfills we can access the data
//this then handler takes in a callback which is executed whenever promise gets fullfilled.

import fs from 'fs';
fs.readFile('hello.txt', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

//while readFile is also a async f(x) but by design it takes a callback with 2
//params first one being the error object
//and other one being the data read.
//once readFile stops executing the callback gets executed.

//---------------------------------

//Q5
//create a promise from scratch and also consume it while also handling the error.

//lets imagine a scenario where a user logs into a system.
//what usually happens in the real world is that when a user enters their
//login id they are sent a token which can further be utilized for doing stuff over the app.
//but this operation is usually async cuzz the entered user id is searched in a table in db.
//now our task is to mimix the same functionalty.
//end goal is ->send a token to user.

const loginUser = (id) => {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject({
        username: 'not found',
        client: 'illegal',
        message: 'User not found',
      });
    }
    resolve({
      username: 'varuas',
      client: 'ramanlabs',
    });
  });
};

const sendToken = (username) => {
  return `${username}${Math.random()}`;
};
//error case.
loginUser()
  .then((data) => console.log(sendToken(data.username)))
  .catch((err) => console.log(err));
//happy case.
loginUser(34)
  .then((data) => console.log(sendToken(data.username)))
  .catch((err) => console.log(err));

//in the code above , loginId is an async f(x) which returns a promise.
//that promise can be consumed in order to send back the token to the user.
//here we are just logging the result to the console.
//but in real world , what happens is that token is sent to the user.

//---------------------------------

//Q6
//Now make the login program written in last question more realistic by using a setTimeout and using the
//error constructor.

const loginUser = (id) => {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject(new Error('the user is not found'));
    }
    setTimeout(() => {
      resolve({
        username: 'varuas',
        client: 'ramanlabs',
      });
    }, 2000);
  });
};

const sendToken = (username) => {
  return `${username}${Math.random()}`;
};
//error case.
loginUser()
  .then((data) => console.log(sendToken(data.username)))
  .catch((err) => console.log(err.message));
//happy case.
loginUser(34)
  .then((data) => console.log(sendToken(data.username)))
  .catch((err) => console.log(err.message));

//---------------------------------
//Q7
//Uptill now the sendToken method was sync but this time make it async and observe what other changes we need to do
//be able to consume these promises.

const loginUser = (id) => {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject(new Error('the user is not found'));
    }
    setTimeout(() => {
      resolve({
        username: 'varuas',
        client: 'ramanlabs',
      });
    }, 2000);
  });
};

const sendToken = (username) => {
  return Promise.resolve(`${username}${Math.random()}`);
};
//error case.
loginUser()
  .then((data) => console.log(sendToken(data.username)))
  .catch((err) => console.log(err.message));
//happy case.
loginUser(34)
  .then((data) =>
    sendToken(data.username).then((data) => {
      console.log(data);
    })
  )
  .catch((err) => console.log(err.message));

//---------------------------------
//Q8
//create a function that returns a promise and consume it using aynsc/await and then promise.

const dbConnect = () => Promise.resolve('hello-world');

const connectToDB = async () => {
  await dbConnect();
  console.log('your db is connected');
};

connectToDB();
//lets say that dbConnect is a method provided by one of the dbs that returns a promise
//next we have created a function connectToDB that will connect our app to the db.
//connectToDB is an async function that awaits on the dbConnect() method
//once the promise gets resolved , your db is connected string is printed on the console.

//let address the common concerns ,
//concern1 -> why is the result of the dbConnect not stored in a variable?
//answer: see in this context the purpose of dbConnect() is to just connect to db and we are not doing anything
//with the returned/resolved promise , and if it was a case , we could have easily saved that value.
// but here its not required.

//concern2 ->
//connectToDB() is called directly wihtout any promise/async-await syntax
// When an async function is called directly, it returns a promise. In this case, the promise returned by connectToDB() is not being explicitly handled. While it won't cause any issues in this specific code snippet, it is generally a good practice to handle the returned promise to ensure proper error handling and control flow.

const connecttoDBPromise = () => {
  dbConnect()
    .then((val) => {
      console.log('db is connected->promise syntax');
    })
    .catch((err) => {
      console.log(err);
    });
};

connecttoDBPromise();

//well in the above code we have created a promise based function to connect to the db.
//its simple only to understand.

//---------------------------------

//Q9
//repeat the last question but this time , assume that the function returns a rejected promise.

const dbConnect = () => Promise.reject('unable to connect');

const connectToDB = async () => {
  await dbConnect();
  console.log('db connected');
};

connectToDB();

// well on executing the code above , we get an error .
//unhandled rejection.

//now there are 2 ways of fixing this

//way1

const connectToDB = async () => {
  try {
    await dbConnect();
    console.log('db connected');
  } catch (err) {
    console.log(err);
  }
};

connectToDB();
//in this approach we are making use of the try/catch syntax and its the industry
//standard too because we dont know whether the promise returned by the third parrty api
//is gonna work well.so its better to wrap everything in a try/catch statement.

//way2
const connectToDB = async () => {
  await dbConnect();
  console.log('db connected');
};

connectToDB()
  .then((val) => console.log('db connected'))
  .catch((err) => console.log(err));

//in this method we are handling the errors while invoking the connectToDB() function.
//both the ways are good but in most of the places , way1 is being followed.

//---------------------------------

//Q10
//use try/catch when multiple await statments are there.

const dbConnect = () => Promise.reject('connection fail');

const addEntry = () => Promise.resolve('entry-added');

const getData = () => Promise.resolve('data is here');

const addAndGet = async () => {
  try {
    const conn = await dbConnect();
    console.log(conn);
    const add = await addEntry();
    console.log(add);
    const get = await getData();
    console.log(get);
  } catch (err) {
    console.log(err);
  }
};

addAndGet();
// in this we have used single try/catch
// this code works well whenever a promise gets rejected , the execution stops and
// jumps to catch block.

//but what if we have to show custom messages for all the three cases.
//then we will have to have separate try/catch for all the cases.

const addAndGet = async () => {
  try {
    const conn = await dbConnect();
    console.log(conn);
  } catch (err) {
    console.log('DB could not be connected because', err);
  }
  try {
    const add = await addEntry();
    console.log(add);
  } catch (err) {
    console.log('Entry could not be added', err);
  }
  try {
    const get = await getData();
    console.log(get);
  } catch (err) {
    console.log('data could not be retrived', err);
  }
};

addAndGet();
// it works well here is the problem when the db could not be connected , how can we insert data
//so it means 2nd and 3rd method have a dependency on 1st
//so in this case we will have to use nested try/catch .

const addAndGet = async () => {
  try {
    const conn = await dbConnect();
    console.log(conn);
    try {
      const add = await addEntry();
      console.log(add);
    } catch (err) {
      console.log(`data could not be added`, err);
    }
    try {
      const get = await getData();
      console.log(get);
    } catch (err) {
      console.log(`Data could not be retrived`, err);
    }
  } catch (err) {
    console.log(`Db could not be connected`, err);
  }
};

addAndGet();

//in this case , we have nested try/catch since the opeartion 2nd and 3rd have a
//dependecy on 1st so they are put into the root level try/catch .
//altho 2nd and 3rd have no dependency to each other so they can be plcaed at the
//same level of try/catch and can have a separate try/catch for each other.

//in summary
//
// In general, if the error handling logic for each operation is similar or the operations are independent of each other, using separate try/catch blocks may be more appropriate. It can make the code more modular and easier to read and maintain.

// On the other hand, if the operations have dependencies or you want to handle errors hierarchically, nested try/catch blocks can provide a more natural and structured approach.

//---------------------------------
//Q11.
//Explain how we can eliminate the use of multiple try/catch using an async handler.
const asyncHanlder = (promise) => {
  return promise.then((val) => [null, val]).catch((err) => [err, null]);
};

const dbConnect = () => Promise.reject('db connected');

const addEntry = () => Promise.resolve('Data added');

const getData = () => Promise.resolve('data retrived');

const addAndGet = async () => {
  const conn = await asyncHanlder(dbConnect());
  if (!conn[0]) {
    console.log(`db connedted`, conn[1]);
    const add = await asyncHanlder(addEntry());
    if (!add[0]) {
      console.log(add[1]);
    } else {
      console.log('error adding data', add[0]);
    }
    const get = await asyncHanlder(getData());
    if (!get[0]) {
      console.log(`Data is here`, get[1]);
    } else {
      console.log(`Data could not be retirnved`, get[0]);
    }
  } else {
    console.log(`Dc could not connect fail`);
  }
};

addAndGet();
//as we can see this time around the code looks
//more elegant and try/catch hell problem is also resolved.

//---------------------------------

//Q1
//how are values passed in functions in js?

//---------------------------------

//Q1
//how are values passed in functions in js?

//---------------------------------

//Q1
//how are values passed in functions in js?

//---------------------------------
