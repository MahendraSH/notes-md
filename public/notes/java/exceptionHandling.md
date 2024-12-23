# Exception Handling in Java

Exception handling is a mechanism in Java to handle runtime errors, ensuring the program continues its execution without crashing.

---

## Types of Exceptions

### 1. Checked Exceptions
Checked exceptions are checked at compile time. The programmer must handle them using `try-catch` blocks or declare them using the `throws` keyword.

#### Examples:
- IOException
- SQLException

### 2. Unchecked Exceptions
Unchecked exceptions occur at runtime and are not checked during compilation. They are usually caused by programming errors.

#### Examples:
- NullPointerException
- ArrayIndexOutOfBoundsException

### 3. Errors
Errors are serious problems that applications should not try to catch, such as memory leaks or stack overflow.

#### Examples:
- OutOfMemoryError
- StackOverflowError

---

## Try, Catch, Finally Blocks

### Try Block
A `try` block contains code that might throw an exception.

### Catch Block
A `catch` block is used to handle exceptions thrown in the `try` block.

### Finally Block
A `finally` block contains code that will always execute, regardless of whether an exception occurs or not.

#### Example:
```java
public class Main {
    public static void main(String[] args) {
        try {
            int result = 10 / 0; // Throws ArithmeticException
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero: " + e.getMessage());
        } finally {
            System.out.println("Execution complete.");
        }
    }
}
```

---

## Throw and Throws

### Throw
The `throw` keyword is used to explicitly throw an exception.

#### Example:
```java
public class Main {
    public static void checkAge(int age) {
        if (age < 18) {
            throw new IllegalArgumentException("Age must be 18 or above.");
        }
    }

    public static void main(String[] args) {
        checkAge(15);
    }
}
```

### Throws
The `throws` keyword is used in method declarations to specify which exceptions can be thrown by the method.

#### Example:
```java
import java.io.*;

public class Main {
    public static void readFile(String fileName) throws IOException {
        FileReader file = new FileReader(fileName);
        BufferedReader reader = new BufferedReader(file);
        System.out.println(reader.readLine());
    }

    public static void main(String[] args) {
        try {
            readFile("example.txt");
        } catch (IOException e) {
            System.out.println("An error occurred: " + e.getMessage());
        }
    }
}
```

---

## Custom Exceptions

Custom exceptions allow you to create user-defined exception types.

### Steps to Create a Custom Exception
1. Extend the `Exception` or `RuntimeException` class.
2. Provide constructors to initialize the exception.

#### Example:
```java
class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}

public class Main {
    public static void checkAge(int age) throws InvalidAgeException {
        if (age < 18) {
            throw new InvalidAgeException("Age must be 18 or above.");
        }
    }

    public static void main(String[] args) {
        try {
            checkAge(15);
        } catch (InvalidAgeException e) {
            System.out.println("Caught Exception: " + e.getMessage());
        }
    }
}
```


