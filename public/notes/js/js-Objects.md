# JavaScript Object

# todo and read 🚀

1. [ JavaScript ES5 Object Methods](#javascript-es5-object-methods) 🚀

# iist

0. [Js obj defination ](#js-obj-defination)
1. [ JavaScript Object Properties](#javascript-object-properties)
2. [ JavaScript Object Methods](#javascript-object-methods)
3. [ JavaScript Display Objects](#javascript-display-objects)
4. [ JavaScript Object Accessors](#javascript-object-accessors) 🚀 `geters and setters `
5. [ JavaScript Object Constructors](#javascript-object-constructors)
6. [ JavaScript Object Prototypes](#javascript-object-prototypes-to-add)🚀 `Object.prototype`
7. [ JavaScript Iterables](#javascript-iterables) 🚀
8. [ JavaScript Obj Sets](#javascript-obj-sets) 🚀`(table)`
9. [ JavaScript Obj Maps](#javascript-obj-maps) 🚀`(table)`
10. [ JavaScript ES5 Object Methods](#javascript-es5-object-methods) 🚀

## Js obj defination

- A JavaScript object is a collection of named values
- expect primitive data types all are Objects
- object : functon, array , date obj , Math obj , regular expression

```js
const obj = { one: "one", two: "two" };

const ob = { first: "ram", lastName: " k s ", age: 19 };
```

## creating obj

```js
const obj = { first: "ram", lastName: " k s ", age: 19 };
```

```js
const obj = {};
obj.first = "ram";
obj.last = "ks ";
obj.age = 19;
```

```js
const obj = new Object();
obj.first = "ram";
obj.last = "ks ";
obj.age = 19;
```

## JavaScript Objects are Mutable

- it uses reference

```js
const obj = { first: "ram", lastName: " k s ", age: 19 };
const x = obj;
x.age = 21;

console.log(x);
// { first: 'ram', lastName: ' k s ', age: 21 }
console.log(obj);
// { first: 'ram', lastName: ' k s ', age: 21 }
```

## JavaScript Object Properties

- ## Accessing JavaScript Properties

```js
objectName.property; // person.age
```

```js
objectName["property"]; // person["age"]
```

```js
objectName[expression]; // x = "age"; person[x]
```

- ## JavaScript for...in Loop

```js
const obj = { first: "ram", lastName: " k s ", age: 19 };

let text = "";
for (let i in obj) {
  text += obj[i] + " ";
}

console.log(text); // ram  k s  19
```

- ## Adding New Properties

```js
obj.newProperties = somevalue;
```

- ## deleting a properties

```js
delete obj.property;
// or
delete obj["property"];
```

## JavaScript Object Methods

- Methods are functions stored as object properties.

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
```

```js
const obj = {
  first: "ram",
  lastName: " k s ",
  age: 19,

  display: function () {
    return this.first + " " + this.lastName + "  is " + this.age + "  years . ";
  },
};

console.log(obj.display());
```

- ## buit in functoins

```js
const arr = [222, 1, 21, 3, 22, 134];
console.log(arr.sort()); // [ 1, 134, 21, 22, 222, 3 ]
```

## JavaScript Display Objects

Some common solutions to display JavaScript objects are:

- ## Displaying the Object Properties by name

```js
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

document.getElementById("demo").innerHTML =
  person.name + "," + person.age + "," + person.city;
```

- ## Displaying the Object Properties in a Loop

```js
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}

console.log(txt);
```

- ## Displaying the Object using Object.values()

```js
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

const arr = Object.values(person);
console.log(person);
// [("John", 30, "New York")];
```

- ## Displaying the Object using JSON.stringify()

```js
person = {
  name: "John",
  age: 30,
  city: "New York",
};

const str = JSON.stringify(person);
console.log(str);
// {"name":"John","age":30,"city":"New York"}
```

- ### stringify Date()

```js
const date = new Date();
console.log(JSON.stringify(date));
// "2024-01-29T16:12:30.714Z"

const obj = {
  d: new Date(),
  is: "some",
};

console.log(JSON.stringify(obj));
// {"d":"2024-01-29T16:14:08.141Z","is":"some"}
```

- ### stringify function

```js
const fun = function () {
  return " hi";
};

console.log(JSON.stringify(fun));
// undefined

console.log(fun.toString());
// function () {
//     return " hi";
// }
```

## JavaScript Object Accessors

- JavaScript Accessors (Getters and Setters)
- ### JavaScript Getter (The get Keyword)

```js
const person = {
  firstName: "mahendra",
  lastName: "S H ",
  lg: "Eng",
  get lang() {
    return this.lg;
  },
};

console.log(person.lang); // Eng
```

- ### JavaScript Setter (The set Keyword)

```js
const person2 = {
  firstName: "something",
  lastName: "lastThing",
  lg: "",
  set lang(lang) {
    this.lg = lang;
  },
};
person2.lang = "Kan";
console.log(person2.lg); // Kan
```

- ### JavaScript Function vs Getter
- calsses as a fuction

```js
const person = {
  firstName: "mahendra",
  lastName: "S H ",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

- getter calsss as a property
console.log(person.fullName()); // mahendra S H
```

```js
const person = {
  firstName: "mahendra",
  lastName: "S H ",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName); // mahendra S H
```

- ### date qualty by using Getter and Setters

```js
const person = {
  firstName: "mahendra",
  lastName: "S H ",
  get fullName() {
    return this.firstName.toUpperCase() + " " + this.lastName.toUpperCase();
  },
};

console.log(person.fullName);
// MAHENDRA S H
```

```js
const person = {
  firstName: "",
  lastName: " ",

  set fullName(fullName) {
    this.firstName = fullName.split(" ")[0].toUpperCase();
    this.lastName =
      fullName.split(" ")[1].toUpperCase() +
      " " +
      fullName.split(" ")[2].toUpperCase();
  },
};

person.fullName = "mahendra s H";

console.log(person.firstName, "  ", person.lastName); // MAHENDRA    S H
```

- ### Object.defineProperty()
- The` Object.defineProperty()` method can also be used to add Getters and Setters:

```js
const counter = { count: 0 };

Object.defineProperty(counter, "reset", {
  get: function () {
    this.count = 0;
  },
});

Object.defineProperty(counter, "increment", {
  get: function () {
    this.count += 1;
  },
});

Object.defineProperty(counter, "decrement", {
  get: function () {
    this.count -= 1;
  },
});

Object.defineProperty(counter, "add", {
  set: function (val) {
    this.count += val;
  },
});
Object.defineProperty(counter, "sub", {
  set: function (val) {
    this.count -= val;
  },
});

counter.increment;
counter.increment;
console.log(counter); //{ count: 2 }

counter.decrement;
counter.decrement;
counter.decrement;
console.log(counter); // { count: -1 }

counter.reset;
console.log(counter); // { count: 0}

counter.add = 5;
console.log(counter);
// { count: 5 }

counter.sub = 2;
console.log(counter);
// { count: 3 }
```

## JavaScript Object Constructors

- using fucntion constructor

```js
const Person = function (name, age, gender) {
  (this.name = name), (this.age = age), (this.gender = gender);
};

const person1 = new Person("mahendra", 20, "male");

console.log(person1); // Person { name: 'mahendra', age: 20, gender: 'male' }
```

- ### same as class

```js
class Person {
  constructor(name, age, gender) {
    (this.name = name), (this.age = age), (this.gender = gender);
  }
}
const person1 = new Person("mahendra", 20, "male");

console.log(person1); // Person { name: 'mahendra', age: 20, gender: 'male' }
```

- must added the propertes and fucntion in the constructor it self

```js
function Person(firstName, lastName, age, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
  this.changeName = function (name) {
    this.lastName = name;
  };
}
```

```js
class Person {
  constructor(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (name) {
      this.lastName = name;
    };
  }
}
```

## JavaScript Object Prototypes to Add

- ### using prototype we can add the property and methods to the constructor
- ### do not use it on the standard Js objects like Array , Date .. etc

```js
class Person {
  constructor(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

Person.prototype.lang = "English";
```

```js
function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}

const person = new Person("dskld", "djsd", 19);
Person.prototype.name = function () {
  return this.firstName + " " + this.lastName;
};
Person.prototype.some = "somThings";
console.log(person.name()); // dskld djsd
console.log(person.some); // something
console.log(person); //Person { firstName: 'dskld', lastName: 'djsd', age: 19 }
```

```js
class Person {
  constructor(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
  }
}
Person.prototype.name = function () {
  return this.firstName + " " + this.lastName;
};

const person = new Person("dskld", "djsd", 19);

Person.prototype.some = "somThings";
console.log(person.name()); // dskld djsd
console.log(person.some); // something
console.log(person); //Person { firstName: 'dskld', lastName: 'djsd', age: 19 }
```

## JavaScript Iterables

- must run with `for of` loop
- exmaples

```js
for (let x of "dnslkd") {
  // ......
}
```

- Iterables
- array
- set
- map
- string

- The js iterable obj has `next()`, `done`
- symobole.`next`() : gives next
- symobole.`done` : `false` if the next is present

### creating obj with are iterable

- `Symbol.iterator`

```js
const some = {};
some[Symbol.iterator] = function () {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {
        return { done: true };
      } else {
        return { value: n, done: false };
      }
    },
  };
};
for (let x of some) {
  console.log(x);
}

// 10
// 20
// 30
// 40
// 50
// 60
// 70
// 80
// 90
```

```js
const some = {};
some[Symbol.iterator] = function () {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {
        return { done: true };
      } else {
        return { value: n, done: false };
      }
    },
  };
};

const i = some[Symbol.iterator]();
while (true) {
  const x = i.next();
  if (x.done) break;

  console.log(x.value);
}

// 10
// 20
// 30
// 40
// 50
// 60
// 70
// 80
// 90
```

## JavaScript Obj Sets

- ### [sets-maps](./sets-maps.md)

| Method    | Description                                                   |
| --------- | ------------------------------------------------------------- |
| new Set() | Creates a new Set                                             |
| add()     | Adds a new element to the Set                                 |
| delete()  | Removes an element from a Set                                 |
| has()     | Returns true if a value exists                                |
| clear()   | Removes all elements from a Set                               |
| forEach() | Invokes a callback for each element                           |
| values()  | Returns an Iterator with all the `values` in a Set            |
| keys()    | Same as `values`()                                            |
| entries() | Returns an Iterator with the `[value,value]` pairs from a Set |

| Property | Description                          |
| -------- | ------------------------------------ |
| size     | Returns the number elements in a Set |

## JavaScript Obj Maps

| Method    | Description                                                       |
| --------- | ----------------------------------------------------------------- |
| new Map() | Creates a new Map object                                          |
| set()     | Sets the value for a key in a Map                                 |
| get()     | Gets the value for a key in a Map                                 |
| clear()   | Removes all the elements from a Map                               |
| delete()  | Removes a Map element specified by a key                          |
| has()     | Returns true if a key exists in a Map                             |
| forEach() | Invokes a callback for each `key/value pair` in a Map             |
| entries() | Returns an iterator object with the `[key, value] `pairs in a Map |
| keys()    | Returns an iterator object with the `keys` in a Map               |
| values()  | Returns an iterator object of the `values` in a Map               |

| Property | Description                          |
| -------- | ------------------------------------ |
| size     | Returns the number elements in a map |

## JavaScript ES5 Object Methods

