
### **11. Java 8 Features**

Java 8 introduced several powerful features, enabling more concise and functional programming in Java. The main features include **Lambda Expressions**, **Streams API**, **Functional Interfaces**, and **Default and Static Methods in Interfaces**. These features facilitate functional-style programming and enhance code readability and performance.

---

### **1. Lambda Expressions**

Lambda expressions provide a clear and concise way to represent a method as an argument to a function. Lambda expressions enable you to write instances of single-method interfaces (functional interfaces) in a more compact way.

#### **Syntax**:
```java
(parameters) -> expression
```

- **No parameters**:
  ```java
  () -> System.out.println("Hello World!");
  ```

- **One parameter**:
  ```java
  x -> x * x
  ```

- **Multiple parameters**:
  ```java
  (x, y) -> x + y
  ```

#### **Example**:
Using a lambda expression to define a `Runnable`:
```java
public class LambdaExample {
    public static void main(String[] args) {
        // Using lambda expression to create a Runnable
        Runnable r = () -> System.out.println("Hello from a thread!");
        new Thread(r).start();
    }
}
```

Lambda expressions are commonly used in places where a method is passed as an argument, like in `Collections.sort()`, or in stream operations.

---

### **2. Streams API**

The Streams API enables functional-style operations on sequences of elements (such as collections) in Java. A stream is a sequence of elements that can be processed in parallel or sequentially.

#### **Key Concepts**:
- **Stream**: A stream represents a sequence of elements. It doesn’t store data but operates on data provided by a source, such as a collection or an array.
- **Operations**: Operations are of two types:
  - **Intermediate operations**: These return a new stream and can be chained (e.g., `map()`, `filter()`).
  - **Terminal operations**: These produce a result or side-effect and terminate the stream (e.g., `forEach()`, `collect()`, `reduce()`).

#### **Example**:
Filtering and mapping a list of integers:
```java
import java.util.*;
import java.util.stream.*;

public class StreamsExample {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);
        
        // Using Streams to filter and map
        List<Integer> evenSquares = numbers.stream()
                                           .filter(n -> n % 2 == 0)  // Filter even numbers
                                           .map(n -> n * n)          // Square each number
                                           .collect(Collectors.toList()); // Collect results into a list

        System.out.println(evenSquares);  // Output: [4, 16, 36]
    }
}
```

Streams provide a declarative way of handling operations on data, making the code more concise and readable.

#### **Parallel Streams**:
You can also process streams in parallel, which can improve performance for large datasets:
```java
numbers.parallelStream().forEach(System.out::println);
```

---

### **3. Functional Interfaces**

A **Functional Interface** is an interface that has only one abstract method. It can have multiple default or static methods, but only one abstract method.

- **java.util.function** package contains several predefined functional interfaces like:
  - `Function<T, R>`
  - `Predicate<T>`
  - `Consumer<T>`
  - `Supplier<T>`
  - `UnaryOperator<T>`
  
#### **Example**:
```java
@FunctionalInterface
public interface MyFunctionalInterface {
    void myMethod();  // Single abstract method

    // Default method (can be added to a functional interface)
    default void defaultMethod() {
        System.out.println("Default method");
    }

    // Static method
    static void staticMethod() {
        System.out.println("Static method");
    }
}

public class FunctionalInterfaceExample {
    public static void main(String[] args) {
        // Using lambda expression to implement functional interface
        MyFunctionalInterface myInterface = () -> System.out.println("Lambda expression in action!");
        myInterface.myMethod();
        
        // Calling default and static methods
        myInterface.defaultMethod();
        MyFunctionalInterface.staticMethod();
    }
}
```

In this example, `MyFunctionalInterface` is a functional interface with one abstract method, and it also defines a default and a static method.

---

### **4. Default and Static Methods in Interfaces**

Java 8 introduced the concept of **default** and **static** methods in interfaces.

#### **Default Methods**:
A default method provides a method implementation within an interface. This allows interfaces to evolve without breaking existing implementations.

- **Syntax**:
  ```java
  default returnType methodName() {
      // Method implementation
  }
  ```

- **Example**:
  ```java
  interface MyInterface {
      default void greet() {
          System.out.println("Hello, default method!");
      }
  }

  class MyClass implements MyInterface {
      public static void main(String[] args) {
          MyClass obj = new MyClass();
          obj.greet();  // Calls the default method from the interface
      }
  }
  ```

#### **Static Methods**:
Static methods in interfaces are similar to static methods in classes. These methods can be called on the interface itself, rather than on an instance of a class implementing the interface.

- **Syntax**:
  ```java
  static returnType methodName() {
      // Static method implementation
  }
  ```

- **Example**:
  ```java
  interface MyInterface {
      static void staticMethod() {
          System.out.println("Hello, static method!");
      }
  }

  public class StaticMethodExample {
      public static void main(String[] args) {
          MyInterface.staticMethod();  // Calls the static method from the interface
      }
  }
  ```

---

### **Key Points to Remember:**

- **Lambda Expressions**: Provide a more concise and readable way to write anonymous methods.
- **Streams API**: Enables functional-style operations on collections, such as filtering, mapping, and reducing data.
- **Functional Interfaces**: Interfaces with a single abstract method. They can be implemented using lambda expressions.
- **Default and Static Methods**: Allow interfaces to provide method implementations, enabling backward compatibility and flexibility in interface design.
