# Advanced OOP Concepts in Java

This section explores advanced topics in Object-Oriented Programming (OOP) that are essential for mastering Java.

---

## Inner and Anonymous Classes

### Inner Classes
Inner classes are classes defined within another class. They have access to the members (including private members) of the outer class.

#### Example:
```java
class Outer {
    private String message = "Hello from Outer class!";

    class Inner {
        void displayMessage() {
            System.out.println(message);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Outer.Inner inner = new Outer().new Inner();
        inner.displayMessage();
    }
}
```

### Anonymous Classes
Anonymous classes are used to create one-time-use classes, often for implementing interfaces or abstract classes.

#### Example:
```java
interface Greeting {
    void sayHello();
}

public class Main {
    public static void main(String[] args) {
        Greeting greeting = new Greeting() {
            public void sayHello() {
                System.out.println("Hello, World!");
            }
        };
        greeting.sayHello();
    }
}
```

---

## Static Members and Blocks

### Static Members
Static fields and methods belong to the class rather than any instance of the class.

#### Example:
```java
class Calculator {
    static int add(int a, int b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        System.out.println(Calculator.add(10, 20));
    }
}
```

### Static Blocks
Static blocks are used to initialize static fields or execute code during class loading.

#### Example:
```java
class Demo {
    static {
        System.out.println("Static block executed.");
    }

    public static void display() {
        System.out.println("Static method executed.");
    }
}

public class Main {
    public static void main(String[] args) {
        Demo.display();
    }
}
```

---

## Final Keyword Usage
The `final` keyword is used to restrict inheritance, method overriding, or reassignment of variables.

### Examples:
1. **Final Variable:**
   ```java
   final int MAX = 100;
   // MAX = 200; // Error: Cannot reassign a final variable
   ```

2. **Final Method:**
   ```java
   class Parent {
       final void display() {
           System.out.println("This is a final method.");
       }
   }

   class Child extends Parent {
       // void display() { } // Error: Cannot override a final method
   }
   ```

3. **Final Class:**
   ```java
   final class Constants {
       static final double PI = 3.14159;
   }

   // class ExtendedConstants extends Constants {} // Error: Cannot extend a final class
   ```

---

## Object Cloning
Object cloning creates a copy of an object. This is done using the `clone()` method of the `Object` class.

### Steps to Implement Cloning:
1. Implement the `Cloneable` interface.
2. Override the `clone()` method.

#### Example:
```java
class Person implements Cloneable {
    String name;
    int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}

public class Main {
    public static void main(String[] args) {
        try {
            Person person1 = new Person("Alice", 25);
            Person person2 = (Person) person1.clone();

            System.out.println(person2.name + " " + person2.age);
        } catch (CloneNotSupportedException e) {
            e.printStackTrace();
        }
    }
}
```

---

## Method Overriding and Overloading

### Method Overloading
Method overloading allows multiple methods in the same class to have the same name but different parameter lists.

#### Example:
```java
class MathOperations {
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }
}
```

### Method Overriding
Method overriding allows a subclass to provide a specific implementation for a method that is already defined in its parent class.

#### Example:
```java
class Parent {
    void display() {
        System.out.println("Parent class display method.");
    }
}

class Child extends Parent {
    @Override
    void display() {
        System.out.println("Child class display method.");
    }
}

public class Main {
    public static void main(String[] args) {
        Parent obj = new Child();
        obj.display();
    }
}
```

