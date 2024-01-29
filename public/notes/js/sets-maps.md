# JavaScript Sets

- A JavaScript Set is a collection of `unique` values.

## Essential Set Methods

| Method    | Description                                      |
| --------- | ------------------------------------------------ |
| new Set() | Creates a new Set                                |
| add()     | Adds a new element to the Set                    |
| delete()  | Removes an element from a Set                    |
| has()     | Returns true if a value exists in the Set        |
| forEach() | Invokes a callback for each element in the Set   |
| values()  | Returns an iterator with all the values in a Set |

| Property | Description                             |
| -------- | --------------------------------------- |
| size     | Returns the number of elements in a Set |

## create a set

```js
const seta = new Set(); // empty set
seta.add(1);
seta.add(2);
seta.add(3);
seta.add(3);
seta.add(10);
seta.add(2);
seta.add(10);

console.log(seta.size); // 4
console.log(seta);
//Set(4) { 1, 2, 3, 10 }
```

```js
const seta = new Set([1, 3, 4, 43, 34, 3, 2, 1, 3, 1, 23, 38]);
console.log(seta);
// Set(8) { 1, 3, 4, 43, 34, 2, 23, 38 }
```

```js
const arr = [23, 2, 42, 3, 23, 4, 34, 44, 44];
const seta = new Set(arr);
console.log(seta);
// Set(7) { 23, 2, 42, 3, 4, 34, 44 }
```

## for each loop on sets

```js
const seta = new Set([1, 3, 4, 43, 34, 3, 2, 1, 3, 1, 23, 38]);
seta.forEach((i) => {
  console.log(i);
});
// 1 ,3 ,4 ,43 ,34 ,2 ,23 ,38
```

## for of loop on sets using set.`values()`

# find Diff with and without using `values()`

```js
const seta = new Set([1, 3, 4, 43, 34, 3, 2, 1, 3, 1, 23, 38]);

for (let i of seta.values()) {
  console.log(i);
}
// 1 ,3 ,4 ,43 ,34 ,2 ,23 ,38

const seta = new Set([1, 3, 4, 43, 34, 3, 2, 1, 3, 1, 23, 38]);

for (let i of seta) {
  console.log(i);
}
```

# Maps

- A Map holds key-value pairs where the keys can be any datatype.

- A Map remembers the original insertion order of the keys.

## Maps methods and Property

| Method    | Description                                              |
| --------- | -------------------------------------------------------- |
| new Map() | Creates a new Map                                        |
| set()     | Sets the value for a key in a Map                        |
| get()     | Gets the value for a key in a Map                        |
| delete()  | Removes a Map element specified by the key               |
| has()     | Returns true if a key exists in a Map                    |
| forEach() | Calls a function for each key/value pair in a Map        |
| entries() | Returns an iterator with the [key, value] pairs in a Map |

| Property | Description                             |
| -------- | --------------------------------------- |
| size     | Returns the number of elements in a Map |

## create maps using new Map()

```js
const mapa = new Map([
  [1, "a"],
  [2, "b"],
  [3, "c"],
]);
console.log(mapa);
// Map(3) { 1 => 'a', 2 => 'b', 3 => 'c' }
```

## map `set() `

```js
const mapa = new Map();
mapa.set("a", 1);
mapa.set("b", 10);
mapa.set("c", 100);
mapa.set("d", 1000);

console.log(mapa);
// Map(4) { 'a' => 1, 'b' => 10, 'c' => 100, 'd' => 1000 }
```

```js
const mapa = new Map([
  [1, "a"],
  [2, "b"],
  [3, "c"],
]);
mapa.set(1, "aaa");
console.log(mapa);
// Map(3) { 1 => 'aaa', 2 => 'b', 3 => 'c' }
```

## get() method

```js
const mapa = new Map([
  [1, "a"],
  [2, "b"],
  [3, "c"],
]);
console.log(mapa.get(1)); // Returns "a"
```

## size

```js
maps.size; // Returns size
```

## delete() method

```js
maps.delete(key); // deletes it
```

## has() method

```js
maps.has(key); // Returns true if key is presnet
```

## The entries() Method

```js
// List all entrie
for (const x of mapa.entries()) {
  //.....
}
```

## Object vs Maps

|           | Object                            | Maps                          |
| --------- | --------------------------------- | ----------------------------- |
| Iterable  | Not directly iterable             | Directly iterable             |
| Size      | Do not have a size property       | Have a size property          |
| Key Types | Keys must be Strings (or Symbols) | Keys can be any datatype      |
| Key Order | Keys are not well ordered         | Keys are ordered by insertion |
| Defaults  | Have default keys                 | Do not have default keys      |
