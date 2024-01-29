## IMP 🚀  read once more  after completing all 
- all  https://www.w3schools.com/js/js_es5.asp
- https://www.w3schools.com/js/js_es6.asp

# JavaScript ES5

## JSON.stringify() // return string of json 
## toJSON() converts a Date object into a string, formatted as a JSON date.

##  Property Getters and Setters 
```js
// Create an object:
var person = {
  firstName: "John",
  lastName : "Doe",
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
};

person.fullName;
```

```js
var person = {
  firstName: "John",
  lastName : "Doe",
  language : "NO",
  get lang() {
    return this.language;
  },
  set lang(value) {
    this.language = value;
  }
};

// Set an object property using a setter:
person.lang = "en";

```

```js
var person = {
  firstName: "John",
  lastName : "Doe",
  language : "NO",
  set lang(value) {
    this.language = value.toUpperCase();
  }
};

// Set an object property using a setter:
person.lang = "en";

```

## Object.defineProperty() 🚀 