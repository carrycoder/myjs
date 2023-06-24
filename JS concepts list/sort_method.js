//Q1
//create an array of strings and trying sorting the array. does the sort method sorts the array in place?

const myArr = ['saurav', 'police', 'doctor', 'engineer', 'lawyer'];

myArr.sort();

console.log(myArr);

//okay so when we run the code above we get an array which is sorted in the ascending order.
//also JS sorts the array in place which means that the original array gets modified.
//even tho we have declared the variable as a const yet we can see ,we can comfortably
//modify the array
//its because we can always modify the objects or arrays defined with const
//but we cannot reassign it.

//---------------------------------

//Q2
//repeat the same thing but with a combination of lowercase and uppercase.

const myArr = [
  'saurav',
  'police',
  'doctor',
  'engineer',
  'Lawyer',
  'Doctor',
  'Police',
  'Saurav',
  'Engineer',
];

myArr.sort();

console.log(myArr);

//as we can observe on executing the above code that JS sorts the strings on the basis of
//their ascii which means that in ascii uppercase letters appear first and then the lowercse
//letters that y upon sorting a combination of uppercase and lowercase strings
//---------------------------------

//Q3
//create an array of numbers and try sorting them and observe we dont get desirable results.

const myArr = [4, 1, 2, 10, 11];

myArr.sort();

console.log(myArr);

//on executing the above code we observe that we dont get desirable results when we
//try to sort an array of numbers.
//its because JS sorts an array considering that all the elements are of type string
//and calling .sort on a number array and expecting the desirable reponse wont work.

//---------------------------------

//Q4
//find a solution for the above problem and explain how does it work.explain how does the comparator function work using an example of a small array of numbers.

const myArr = [2, 1, 4, 10, 3, 11];

myArr.sort((a, b) => a - b);

console.log(myArr);

//in this method we pass a comparator function to the sort method
// comparator function takes two variables as input and return positive,negative or 0 for each comparison.
// first pair in this case is 2,1 comparator function returns 2-1 = 1 which is a positive
//when it returns positive it means the elements should be swapped .
//and the array becomes [1,2,4,10,3,11]
//next up we have 2,4 a=2,b=4 a-b=-2 which is negative that means numbers should not be swapped.
//array remains as it is.
//these iterations go on and on until we reach a point when there were no swaps.
//and the array becomes sorted.

//---------------------------------

//Q5
//take an array of ojects and try sorting them on the basis of different properties.
const posts = [
  {
    userId: 1,
    id: 1,
    hits: 34,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    userId: 1,
    id: 2,
    hits: 90,
    title: 'qui est esse',
    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
  },
  {
    userId: 1,
    id: 3,
    hits: 12,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
  },
  {
    userId: 1,
    id: 4,
    hits: 78,
    title: 'eum et est occaecati',
    body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
  },
  {
    userId: 1,
    id: 5,
    hits: 65,
    title: 'nesciunt quas odio',
    body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque',
  },
];

//sorting on the basis of hits ascending order

posts.sort((a, b) => a.hits - b.hits);
console.log(posts);
//resulting array sample [1,2]
//now ask yourself do i wanna make a swap at this position?
// the answer is no.
//but if the comparator returns a 1
//swapping will happen
//so to avoid that lets return a.hits-b.hits which will always be
//negative. and swapping will be stopped.

//sorting on the basis of hits descending order

posts.sort((a, b) => b.hits - a.hits);
console.log(posts);

//resulting sample > [2,1]
//do i want the swapping to take place here?
//no
//but if i did a-b , i will get 1
//which will further swap it
//but if i do a b-a , it will be +ve and
//swapping will not occur.

//sorting on the basis of title ascending
posts.sort((a, b) => (a.title > b.title ? 1 : -1));
console.log(posts);
//sorted array-> ['apple','banana']
// do i want the swapping here?
//no
//need to return -1.
// a.title > b.title ? 1 : -1

//sorting on the basis of title descending
posts.sort((a, b) => (a.title > b.title ? -1 : 1));
console.log(posts);
//result -> ['banana','apple']
//no swapping at this point
//a.title > b.title
//should return -1

//---------------------------------
