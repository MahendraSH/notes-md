# Basics

# topics

- [JavaScript Display Possibilities](#javascript-display-possibilities)
- [JavaScript Comments](#javascript-comments)
- [JavaScript Variables](#javascript-variables)
- [JavaScript Operators](#javascript-operators)
- [JavaScript Data Types](#javascript-data-types)
- [JavaScript Functions](#javascript-functions)
- [JavaScript Objects](#javascript-objects)
- [JavaScript Events](#javascript-events) 🚀
- [JavaScript Strings](#javascript-strings) 🚀
- [JavaScript String methods](#javascript-string-methods) 🚀
- [JavaScript String Search](#javascript-string-search) 🚀
- [JavaScript Template Strings](#javascript-template-strings) 🚀
- [JavaScript Numbers](#javascript-numbers) 🚀
- [JavaScript BigInt](#javascript-bigint) 🚀
- [JavaScript Number Methods](#javascript-number-methods) 🚀
- [JavaScript Number Properties](#javascript-number-properties) 🚀
- [JavaScript Number Properties](#javascript-numbers) 🚀

## JavaScript Display Possibilities

- Writing into an HTML element, using` innerHTML.` ( select elemet and change innerhtml)
- Writing into the HTML output using` document.write().` ( only used in testing, and it removes all the things onlick write() )
- Writing into an alert box, using `window.alert().`
- Writing into the browser console, `using console.log().`
- **note** : JavaScript Print
  - `window.print()` can be used to print the page `(crl +p )`

## JavaScript Comments

- Single Line Comments

```js
// Change heading:
document.getElementById("myH").innerHTML = "My First Page";

// Change paragraph:
document.getElementById("myP").innerHTML = "My first paragraph.";
```

- Multi-line Comments

```js
/*
The code below will change
the heading with id = "myH"
and the paragraph with id = "myP"
in my web page:
*/
document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
```

## JavaScript Variables

- var
- let
- const

### note

- Variables are containers for storing values.
- The `var` keyword should only be used in code written for older browsers.

### When to Use var, let, or const?

1. Always declare variables
2. Always use `const` if the value should not be changed
3. Always use `const` if the type should not be changed (Arrays and Objects)

4. Only use `let` if you can't use `const`

5. Only use `var` if you MUST support old browsers.

### JavaScript Identifiers

All JavaScript variables must be identified with unique names.

These unique names are called identifiers.

### The Assignment Operator `(=)`

### Value = undefined

In computer programs, variables are often declared without a value. The value can be something that has to be calculated, or something that will be provided later, like user input.

A variable declared without a value will have the value `undefined`.

The variable carName will have the value `undefined` after the execution of this statement:

### Re-Declaring JavaScript Variables

If you re-declare a JavaScript variable declared with `var`, it will not lose its value.

The variable `carName` will still have the value "Volvo" after the execution of these statements:

```js
var carName = "Volvo";
var carName;
```

### note

You cannot re-declare a variable declared with `let` or `const`.

This will not work:

```js
let carName = "Volvo";
let carName;
```

### JavaScript Dollar Sign $

Since JavaScript treats a dollar sign as a letter, identifiers containing $ are valid variable names:

```js
let $ = "Hello World";
let $$$ = 2;
let $myMoney = 5;
```

### JavaScript Underscore (`_`)

Since JavaScript treats underscore as a letter, identifiers containing `_` are valid variable names:

```js
let _lastName = "Johnson";
let _x = 2;
let _100 = 5;
```

## What is Good?

let and const have block scope.

let and const can not be redeclared.

let and const must be declared before use.

let and const does not bind to this.

let and const are not hoisted.

## What is Not Good?

var does not have to be declared.

var is hoisted.

var binds to this.

### Hoisting

Variables defined with var are hoisted to the top and can be initialized at any time.

Meaning: You can use the variable before it is declared:

```js
carName = "Volvo";
var carName;
```

### Constant Objects and Arrays

The keyword `const` is a little misleading.

It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:

- Reassign a constant value
- Reassign a constant array
- Reassign a constant object

But you CAN:

- Change the elements of constant array
- Change the properties of constant object

```js
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
```

## JavaScript Operators

### Types of JavaScript Operators

There are different types of JavaScript operators:

- Arithmetic Operators
- Assignment Operators
- Comparison Operators
- String Operators
- Logical Operators
- Bitwise Operators
- Ternary Operators
- Type Operators

#### Arithmetic Operators

| **Operator** | **Description** |
| ------------ | --------------- |
| `+`          | Addition        |
| `-`          | Subtraction     |
| `x`          | Multiplication  |
| `**`         | Exponentiation  |
| `/`          | Division        |
| `++`         | Increment       |
| `--`         | Decrement       |

#### Assignment Operators

| **Operator** | **Example** | Same As      |
| ------------ | ----------- | ------------ |
| \=           | x = y       | x = y        |
| \-=          | x += y      | x = x + y    |
| \*=          | x-=y        | x = x - y    |
| /=           | x \*= y     | x = x \* y   |
| %=           | x %= y      | x = x % y    |
| \*\*=        | x \*\*= y   | x = x \*\* y |

#### Comparison Operators

| **Operator** | **Description**                   |
| ------------ | --------------------------------- |
| \==          | equal to                          |
| \===         | equal value and equal type        |
| !=           | not equal                         |
| !==          | not equal value or not equal type |
| \>           | greater then                      |
| <            | lesser then                       |
| \>=          | greater than or equal to          |
| <=           | less than or equal to             |
| ?            | ternary operator                  |

### note

```
All the comparison operators above can also be used on strings
If you add a number and a string, the result will be a string!
```

#### Type Operators

| **Operator** | **Description**                                            |
| ------------ | ---------------------------------------------------------- |
| typeof       | Returns the type of a variable                             |
| instanceof   | Returns true if an object is an instance of an object type |

#### Bitwise Operators

Bit operators work on `32 bits numbers`.

Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.

| **Operator** | **Description**      |
| ------------ | -------------------- |
| &            | AND                  |
| \|           | OR                   |
| ~            | NOT                  |
| ^            | XOR                  |
| <<           | left shift           |
| \>>          | right shift          |
| \>>>         | unsigned right shift |

#### Bitwise Assignment Operators

| **Operator** | **Example** | **same as** |
| ------------ | ----------- | ----------- |
| &=           | x &= y      | x = x & y   |
| ^=           | x ^= y      | x = x ^ y   |
| \|=          | x \|= y     | x = x \| y  |

#### Shift Assignment Operators

| **Operator** | **Example** | **Same As** |
| ------------ | ----------- | ----------- |
| <<=          | x <<= y     | x = x << y  |
| \>>=         | x >>= y     | x = x >> y  |
| \>>>=        | x >>>= y    | x = x >>> y |

#### Logical Assignment Operators

| **Operator** | **Example** | **Same As**        |
| ------------ | ----------- | ------------------ |
| &&=          | x &&= y     | x = x && (x = y)   |
| \|\|=        | x \|\|= y   | x = x \|\| (x = y) |
| ??=          | x ??= y     | x = x ?? (x = y)   |

## JavaScript Data Types

JavaScript has 8 Datatypes

1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

The Object Datatype
The object data type can contain:

1. An object
2. An array
3. A date

### JavaScript Types are Dynamic

JavaScript has dynamic types. This means that the same variable can be used to hold different data types:

```js
let x; // Now x is undefined
x = 5; // Now x is a Number
x = "John"; // Now x is a String
```

### Exponential Notation

```js
let y = 123e5; // 12300000
let z = 123e-5; // 0.00123
```

### note

```Javascript numbers are always one type:
double (64-bit floating point).

You will learn more about numbers later in this tutorial.
```

### JavaScript BigInt

```js
let x = BigInt("123456789012345678901234567890");
```

### The typeof Operator

```js
typeof ""; // Returns "string"
typeof "John"; // Returns "string"
typeof "John Doe"; // Returns "string"

typeof 0; // Returns "number"
typeof 314; // Returns "number"
typeof 3.14; // Returns "number"
typeof 3; // Returns "number"
typeof (3 + 4); // Returns "number
```

### Undefined

In JavaScript, a variable without a value, has the value `undefined`. The type is also `undefined`.

```js
let car; // Value is undefined, type is undefined
```

### Empty Values

```js
let car = ""; // The value is "", the typeof is "string"
```

## JavaScript Functions

```js
// Function to compute the product of p1 and p2
function myFunction(p1, p2) {
  return p1 * p2;
}
```

### Local Variables

Variables declared within a JavaScript function, become LOCAL to the function.

Local variables can only be accessed from within the function.

```js
// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName
```

## JavaScript Objects

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
```

### Accessing Object Properties

```js
// objectName.propertyName
person.lastName;
```

```js
// objectName["propertyName"]
person["lastName"];
```

### Object Methods

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

### Accessing Object Methods

You access an object method with the following syntax

```js
objectName.methodName();
```

If you access a method without the () parentheses, it will return the function definition

### When a JavaScript variable is declared with the keyword "new", the variable is created as an object:

```js
x = new String(); // Declares x as a String object
y = new Number(); // Declares y as a Number object
z = new Boolean(); // Declares z as a Boolean object
```

## JavaScript Events

## JavaScript Strings

```js
let carName1 = "Volvo XC60"; // Double quotes
let carName2 = "Volvo XC60"; // Single quotes
```

### Quotes Inside Quotes

```js
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
```

### Template Strings

```js
let text = `He's often called "Johnny"`;
let text = `The quick
brown fox
jumps over
the lazy dog`;
```

### Escape Characters

```js
let text = 'We are the so-called "Vikings" from the north.';
let text = "It's alright.";
let text = "The character \\ is called backslash.";
```

| **Code** | **Result**           |
| -------- | -------------------- |
| \\b      | Backspace            |
| \\f      | Form Feed            |
| \\n      | New Line             |
| \\r      | Carriage Return      |
| \\t      | Horizontal Tabulator |
| \\v      | Vertical Tabulator   |

### JavaScript Strings as Objects

```js
let y = new String("John");
```

## JavaScript String Methods

### length

```js
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
```

### Extracting String Characters

- The at(position) Method

```js
const name = "W3Schools";
let letter = name.at(2);
```

- The charAt(position) Method

```js
let text = "HELLO WORLD";
let char = text.charAt(0);
```

- The charCodeAt(position) Method

```js
let text = "HELLO WORLD";
let char = text.charCodeAt(0);
```

- Using property access [] like in arrays

```js
const name = "W3Schools";
let letter = name[2];
```

```js
let text = "HELLO WORLD";
text[0] = "A"; // Gives no error, but does not work
```

### Extracting String Parts

There are 3 methods for extracting a part of a string:

- `slice(start, end)`
- `substring(start, end)`
- `substr(start, length)`

- #### `slice(start, end)`

`slice()` extracts a part of a string and returns the extracted part in a new string.

The method takes 2 parameters: start position, and end position (end not included).

```js
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
```

If you omit the second parameter, the method will slice out the rest of the string:

```js
let text = "Apple, Banana, Kiwi";
let part = text.slice(7);
```

If a parameter is negative, the position is counted from the end of the string:

```js
let text = "Apple, Banana, Kiwi";
let part = text.slice(-12);
```

This example slices out a portion of a string from position -12 to position -6:

```js
let text = "Apple, Banana, Kiwi";
let part = text.slice(-12, -6);
```

- ### `substring()` is similar to` slice().`

The difference is that start and end values less than 0 are treated as 0 in `substring()`.

- #### `substr()` is similar to `slice()`.

The difference is that the second parameter specifies the **_length_** of the extracted part.

```js
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6);
```

If you omit the second parameter, `substr()` will slice out the rest of the string.

```js
let str = "Apple, Banana, Kiwi";
let part = str.substr(7);
```

If the first parameter is negative, the position counts from the end of the string.

```js
let str = "Apple, Banana, Kiwi";
let part = str.substr(-4);
```

### Converting to Upper and Lower Case

A string is converted to upper case with `toUpperCase()`:

A string is converted to lower case with `toLowerCase()`:

```js
let text1 = "Hello World!";
let text2 = text1.toUpperCase();

let text1 = "Hello World!"; // String
let text2 = text1.toLowerCase(); // text2 is text1 converted to lower
```

### JavaScript String concat()

```js
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2); // "Hello world"
```

```js
text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");
```

### JavaScript String `trim()`

The trim() method removes whitespace from both sides of a string:

```js
let text1 = "      Hello World!      ";
let text2 = text1.trim();
```

`trimStart()`

```js
et text1 = "     Hello World!     ";
let text2 = text1.trimStart();
```

` trimEnd()`

```js
let text1 = "     Hello World!     ";
let text2 = text1.trimEnd();
```

`padStart() `

```js
let text = "5";
let padded = text.padStart(4, "0"); // 00005
```

`padEnd()`

```js
let text = "5";
let padded = text.padEnd(4, "0"); //50000
```

### JavaScript String repeat()

```js
let text = "Hello world!";
let result = text.repeat(2);
```

### Replacing String Content

```js
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools"); // replaces only first one

let text = "Please visit Microsoft!";
let newText = text.replace("MICROSOFT", "W3Schools"); // does not works

let text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/i, "W3Schools"); // using /i flag

let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/MICROSOFT/g, "W3Schools"); // using /g flag  replace all
```

### JavaScript String ReplaceAll()

```js
text = text.replaceAll("Cats", "Dogs");

text = text.replaceAll(/cats/g, "dogs");
```

### Converting a String to an Array

`split ()`

```js
text.split(","); // Split on commas
text.split(" "); // Split on spaces
text.split("|"); // Split on pipe

text.split(""); // char split
```

## JavaScript String Search


### JavaScript String indexOf()
```js
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate"); // 7 index  ffirt occurence 
```
### JavaScript String lastIndexOf()
```js
let text = "Please locate where 'locate' occurs!";
let index = text.lastIndexOf("locate");//21  index   last occurence
```
Both `indexOf()`, and `lastIndexOf()` return -1 if the text is not found
```js
let text = "Please locate where 'locate' occurs!";
let index = text.lastIndexOf("John"); //-1 not found

```

Both methods accept a second parameter as the starting position for the search:

```js
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate", 15);
```

The` lastIndexOf()` methods searches backwards `(from the end to the beginning)`, meaning: if the second parameter is 15, the search starts at position `15`, and searches to the beginning of the string.
```js
let text = "Please locate where 'locate' occurs!";
text.lastIndexOf("locate", 15);
```

### JavaScript String search()
```js
let text = "Please locate where 'locate' occurs!";
text.search("locate");// 7 

let text = "Please locate where 'locate' occurs!";
text.search(/locate/);// regualr expression 7 
```
### JavaScript String match()

## JavaScript Template Strings

## JavaScript Numbers

## JavaScript BigInt

## JavaScript Number Methods

## JavaScript Number Properties
