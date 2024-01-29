# JavaScript Math Object

## imp topics 🚀

- [radmon range ](#radmon-range)

### Math Properties (Constants)

#### Math.E; // returns Euler's number

```js
Math.E; // returns Euler's number
```

#### Math.PI; // returns PI

```js
Math.PI; // returns PI
```

#### Math.SQRT2; // returns the square root of 2

```js
Math.SQRT2; // returns the square root of 2
```

#### Math.SQRT1_2; // returns the square root of 1/2

```js
Math.SQRT1_2; // returns the square root of 1/2
```

#### Math.LN2; // returns the natural logarithm of 2

```js
Math.LN2; // returns the natural logarithm of 2
```

#### Math.LN10; // returns the natural logarithm of 10

```js
Math.LN10; // returns the natural logarithm of 10
```

#### Math.LOG2E; // returns base 2 logarithm of E

```js
Math.LOG2E; // returns base 2 logarithm of E
```

#### Math.LOG10E; // returns base 10 logarithm of E

```js
Math.LOG10E; // returns base 10 logarithm of E
```

### Math Methods

#### Math.round(x); //Returns x rounded to its nearest integer

```js
Math.round(x); //Returns x rounded to its nearest integer
```

#### Math.ceil(x); //Returns x rounded up to its nearest integer

```js
Math.ceil(x); //Returns x rounded up to its nearest integer
```

#### Math.floor(x); //Returns x rounded down to its nearest integer

```js
Math.floor(x); //Returns x rounded down to its nearest integer
```

#### Math.trunc(x); //Returns the integer part of x (new in ES6)

```js
Math.trunc(x); //Returns the integer part of x (new in ES6)
```

#### Math.sign(); // Retures + or -

```js
Math.sign(); // Retures + or -
```

#### Math.pow(x, y); // returns the value of x to the power of y:

```js
Math.pow(x, y); // returns the value of x to the power of y:
```

#### Math.sqrt(x); //returns the square root of x:

```js
Math.sqrt(x); //returns the square root of x:
```

#### Math.abs(x); //returns the absolute (positive) value of x:

```js
Math.abs(x); //returns the absolute (positive) value of x:
```

#### Math.sin(x);

```js
Math.sin(x); // returns 1 (the sine of 90 degrees)
Math.sin((90 * Math.PI) / 180);
// returns the sine (a value between -1 and 1) of the angle x (given in radians).
```

#### Math.cos(x); //returns the cosine (a value between -1 and 1) of the angle x (given in radians).

```js
Math.cos(x); //returns the cosine (a value between -1 and 1) of the angle x (given in radians).
```

#### Math.min(10 , 94 , 4 343, 535, 53,) // 4

```js
Math.min(10 , 94 , 4 343, 535, 53,) //  4

```

#### Math.max(10 , 94 , 4 343, 535, 53,) // 545

```js
Math.max(10 , 94 , 4 343, 535, 53,) //  545

```

#### Math.random(); // returns a random number between 0, 1)

```js
Math.random(); // returns a random number between 0, 1)
```

#### console.log(Math.log(Math.E));

```js
console.log(Math.log(Math.E));
// 1
Math.log(x);
//returns the natural logarithm of x.
```

#### Math.log2(x); // returns the base 2 logarithm of x.

```js
Math.log2(x); // returns the base 2 logarithm of x.
```

#### The Math.log10()

```js
The Math.log10()

```

| Method               | Description                                                                   |
| -------------------- | ----------------------------------------------------------------------------- |
| abs(x)               | Returns the absolute value of x                                               |
| acos(x)              | Returns the arccosine of x, in radians                                        |
| acosh(x)             | Returns the hyperbolic arccosine of x                                         |
| asin(x)              | Returns the arcsine of x, in radians                                          |
| asinh(x)             | Returns the hyperbolic arcsine of x                                           |
| atan(x)              | Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians |
| atan2(y, x)          | Returns the arctangent of the quotient of its arguments                       |
| atanh(x)             | Returns the hyperbolic arctangent of x                                        |
| cbrt(x)              | Returns the cubic root of x                                                   |
| ceil(x)              | Returns x, rounded upwards to the nearest integer                             |
| cos(x)               | Returns the cosine of x (x is in radians)                                     |
| cosh(x)              | Returns the hyperbolic cosine of x                                            |
| exp(x)               | Returns the value of Ex                                                       |
| floor(x)             | Returns x, rounded downwards to the nearest integer                           |
| log(x)               | Returns the natural logarithm (base E) of x                                   |
| max(x, y, z, ..., n) | Returns the number with the highest value                                     |
| min(x, y, z, ..., n) | Returns the number with the lowest value                                      |
| pow(x, y)            | Returns the value of x to the power of y                                      |
| random()             | Returns a random number between 0 and 1                                       |
| round(x)             | Rounds x to the nearest integer                                               |
| sign(x)              | Returns if x is negative, null or positive (-1, 0, 1)                         |
| sin(x)               | Returns the sine of x (x is in radians)                                       |
| sinh(x)              | Returns the hyperbolic sine of x                                              |
| sqrt(x)              | Returns the square root of x                                                  |
| tan(x)               | Returns the tangent of an angle                                               |
| tanh(x)              | Returns the hyperbolic tangent of a number                                    |
| trunc(x)             | Returns the integer part of a number (x)                                      |

## Math Radom ()

```js
// Returns a random integer from 0 to 9:
Math.floor(Math.random() * 10);

/ Returns a random integer from 0 to 10:
Math.floor(Math.random() * 11);

// Returns a random integer from 0 to 99:
Math.floor(Math.random() * 100);


// Returns a random integer from 0 to 100:
Math.floor(Math.random() * 101);
```

```js
// Returns a random integer from 1 to 10:
Math.floor(Math.random() * 10) + 1;

// Returns a random integer from 1 to 100:
Math.floor(Math.random() * 100) + 1;
```

### radmon range

```js
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
} // [min, Max)
```

```js
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
} // [min, Max]
```
