### **Annotations**

Annotations are a form of metadata that provide data about a program but are not part of the program itself. They are used to provide additional information about the code, which can be processed at compile time or runtime. Annotations can be used to modify code behavior or serve as markers for specific operations.

---

### **1. Built-in Annotations**

Java provides several built-in annotations, which serve specific purposes such as code analysis, documentation, or runtime processing.

#### **Common Built-in Annotations**:

- **@Override**: Indicates that a method is overriding a method in the superclass. This annotation helps to prevent errors, as the compiler will flag an error if the method does not actually override a method in the superclass.

  **Example**:

  ```java
  @Override
  public String toString() {
      return "Custom String Representation";
  }
  ```

- **@Deprecated**: Marks a class, method, or field as deprecated, meaning it should no longer be used. The compiler generates a warning when it encounters the use of a deprecated element.

  **Example**:

  ```java
  @Deprecated
  public void oldMethod() {
      System.out.println("This method is deprecated.");
  }
  ```

- **@SuppressWarnings**: Instructs the compiler to suppress specific warnings. It’s often used to suppress warnings such as unchecked type casts or deprecated method warnings.

  **Example**:

  ```java
  @SuppressWarnings("unchecked")
  public void exampleMethod() {
      List list = new ArrayList();
      list.add("item");
  }
  ```

- **@FunctionalInterface**: Marks an interface as a functional interface, meaning it has exactly one abstract method and can be used as the target type for lambda expressions.

  **Example**:

  ```java
  @FunctionalInterface
  public interface MyFunctionalInterface {
      void execute();
  }
  ```

- **@Retention**: Specifies how long the annotation should be retained. It can be used to specify whether the annotation is available at compile-time, class-time, or runtime.

  **Example**:

  ```java
  @Retention(RetentionPolicy.RUNTIME)
  public @interface MyAnnotation {
      String value();
  }
  ```

- **@Target**: Specifies where the annotation can be applied (e.g., methods, fields, classes).

  **Example**:

  ```java
  @Target(ElementType.METHOD)
  public @interface MyMethodAnnotation {
  }
  ```

- **@Documented**: Indicates that the annotation should be included in the JavaDocs.

  **Example**:

  ```java
  @Documented
  public @interface MyAnnotation {
  }
  ```

- **@Inherited**: Specifies that an annotation is inherited by subclasses.

  **Example**:

  ```java
  @Inherited
  @interface MyAnnotation {
  }
  ```

---

### **2. Custom Annotations**

Java allows you to define your own annotations. Custom annotations can be used to add metadata or markers to your code that can later be processed by other tools or frameworks.

#### **Defining Custom Annotations**:

Custom annotations are defined using the `@interface` keyword. The syntax is similar to defining an interface, but it does not contain method bodies.

**Syntax**:

```java
public @interface MyCustomAnnotation {
    // You can define methods to store values in the annotation
    String description() default "No description provided";
    int value() default 0;
}
```

#### **Example of a Custom Annotation**:

```java
// Custom Annotation
public @interface MyCustomAnnotation {
    String author() default "Unknown";
    String date();
    int version() default 1;
}

public class TestAnnotation {
    @MyCustomAnnotation(author = "John Doe", date = "2024-12-23", version = 2)
    public void someMethod() {
        System.out.println("This is a method with a custom annotation.");
    }
}
```

#### **Using Custom Annotations**:

You can apply custom annotations to classes, methods, fields, etc., as long as they are marked with the appropriate `@Target`.

```java
@MyCustomAnnotation(author = "Jane Doe", date = "2024-12-24", version = 1)
public class MyClass {
    // Code for class
}
```

#### **Processing Custom Annotations**:

Annotations can be processed at runtime using reflection. The `java.lang.reflect` package provides classes to inspect annotations and process them at runtime.

**Example of Processing Custom Annotations**:

```java
import java.lang.annotation.Annotation;
import java.lang.reflect.Method;

public class AnnotationProcessor {
    public static void main(String[] args) throws Exception {
        Class<MyClass> obj = MyClass.class;

        // Check if MyCustomAnnotation is present
        if (obj.isAnnotationPresent(MyCustomAnnotation.class)) {
            Annotation annotation = obj.getAnnotation(MyCustomAnnotation.class);
            MyCustomAnnotation myAnnotation = (MyCustomAnnotation) annotation;

            System.out.println("Author: " + myAnnotation.author());
            System.out.println("Date: " + myAnnotation.date());
            System.out.println("Version: " + myAnnotation.version());
        }
    }
}
```

In this example, the `AnnotationProcessor` class uses reflection to process the `MyCustomAnnotation` at runtime and print the values associated with the annotation.

#### **Retention Policy**:

You can define how long the custom annotation should be available by using the `@Retention` annotation.

- `RetentionPolicy.SOURCE`: The annotation is discarded by the compiler and not included in the bytecode.
- `RetentionPolicy.CLASS`: The annotation is retained in the bytecode but is not available at runtime.
- `RetentionPolicy.RUNTIME`: The annotation is available at runtime for reflection.

```java
@Retention(RetentionPolicy.RUNTIME)
public @interface MyCustomAnnotation {
    String author();
    String date();
}
```

---

### **Key Points to Remember:**

- **Annotations** are used to add metadata to Java code for various purposes, including compile-time checks, documentation, and runtime processing.
- **Built-in Annotations** like `@Override`, `@Deprecated`, and `@SuppressWarnings` serve specific functions in Java.
- **Custom Annotations** are defined using the `@interface` keyword and can have methods to store values.
- Annotations can be processed using reflection at runtime or can be used to provide information to other tools or frameworks.
- **Retention** determines whether annotations are available at compile time, class time, or runtime, and **Target** defines where an annotation can be applied.
