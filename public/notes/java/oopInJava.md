# Object-Oriented Programming (OOP) in Java

Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects," which contain data (fields) and methods (functions) that operate on the data. Java is inherently designed around OOP principles.

---

## Classes and Objects

### Class
A class is a blueprint for objects. It defines properties (fields) and behaviors (methods) that the objects will have.

#### Example:
```java
public class Car {
    // Fields (Attributes)
    String brand;
    int speed;

    // Constructor
    public Car(String brand, int speed) {
        this.brand = brand;
        this.speed = speed;
    }

    // Method (Behavior)
    public void displayInfo() {
        System.out.println("Brand: " + brand + ", Speed: " + speed);
    }
}
```

### Object
An object is an instance of a class.

#### Example:
```java
public class Main {
    public static void main(String[] args) {
        Car car1 = new Car("Toyota", 120); // Create an object
        car1.displayInfo(); // Call a method
    }
}
```

---

## Constructors
Constructors are special methods used to initialize objects. They have the same name as the class and do not have a return type.

### Types of Constructors
1. **Default Constructor**: Provided by the compiler if no constructor is explicitly defined.
2. **Parameterized Constructor**: Defined by the programmer to accept parameters.

#### Example:
```java
public class Person {
    String name;
    int age;

    // Parameterized Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
```

---

## Inheritance
Inheritance allows one class (child) to inherit fields and methods from another class (parent).

### Example:
```java
class Animal {
    void eat() {
        System.out.println("This animal eats food.");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("The dog barks.");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat(); // Inherited method
        dog.bark();
    }
}
```

---

## Polymorphism
Polymorphism means "many forms" and allows a single action to behave differently based on the context.

### Types:
1. **Compile-Time Polymorphism (Method Overloading)**
2. **Runtime Polymorphism (Method Overriding)**

#### Method Overloading:
```java
class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }
}
```

#### Method Overriding:
```java
class Animal {
    void sound() {
        System.out.println("Animal makes a sound.");
    }
}

class Cat extends Animal {
    @Override
    void sound() {
        System.out.println("Cat meows.");
    }
}
```

---

## Abstraction and Interfaces
Abstraction is the process of hiding implementation details and showing only the functionality.

### Abstract Classes:
```java
abstract class Shape {
    abstract void draw(); // Abstract method
}

class Circle extends Shape {
    void draw() {
        System.out.println("Drawing a circle.");
    }
}
```

### Interfaces:
Interfaces specify methods that a class must implement without providing their implementation.

#### Example:
```java
interface Animal {
    void makeSound();
}

class Dog implements Animal {
    public void makeSound() {
        System.out.println("Dog barks.");
    }
}
```

---

## Encapsulation
Encapsulation is the process of bundling data and methods together and restricting direct access to them.

### Example:
```java
class BankAccount {
    private double balance;

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
}
```
