# Introduction to Java

## History and Features of Java

### History
Java is a high-level, class-based, object-oriented programming language developed by Sun Microsystems in 1995. The language was created by James Gosling and his team as part of the Green Project. Initially called "Oak," the name was later changed to Java, inspired by Java coffee.

### Features
1. **Platform Independence**: Java programs are compiled into bytecode that can run on any device with a Java Virtual Machine (JVM).
2. **Object-Oriented**: Java supports OOP principles such as encapsulation, inheritance, and polymorphism.
3. **Robust**: Java provides strong memory management, exception handling, and garbage collection.
4. **Secure**: Java applications run in a sandbox environment and provide features like bytecode verification.
5. **Multithreaded**: Java supports multithreading, enabling concurrent execution of code.
6. **Portable**: Write once, run anywhere (WORA) philosophy is central to Java.
7. **High Performance**: With Just-In-Time (JIT) compilation, Java achieves good performance.

---

## JVM, JRE, and JDK

### JVM (Java Virtual Machine)
- **Definition**: A runtime environment that executes Java bytecode.
- **Role**:
  1. Converts bytecode into machine code.
  2. Manages memory and garbage collection.
  3. Ensures platform independence.

### JRE (Java Runtime Environment)
- **Definition**: A software package that provides the JVM and libraries required to run Java applications.
- **Components**:
  1. JVM
  2. Core Libraries
  3. Supporting Files

### JDK (Java Development Kit)
- **Definition**: A software development kit required to develop Java applications.
- **Components**:
  1. JRE
  2. Development tools like `javac` (compiler), `java` (launcher), and `javadoc` (documentation generator).

---

## The "Hello, World!" Program

### Code Example
```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

### Explanation
1. **`public class HelloWorld`**: Declares a class named `HelloWorld`.
2. **`public static void main(String[] args)`**: Defines the main method, the entry point for Java applications.
3. **`System.out.println("Hello, World!")`**: Prints "Hello, World!" to the console.

### Steps to Run
1. **Write the Code**: Save the code in a file named `HelloWorld.java`.
2. **Compile**: Use the command `javac HelloWorld.java` to compile the code.
3. **Run**: Use the command `java HelloWorld` to execute the program.

### Output
```
Hello, World!
```
