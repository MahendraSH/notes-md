## important 🚀


- [js json](#javascript-json)

# JavaScript JSON

## json to Obj anad obj to JSON strig

```js
let text =
  '{ "employees" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
const obj = JSON.parse(text);
const a = {
  1: "one",
  2: {
    1: {
      2: {
        3: 10,
      },
    },
  },
};

console.log(JSON.stringify(a));
// {"1":"one","2":{"1":{"2":{"3":10}}}}
// sting
```

# JavaScript Debugging

- dev tools in browser
- and Console.log()

# JavaScript Style Guide

- namning varible like camel case , snake case etc

# JavaScript Best Practices

- Avoid Global Variables
- Declarations on Top
- Initialize Variables on Declarations
- Declare Objects with const
- do not use new Object like new String () or new Number() etc
- Beware of Automatic Type Conversions
- Use === Comparison
- be aware of undfined in funtion call parameters
- End Your Switches with Defaults
- Avoid Using eval()

# JavaScript Common Mistakes

- see https://www.w3schools.com/js/js_mistakes.asp

# JavaScript Performance

- https://www.w3schools.com/js/js_performance.asp

# JavaScript Reserved Words

- https://www.w3schools.com/js/js_reserved.asp
