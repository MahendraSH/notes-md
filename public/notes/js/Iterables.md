# iterables

- Iterables are iterable objects (like Arrays).
- `Iterables[keys]` can be easly and using for of can be looped

```js
for (variable of iterable) {
  // code block to be executed
}
```

## eg

1. array

```js
const letters = ["a", "b", "c"];

for (const x of letters) {
  // code block to be executed
}
```

2. string

```js
const name = "W3Schools";

for (const x of name) {
  // code block to be executed
}
```

3. sets

```js
const letters = new Set(["a", "b", "c"]);

for (const x of letters) {
  // code block to be executed
}
```

4. maps

```js
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

for (const x of fruits) {
  // code block to be executed
}
```
