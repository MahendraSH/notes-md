# Boolean

### false for empty , null ........

```js
let x;
let x=nan;
let x;
let x=null;
let x= 0;
let x="";

for all console.log(Boolean(x)) is false
```

#### `{} and [] give true  `

### `Comparing two JavaScript objects always return false.`

# JavaScript Comparison and Logical Operators

### The Nullish Coalescing Operator (??)

The ?? operator returns the first argument if it is not nullish (`null` or `undefined`).

Otherwise it returns the second argument.

```js
let name = null;
let text = "missing";
let result = name ?? text; // result = "missing"
```

# JavaScript if, else, and else if

```js
if (conditon) {
  //....
} else {
  //......
}
```

# JavaScript Switch Statement

```js
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
  // code block
}
```

# JavaScript For Loop

```js
for(let i = 0 ;i<10 ;i++
{
    console.log(i)

}
//  o to 9 logs
```

# JavaScript For In

```js
for (key in object) {
  // code block to be executed
}

const person = { fname: "John", lname: "Doe", age: 25 };

let text = "";
for (let x in person) {
  text += person[x];
}
```

## Array.forEach()

```js
arr.forEach(() => {
  //..
});
```

# JavaScript For Of

- loops on `iterable object.`
- like Arrays, Strings, Maps, NodeLists, and more .

```js
let language = "JavaScript";

for (let x of language) {
  console.log(x);
}
```

# JavaScript While Loop

```js
while (condition) {
  // code block to be executed
}
```

# JavaScript Break and Continue

- same as c programing
