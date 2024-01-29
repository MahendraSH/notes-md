# js class

```js
// a class can only have one constructor 🚀
class Person {
  constructor(age, name) {
    this.age = age;
    this.name = name;
  }
  getAge() {
    return this.age;
  }
  getName() {
    return this.name;
  }

  setAge(age) {
    this.age = age;
  }
  setName(name) {
    this.name = name;
  }
}

const person1 = new Person();
const person2 = new Person(20, "aaa");

console.log(person1); // { age :undefiend  name : undefiend}
console.log(person2); // {age : 20 , name : 'aaa'}

console.log(person2.getAge()); // 20
console.log(person2.getName()); // aaa

person1.setAge(100);
person1.setName("djsl");

console.log(person1); //  {age : 100 , name: "djsl"}
```

# js Modules

- import
- export
- default export

```js
import axios from "axios"

export const s = "something "

const  some = "soem;
export default  some;

```
