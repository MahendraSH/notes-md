# Basics of Java

## Data Types and Variables

### Data Types
Java is a statically typed language, meaning variables must be declared with a specific type.

#### Primitive Data Types
1. **byte**: 8-bit signed integer, range: -128 to 127.
2. **short**: 16-bit signed integer, range: -32,768 to 32,767.
3. **int**: 32-bit signed integer, range: -2¹31 to 2¹31-1.
4. **long**: 64-bit signed integer, range: -2⁲63 to 2⁲63-1.
5. **float**: 32-bit floating-point number.
6. **double**: 64-bit floating-point number.
7. **char**: 16-bit Unicode character.
8. **boolean**: Holds `true` or `false` values.

#### Non-Primitive Data Types
- Strings, arrays, and user-defined classes.

### Variables
Variables are containers for storing data values.

#### Declaration and Initialization
```java
int age = 25; // Declaration and initialization
float pi = 3.14f; // Float type requires 'f' suffix
String name = "John";
```

---

## Operators and Expressions

### Types of Operators
1. **Arithmetic Operators**: `+`, `-`, `*`, `/`, `%`
2. **Relational Operators**: `==`, `!=`, `<`, `>`, `<=`, `>=`
3. **Logical Operators**: `&&`, `||`, `!`
4. **Bitwise Operators**: `&`, `|`, `^`, `~`, `<<`, `>>`
5. **Assignment Operators**: `=`, `+=`, `-=`, `*=`, `/=`, `%=`
6. **Unary Operators**: `+`, `-`, `++`, `--`, `!`
7. **Ternary Operator**: `condition ? value1 : value2`

### Example
```java
int a = 10, b = 20;
int sum = a + b; // Arithmetic
boolean isEqual = (a == b); // Relational
boolean result = (a > 5 && b < 30); // Logical
```

---

## Control Flow Statements

### Conditional Statements
1. **if Statement**
   ```java
   if (a > b) {
       System.out.println("a is greater than b");
   }
   ```

2. **if-else Statement**
   ```java
   if (a > b) {
       System.out.println("a is greater");
   } else {
       System.out.println("b is greater");
   }
   ```

3. **switch Statement**
   ```java
   int day = 2;
   switch (day) {
       case 1: System.out.println("Monday"); break;
       case 2: System.out.println("Tuesday"); break;
       default: System.out.println("Other day");
   }
   ```

### Looping Statements
1. **for Loop**
   ```java
   for (int i = 0; i < 5; i++) {
       System.out.println(i);
   }
   ```

2. **while Loop**
   ```java
   int i = 0;
   while (i < 5) {
       System.out.println(i);
       i++;
   }
   ```

3. **do-while Loop**
   ```java
   int i = 0;
   do {
       System.out.println(i);
       i++;
   } while (i < 5);
   ```

---

## Arrays

### Definition
An array is a collection of elements of the same type stored in contiguous memory locations.

### Declaration and Initialization
```java
int[] numbers = new int[5]; // Declaration with size
int[] values = {1, 2, 3, 4, 5}; // Declaration and initialization
```

### Accessing Elements
```java
System.out.println(values[0]); // Access first element
values[1] = 10; // Modify second element
```

### Iterating Through an Array
```java
for (int num : values) {
    System.out.println(num);
}
```
    