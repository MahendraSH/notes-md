# JavaScript typeof

## Data types in Js

- ## In JavaScript there are 5 different data types that can contain values:

  - string
  - number
  - boolean
  - object
  - function

- ## There are 6 types of objects:

  - Object
  - Date
  - Array
  - String
  - Number
  - Boolean

- ## And 2 data types that cannot contain values:

  - null
  - undefined

## The typeof Operato on all

```js
typeof "John"; // Returns "string"
typeof 3.14; // Returns "number"
typeof NaN; // Returns "number"
typeof false; // Returns "boolean"
typeof [1, 2, 3, 4]; // Returns "object"
typeof { name: "John", age: 34 }; // Returns "object"
typeof new Date(); // Returns "object"
typeof function () {}; // Returns "function"
typeof myCar; // Returns "undefined" *
typeof null; // Returns "object"
```

## note

```md
- The data type of NaN is number
- The data type of an array is object
- The data type of a date is object
- The data type of null is object
- The data type of an undefined variable is undefined \*
- The data type of a variable that has not been assigned a value is also undefined \*
```

## Primitive Data

The `typeof` operator can return one of these primitive types:

- string
- number
- boolean
- undefined

```js
typeof "John"; // Returns "string"
typeof 3.14; // Returns "number"
typeof true; // Returns "boolean"
typeof false; // Returns "boolean"
typeof x; // Returns "undefined" (if x has no value)
```

## Complex Data

The `typeof` operator can return one of two complex types:

- function // to functions
- object // to objects ,arrays and null

```js
typeof { name: "John", age: 34 }; // Returns "object"
typeof [1, 2, 3, 4]; // Returns "object" (not "array", see note below)
typeof null; // Returns "object"
typeof function myFunc() {}; // Returns "function"
```

## The Data Type of typeof

- The `typeof` operator is not a variable. It is an operator. `Operators` `( + - * / )` do not have any data type.

- But, the `typeof` operator always returns a `string` (containing the type of the operand).

## The constructor Property

- The `constructor` property returns the constructor function for all JavaScript variables.

```js
"John".constructor                // Returns function String()  {[native code]}
(3.14).constructor                // Returns function Number()  {[native code]}
false.constructor                 // Returns function Boolean() {[native code]}
[1,2,3,4].constructor             // Returns function Array()   {[native code]}
{name:'John',age:34}.constructor  // Returns function Object()  {[native code]}
new Date().constructor            // Returns function Date()    {[native code]}
function () {}.constructor        // Returns function Function(){[native code]}
```

### find object is array or not

```js
arr.constructor === Array(); // returns true if arr is  array
```

### find object is Date or not

```js
date.constructor === Date(); // returns true if date is Date
```

## Undefined

- In JavaScript, a variable without a value, has the value undefined. The type is also undefined

## Null

- In JavaScript null is "nothing". It is supposed to be something that doesn't exist.

- Unfortunately, in JavaScript, the data type of null is an object.

## Difference Between Undefined and Null

- `undefined` and `null` are equal in value but different in type:

```js
typeof undefined; // undefined
typeof null; // object

null === undefined; // false
null == undefined; // true
```

## The instanceof Operator

- The `instanceof` operator returns `true` if an object is an instance of the specified object:

```js
const cars = ["Saab", "Volvo", "BMW"];
cars instanceof Array;
cars instanceof Object;
cars instanceof String;
cars instanceof Number;
```

## The void Operator

- The void operator evaluates an expression and returns undefined. This operator is often used to obtain the undefined primitive value, using "void(0)" (useful when evaluating an expression without using the return value).

# JavaScript Type Conversion

1. By the use of a JavaScript function
2. Automatically by JavaScript itself

- ## Converting Strings to Numbers

  The global method Number() converts a variable (or a value) into a number.

  A numeric string (like "3.14") converts to a number (like 3.14).

  An empty string (like "") converts to 0.

  A non numeric string (like "John") converts to NaN (Not a Number).

      - ### Number Methods

  | Method       | Description                              |
  | ------------ | ---------------------------------------- |
  | Number ()    | return Number                            |
  | parseInt()   | return Number from string                |
  | parseFloat() | return floating point number from string |

```js
let y = "5"; // y is a string
let x = +y; // x =5
```

```js
let y = "sine"; // y is a string
let x = +y; // x =nan
```

- ## Converting Numbers to Strings

```js
const x = 10;
String(x); // returns a string
String(123); // returns a string
String(100 + 23); // returns a string
```

- ### to String

```js
const x = 10;
x.toString()(
  // returns a string
  123
)
  .toString()(
    // returns a string
    100 + 23
  )
  .toString(); // returns a string
```

- ## Converting Dates to Numbers

```js
d = new Date();
Number(d); // returns 1404568027739
```

```js
d = new Date();
d.getTime(); // returns 1404568027739
```

- ## Converting  Dates to String 

```js
console.log(String(new Date())); // "Mon Jan 29 2024 13:59:42 GMT+0530 (India Standard Time)"
```

```js
console.log(new Date().toString()); // "Mon Jan 29 2024 13:59:42 GMT+0530 (India Standard Time)"
```

- ## Converting Booleans to Numbers
```js
Number(false)     // returns 0
Number(true)      // returns 1

``` 
- ## Converting  Booleans to  String 
```js
String(false)      // returns "false"
String(true)       // returns "true"
false.toString()   // returns "false"
true.toString()    // returns "true"
```

## Automatic Type Conversion
When JavaScript tries to operate on a "wrong" data type, it will try to convert the value to a "right" type.

The result is not always what you expect:
```js
5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"
"5" + 2     // returns "52"      because 2 is converted to "2"
"5" - 2     // returns 3         because "5" is converted to 5
"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2

```