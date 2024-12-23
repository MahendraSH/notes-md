Here are concise notes for **Design Patterns** including **Singleton**, **Factory**, **Observer**, and **Builder** patterns:

---

### **Design Patterns**

Design patterns are general reusable solutions to common problems in software design. They provide templates for solving particular design issues in object-oriented systems.

---

### **1. Singleton Pattern**

The **Singleton** pattern ensures that a class has only one instance and provides a global point of access to it.

#### **Key Points**:
- **Single Instance**: Guarantees that only one instance of the class is created.
- **Global Access**: Provides a way to access that instance globally.
- **Lazy Initialization**: The instance is created only when needed.

#### **When to Use**:
- When you need to control access to a shared resource (like a database connection).
- When only one instance of a class should exist across the application.

#### **Example**:
```java
public class Singleton {
    private static Singleton instance;
    
    private Singleton() {} // Private constructor to prevent instantiation
    
    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
```
- The `getInstance()` method ensures only one instance of the `Singleton` class is created.

---

### **2. Factory Pattern**

The **Factory** pattern defines an interface for creating objects, but it allows subclasses to alter the type of objects that will be created.

#### **Key Points**:
- **Object Creation**: Defines an interface for creating an object but allows subclasses to implement the actual creation.
- **Loose Coupling**: The client doesn't need to know the exact class that needs to be instantiated, it just needs to call the factory method.

#### **When to Use**:
- When the exact type of the object isn’t known until runtime.
- When you want to delegate the instantiation logic to a factory class.

#### **Example**:
```java
interface Vehicle {
    void create();
}

class Car implements Vehicle {
    public void create() {
        System.out.println("Car created");
    }
}

class Bike implements Vehicle {
    public void create() {
        System.out.println("Bike created");
    }
}

class VehicleFactory {
    public static Vehicle createVehicle(String type) {
        if (type.equals("car")) {
            return new Car();
        } else if (type.equals("bike")) {
            return new Bike();
        }
        return null;
    }
}
```
- The `VehicleFactory` class creates instances of `Car` or `Bike` based on the input.

---

### **3. Observer Pattern**

The **Observer** pattern defines a one-to-many dependency between objects. When one object changes state, all dependent objects are notified and updated automatically.

#### **Key Points**:
- **Loose Coupling**: The observer pattern allows the subject (the object being observed) and observers (objects dependent on it) to be loosely coupled.
- **Real-time Updates**: Useful for scenarios where multiple objects need to be updated when a state change occurs (e.g., in GUI applications or event handling systems).

#### **When to Use**:
- When one object’s state change should notify multiple dependent objects.
- Common in event-driven systems, such as user interface design or monitoring systems.

#### **Example**:
```java
import java.util.ArrayList;
import java.util.List;

interface Observer {
    void update(String message);
}

class ConcreteObserver implements Observer {
    private String name;
    
    public ConcreteObserver(String name) {
        this.name = name;
    }

    @Override
    public void update(String message) {
        System.out.println(name + " received update: " + message);
    }
}

class Subject {
    private List<Observer> observers = new ArrayList<>();
    
    public void addObserver(Observer observer) {
        observers.add(observer);
    }

    public void notifyObservers(String message) {
        for (Observer observer : observers) {
            observer.update(message);
        }
    }
}
```
- The `Subject` notifies all registered `Observers` whenever there is a state change.

---

### **4. Builder Pattern**

The **Builder** pattern is used to construct complex objects by separating the construction process from the final representation.

#### **Key Points**:
- **Step-by-Step Construction**: Allows objects to be constructed step by step.
- **Immutable Objects**: Typically used when creating immutable objects with many parameters.
- **Fluent Interface**: Can be used to create objects in a readable and concise manner by chaining method calls.

#### **When to Use**:
- When you need to create complex objects with many parameters (especially when some parameters are optional).
- When you want to provide flexibility in constructing different representations of an object.

#### **Example**:
```java
class Computer {
    private String CPU;
    private String RAM;
    private String storage;

    private Computer(ComputerBuilder builder) {
        this.CPU = builder.CPU;
        this.RAM = builder.RAM;
        this.storage = builder.storage;
    }

    public static class ComputerBuilder {
        private String CPU;
        private String RAM;
        private String storage;

        public ComputerBuilder setCPU(String CPU) {
            this.CPU = CPU;
            return this;
        }

        public ComputerBuilder setRAM(String RAM) {
            this.RAM = RAM;
            return this;
        }

        public ComputerBuilder setStorage(String storage) {
            this.storage = storage;
            return this;
        }

        public Computer build() {
            return new Computer(this);
        }
    }
}
```
- The `ComputerBuilder` class allows you to construct a `Computer` object step by step. Each setter method returns the builder itself, enabling method chaining.

---

### **Key Takeaways**:
1. **Singleton Pattern**: Ensures a class has only one instance and provides global access to it.
2. **Factory Pattern**: Defines an interface for creating objects but lets subclasses decide the concrete class.
3. **Observer Pattern**: One object’s state change automatically updates dependent objects.
4. **Builder Pattern**: Allows step-by-step object construction, often for complex objects with many optional parameters.

These design patterns help create flexible, reusable, and maintainable object-oriented systems.
