# Js Errors

- try
- catch
- throw
- finally

```js
try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
finally {
  Block of code to be executed regardless of the try / catch result
}

```

```js
try {
  if (x.trim() == "") throw "is empty";
  if (isNaN(x)) throw "is not a number";
  x = Number(x);
  if (x > 10) throw "is too high";
  if (x < 5) throw "is too low";
} catch (err) {
  message.innerHTML = "Error: " + err + ".";
} finally {
  document.getElementById("demo").value = "";
}
```

## The Error Object

| Property | Description                                 |
| -------- | ------------------------------------------- |
| name     | Sets or returns an error name               |
| message  | Sets or returns an error message (a string) |

### Different Error Name

| Error Name     | Description                                  |
| -------------- | -------------------------------------------- |
| EvalError      | An error has occurred in the eval() function |
| RangeError     | A number "out of range" has occurred         |
| ReferenceError | An illegal reference has occurred            |
| SyntaxError    | A syntax error has occurred                  |
| TypeError      | A type error has occurred                    |
| URIError       | An error in encodeURI() has occurred         |

# JS Scope

Scope determines the accessibility (visibility) of variables.

JavaScript variables have 3 types of scope:

Block scope
Function scope
Global scope


# JavaScript Hoisting
- Hoisting is JavaScript's default behavior of moving declarations to the top only for var 