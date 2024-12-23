### **9. Generics**

Generics in Java provide a way to define classes, interfaces, and methods with type parameters, allowing you to write more flexible and reusable code. They enable compile-time type checking, reducing the risk of `ClassCastException` at runtime. Generics are used extensively in collections, ensuring type safety.

---

### **1. Generic Classes and Methods**

#### **Generic Classes**:
A generic class is a class that can operate on objects of various types while providing compile-time type safety. The class is defined with one or more type parameters inside angle brackets (`<>`).

**Syntax**:
```java
class ClassName<T> {
    private T data;  // T represents the type of data the class will hold
    
    public ClassName(T data) {
        this.data = data;
    }

    public T getData() {
        return data;
    }
}
```

**Example**:
```java
// Generic class for storing a value of any type
class Box<T> {
    private T value;

    public Box(T value) {
        this.value = value;
    }

    public T getValue() {
        return value;
    }
}

public class GenericClassExample {
    public static void main(String[] args) {
        // Creating a Box for an Integer
        Box<Integer> integerBox = new Box<>(100);
        System.out.println(integerBox.getValue());

        // Creating a Box for a String
        Box<String> stringBox = new Box<>("Hello, World!");
        System.out.println(stringBox.getValue());
    }
}
```

In this example, `Box<T>` is a generic class, and the type `T` can be replaced with any object type when the class is instantiated (e.g., `Box<Integer>` or `Box<String>`).

#### **Generic Methods**:
A generic method is a method that can be used with different types, specified by type parameters. Type parameters are declared inside the method’s signature.

**Syntax**:
```java
public <T> void methodName(T param) {
    // Method implementation using the type T
}
```

**Example**:
```java
public class GenericMethodExample {

    // Generic method to print the value of any type
    public static <T> void printData(T data) {
        System.out.println("Data: " + data);
    }

    public static void main(String[] args) {
        printData(123);           // Integer
        printData("Hello!");      // String
        printData(3.14);          // Double
    }
}
```

In this example, the `printData` method can accept any type as an argument, thanks to the generic type `<T>`.

---

### **2. Wildcards and Bounds**

#### **Wildcards (`?`)**:
Wildcards are used in generics when you don’t know the exact type of the class you are working with. The wildcard symbol (`?`) represents an unknown type.

- **Unbounded Wildcard**: `?` is used when you don’t want to restrict the type. This allows any type to be used.

```java
public static void printList(List<?> list) {
    for (Object obj : list) {
        System.out.println(obj);
    }
}
```

- **Upper Bounded Wildcard**: `? extends T` specifies that the type can be `T` or any subclass of `T`. This is useful when you want to read from a collection but don’t want to modify it.

```java
public static void printNumbers(List<? extends Number> list) {
    for (Number num : list) {
        System.out.println(num);
    }
}
```
In this case, `? extends Number` allows a list of `Number`, `Integer`, `Double`, etc.

- **Lower Bounded Wildcard**: `? super T` specifies that the type can be `T` or any superclass of `T`. This is useful when you want to write to a collection.

```java
public static void addNumbers(List<? super Integer> list) {
    list.add(10);  // Can add Integer or its subtypes
}
```

#### **Bounds on Generics**:
You can restrict the types that can be used with a generic class or method using **bounds**.

- **Upper Bound (`extends`)**: Restricts the type to be a subclass of a specific class or implement a particular interface.

```java
class NumberBox<T extends Number> {
    private T value;

    public NumberBox(T value) {
        this.value = value;
    }

    public T getValue() {
        return value;
    }
}

public class UpperBoundExample {
    public static void main(String[] args) {
        // Only Number or its subclasses (like Integer, Double) are allowed
        NumberBox<Integer> intBox = new NumberBox<>(10);
        NumberBox<Double> doubleBox = new NumberBox<>(3.14);
        
        // This will cause a compile-time error
        // NumberBox<String> stringBox = new NumberBox<>("Text");
    }
}
```

In this example, `NumberBox<T extends Number>` restricts `T` to `Number` or any subclass of `Number`.

- **Lower Bound (`super`)**: Restricts the type to be a superclass of a given class. This is useful in situations where you want to add to a collection.

```java
class LowerBoundExample {
    public static void addIntegerToList(List<? super Integer> list) {
        list.add(10); // Works, since Integer is a subclass of Number
    }

    public static void main(String[] args) {
        List<Number> numberList = new ArrayList<>();
        addIntegerToList(numberList); // Works with super Integer
    }
}
```

---

### **Key Points to Remember**:

- **Generics** provide type safety and allow you to write reusable code without worrying about type mismatches.
- You can define **generic classes** and **methods** to work with any data type.
- **Wildcards** (`?`) allow flexibility in accepting multiple types with constraints:
  - `?`: Any type
  - `? extends T`: Any subclass of `T`
  - `? super T`: Any superclass of `T`
- **Bounds** with `extends` and `super` control which types are allowed when using generics.

