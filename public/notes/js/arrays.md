- [JavaScript Arrays](#javascript-arrays) 🚀
- [JavaScript Array Methods](#javascript-array-methods) 🚀
- [JavaScript Array Search](#javascript-array-search) 🚀
- [JavaScript Sorting Arrays](#javascript-sorting-arrays) 🚀
- [JavaScript Array Iteration](#javascript-array-iteration) 🚀
- [JavaScript Array Const](#javascript-array-const) 🚀

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

fruits instanceof Array; // is true if only arr or else fale
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
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat(); // [1,2,3,4,5,6]

```
## JavaScript Array Search

## JavaScript Sorting Arrays

## JavaScript Array Iteration

## JavaScript Array Const
