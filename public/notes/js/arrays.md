- [JavaScript Arrays](#javascript-arrays) 
- [JavaScript Array Methods](#javascript-array-methods) 
- [JavaScript Array Search](#javascript-array-search) 
- [JavaScript Sorting Arrays](#javascript-sorting-arrays) 
- [JavaScript Array Iteration](#javascript-array-iteration) 
- [JavaScript Array Const](#javascript-array-const) 

## JavaScript Arrays

### creating a array

```js

const array_name = [item1, item2, ...];

const cars = ["Saab", "Volvo", "BMW"];

const cars = [
  "Saab",
  "Volvo",
  "BMW"
];

const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

const cars = new Array("Saab", "Volvo", "BMW");
```

### Accessing Array Elements

```js
const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];
```

### Changing an Array Element

```js
car[0] = "ssome";
```

### Converting an Array to a String

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString(); // "Banana, Orange, Apple, Mango"
```

### accessing the array using array reference

```js
const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars; // "Banana, Orange, Apple, Mango"
```

### Arrays are Objects

Arrays are a special type of objects. The `typeof` operator in JavaScript returns "object" for arrays.

But, JavaScript arrays are best described as arrays.

Arrays use numbers to access its "elements". In this example, `person[0]` returns John:

### Array Elements Can Be Objects

JavaScript variables can be objects. Arrays are special kinds of objects.

Because of this, you can have variables of different types in the same Array.

You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:

### looping array

```js
const arr = ["some", "sj", "kjnd"];

for (let i = 0; i < arr.lenght; i++) {
  console.log(arr[i], "   ");
}

arr.forEach((i) => {
  console.log(i, "  ");
});
```

### adding ele

```js
const arr = ["some", "sj", "kjnd"];
arr.push("sdj"); // addes elemt to last
arr[arr.length] = "sdj"; // addes elemt to last

arr[10] = "sjkd"; // addes holes contain undifined in the arr
```

### note

there are no associated arrays in javascript

```js
const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length; // Will return 0
person[0]; // Will return undefined
```

### JavaScript new Array()

```js
const points = new Array();
const points = [];

// both crete empty arr

const points = new Array(40, 100, 1, 5, 25, 10);
const points = [40, 100, 1, 5, 25, 10];

// both create a array of 6 elements
```

#### differnce [] and new array()

```js
// Create an array with 40 undefined elements:
const points = new Array(40);

// Create an array with one element:
const points = [40];
```

### How to Recognize an Array

using `isArray() `and `instanceof()`

```js
const fruits = ["Banana", "Orange", "Apple"];
let type = typeof fruits; // object

Array.isArray(fruits); // is true if only arr or else false

fruits instanceof Array; // is true if only arr or else false
```

## JavaScript Array Methods

### length

```js
const arr = ["some", "sj", "kjnd"];

arr.length; // 3
```

### toString()

```js
const arr = ["some", "sj", "kjnd"];

arr.toString(); // some,sj,kjnd
```

### at()

```js
const arr = ["some", "sj", "kjnd"];
arr.at(0); // some
arr[0]; // some
```

### join()

```js
const arr = ["some", "sj", "kjnd"];

arr.join("*"); // ome*sj*kjnd
```

### Popping and Pushing

```js
const arr = ["some", "sj", "kjnd"];

arr.pop(); // [ 'some', 'sj' ]
arr.push(100); // [ 'some', 'sj', 100 ]
```

### Shifting Elements

```js
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.shift();
console.log(fruits1); // [ "Orange", "Apple", "Mango"]

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits2.shift();
console.log(fruit); // Banana  // gives the shift out element

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.unshift("Lemon");
console.log(fruits3); // ["Banana", "Orange", "Apple", "Mango", "Lemon"]

console.log(fruits3);
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
const some = fruits4.unshift("Lemon");
console.log(some); //5  // length is given
```

### delete

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0]; // [undefined,"Orange", "Apple", "Mango" ]
```

### concat ()

it creates a new array does not the change the arrays used for concat

```js
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys); //[ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus' ]
// two or more arrays can be conact at the same time
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3); //   [ 'Cecilie', 'Lone', 'Emil',    'Tobias' 'Linus',   'Robin','Morgan']
```

The concat() method can also take strings as arguments:

```js
const arr1 = ["Emil", "Tobias", "Linus"];
const myChildren = arr1.concat("Peter");
```

### Array copyWithin()

Copy to index 2, all elements from index 0:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0); // [ 'Banana', 'Orange', 'Banana', 'Orange' ]
```

Copy to index 2, the elements from index 0 to 2:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.copyWithin(2, 0, 2); // [ 'Banana', 'Orange', 'Banana', 'Orange', 'Kiwi' ]
```

### flat()

```js
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat(); // [1,2,3,4,5,6]
```

## JavaScript Array Search

### Array indexOf()

- search from firt to last

```js
const arr = [45, 4, 9, 16, 33, 25, 22, 33];
console.log(arr.indexOf(33)); // 4

const arr = [45, 4, 9, 16, 33, 25, 22, 33];
console.log(arr.indexOf(33, 5));
// 7 starting serach from index 5
```

### Array lastIndexOf()

- search from last to first

```js
const arr = [45, 4, 9, 16, 33, 25, 22, 33];
console.log(arr.lastIndexOf(33)); // 7

const arr = [45, 4, 9, 16, 33, 25, 22, 33];
console.log(arr.lastIndexOf(33, 5));
// 4 starting serach from index 5
```

### Array includes()

- is present or not ( true or false ) ele in array

```js
const arr = [45, 4, 9, 16, 33, 25, 22, 33];
console.log(arr.includes(33)); // true
const arr = [45, 4, 9, 16, 33, 25, 22, 33];
console.log(arr.includes(-33)); // false
```

### Array find()

- find the first ele which pass the test function

```js
const arr = [45, 4, 9, 16, 33, 25, 22, 33];
console.log(
  arr.find((value, index, array) => {
    return value > 30;
  })
); //  45
```

### Array findIndex()

```js
const arr = [45, 4, 9, 16, 33, 25, 22, 33];
console.log(
  arr.findIndex((value, index, array) => {
    return value > 30;
  })
); // 0
```

### Array findLast()

```js
const arr = [45, 4, 9, 16, 33, 25, 22];
console.log(
  arr.findLast((value, index, array) => {
    return value > 30;
  })
); //  33
```

### Array findLastIndex()

```js
const arr = [45, 4, 9, 16, 33, 25, 22, 33];
console.log(
  arr.findLastIndex((value, index, array) => {
    return value > 30;
  })
); //  4
```

## JavaScript Sorting Arrays

### Alpabetic Sort

- ## Array sort()

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
// [ 'Apple', 'Banana', 'Mango', 'Orange' ]
```

- ## Array reverse()

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.reverse());
// [ 'Mango', 'Apple', 'Orange', 'Banana' ]
```

- ## Array toSorted()

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const arr = fruits.toSorted();
console.log(arr);
// create a new array
// [ 'Apple', 'Banana', 'Mango', 'Orange' ]
```

- ## Array toReversed()

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const arr = fruits.toReversed();
console.log(arr);
// create a new array
// [ 'Mango', 'Apple', 'Orange', 'Banana' ]
```

- ## Sorting Objects

```js
const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];
console.log(
  cars.sort((a, b) => {
    return a.year - b.year;
  })
);

// [
//     { type: 'Saab', year: 2001 },
//     { type: 'BMW', year: 2010 },
//     { type: 'Volvo', year: 2016 }
// ]

cars.sort(function (a, b) {
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
});
```

### Numeric Sort

- ## Numeric Sort

```js
const points = [40, 100, 1, 5, 25, 10];
console.log(
  points.sort(function (a, b) {
    return a - b;
  })
);

// [ 1, 5, 10, 25, 40, 100 ]

const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return b - a;
});

// [ 100, 40, 25, 10, 5, 1 ]
```

- ## Random Sort

```js
const points = [40, 100, 1, 5, 25, 10];
console.log(
  points.sort(function (a, b) {
    return 0.5 - Math.random();
  })
);
```

- ## Math.min()

```js
const points = [40, 100, 1, 5, 25, 10];
console.log(Math.min.apply(null, points));
// 1
```

- ## Math.max()

```js
const points = [40, 100, 1, 5, 25, 10];
console.log(Math.max.apply(null, points));
// 100
```

## JavaScript Array Iteration

Array iteration methods operate on every array item:

### Array forEach

```js
const arr = [40, 100, 1, 5, 25, 10];
arr.forEach((x) => {
  console.log(x);
});
// print array

arr.forEach((value, index, arr) => {
  console.log(x);
});
```

### Array map()

```js
const arr = [40, 100, 1, 5, 25, 10];
const ans = arr.map((x) => {
  return 2 * x;
});
console.log(ans);
// [ 80, 200, 2, 10, 50, 20 ]
// create new array
```

### Array flatMap()

```js
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flatMap((x) => x);
console.log(myArr);
//  [ 1, 2, 3, 4, 5, 6 ]
```

### Array filter()

```js
const arr = [40, 100, 1, 5, 25, 10];
const ans = arr.filter((x) => {
  return x > 20;
});
console.log(ans);
//[ 40, 100, 25 ]
```

### Array reduce()

- left to right

```js
const arr = [1, 2, 3, 4, 5, 6];
const ans = arr.reduce((ans, x) => {
  return x + ans;
});
console.log(ans);
// 21

const total = arr.reduce((total, value, index, array) => {
  //........
});
```

### Array reduceRight()

- right to left

```js
const arr = [1, 2, 3, 4, 5, 6];
const ans = arr.reduceRight((ans, x) => {
  return x + ans;
});
console.log(ans);
// 21

const total = arr.reduceRight((total, value, index, array) => {
  //........
});
```

### Array every()

- The every() method checks if all array values pass a test.

```js
const arr = [1, 2, 3, 4, 5, 6];
console.log(
  arr.every((x) => {
    return x > 0;
  })
);
// true

const arr = [1, 2, 3, 4, 5, 6];
console.log(
  arr.every((x) => {
    return x < 0;
  })
);
// false
```

### Array some()

- at least one ele must pass the test

```js
const arr = [1, 2, 3, 4, 5, 6];
console.log(
  arr.some((x) => {
    return x > 3;
  })
);
// true

const arr = [1, 2, 3, 4, 5, 6];
console.log(
  arr.some((x) => {
    return x < 2;
  })
);
// true

const arr = [1, 2, 3, 4, 5, 6];
console.log(
  arr.some((x) => {
    return x < 1;
  })
);
// false  no element is less then 1
```

### Array from()

- The Array.from() method returns an Array object from any object with a length property or any iterable object.

```js
const s = "tree";
const arr = Array.from(s);
console.log(arr);
// [ 't', 'r', 'e', 'e' ]
```

### Array keys()

- Create an obj of keys

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();
for (let x of keys) {
  console.log(x);
}
// 0
//1
// 2
//3
```

### Array entries()

- create an object of key,value pair

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();
for (let x of f) {
  console.log(x);
}
// [ 0, 'Banana' ]
// [ 1, 'Orange' ]
// [ 2, 'Apple' ]
// [ 3, 'Mango' ]
```

### Array with()

- used to safly update the array ele with out altering the orginal array

```js
const arr = ["Januar", "Februar", "Mar", "April"];
const ans = months.with(2, "March");
console.log(ans);
// [ 'Januar', 'Februar', 'March', 'April' ]
```

### Array Spread (...)

```js
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const arr = [...q1, ...q2, ...q3, ...q4];
console.log(arr);
// [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep','Oct', 'Nov', 'May']
```

## JavaScript Array Const

- const arr must be declare once and only once 
- and it can be reassigned to new arr 
- its elemets can only be modifed and updated 

```js
const arr = [1, 2, 3];
console.log(arr); // [1, 2, 3]

arr[0] = 101;
arr[1] = 289;
console.log(arr);
// [101, 289, 3]

arr[arr.length]=1044;
console.log(arr);
// [ 101, 289, 3, 1044 ]

arr = [302, 323, 3, 23]; // not allowed
// error
```
