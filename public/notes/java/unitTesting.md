Here are concise notes for **Unit Testing in Java**, covering **JUnit Basics**, **Mocking with Mockito**, and **Writing Test Cases**:

---

### **Unit Testing in Java**

Unit testing is the practice of testing individual components (units) of code to ensure they work correctly. In Java, **JUnit** is the most commonly used framework for writing and running tests, while **Mockito** is used for mocking dependencies.

---

### **1. JUnit Basics**

**JUnit** is a framework that supports writing and running tests in Java. It helps in ensuring that your code works as expected.

#### **Key Concepts**:
- **Test Class**: A class that contains test methods.
- **Test Method**: A method annotated with `@Test` that performs the actual testing.
- **Assertions**: Used to verify that the expected result matches the actual result.
- **Test Lifecycle**: The lifecycle includes setup (`@Before`), cleanup (`@After`), and tests.

#### **JUnit Annotations**:
- `@Test`: Marks a method as a test case.
- `@Before`: Runs before each test method, often used for setup.
- `@After`: Runs after each test method, used for cleanup.
- `@BeforeClass`: Runs once before all tests, used for setup that is expensive (like database connections).
- `@AfterClass`: Runs once after all tests, used for cleanup (like closing database connections).
- `@Ignore`: Skips a test method (useful for temporarily disabling tests).

#### **Example of a Simple Test Case**:
```java
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {
    
    @Test
    public void testAdd() {
        Calculator calculator = new Calculator();
        int result = calculator.add(2, 3);
        assertEquals(5, result);
    }
}
```
- In the above example, `assertEquals` is an assertion method that checks if the expected result is equal to the actual result.

---

### **2. Mocking with Mockito**

**Mockito** is a framework that helps in creating mock objects for unit testing. Mocks are useful when testing a unit in isolation, especially when the unit depends on external resources or services that you do not want to call during testing.

#### **Key Features of Mockito**:
- **Mocking Dependencies**: Mockito allows you to mock dependencies of the class under test.
- **Stubbing**: You can define behavior for mock objects.
- **Verifying**: You can verify that certain methods were called on a mock object.

#### **Basic Mockito Example**:
```java
import static org.mockito.Mockito.*;
import org.junit.Test;

public class UserServiceTest {
    
    @Test
    public void testGetUser() {
        // Create mock object of UserRepository
        UserRepository mockRepo = mock(UserRepository.class);
        
        // Stub the mock behavior
        when(mockRepo.getUserById(1)).thenReturn(new User(1, "John"));
        
        UserService userService = new UserService(mockRepo);
        User user = userService.getUser(1);
        
        assertEquals("John", user.getName());
    }
}
```
- **`mock()`**: Creates a mock object of a class.
- **`when().thenReturn()`**: Stubs the behavior of the mock object.
- **`verify()`**: Verifies that certain methods were called on the mock object.

#### **Mockito Verifying Example**:
```java
verify(mockRepo).getUserById(1); // Verifies that the method was called
```

---

### **3. Writing Test Cases**

Writing effective unit tests requires covering various scenarios to ensure the correctness of your code. Good test cases typically involve checking edge cases, error handling, and typical use cases.

#### **Best Practices for Writing Test Cases**:
- **Keep Tests Small and Focused**: Each test should verify a single piece of functionality.
- **Test for Edge Cases**: Consider boundary conditions and exceptional cases.
- **Use Descriptive Names**: Test method names should describe what they are testing.
- **Set Up and Clean Up Properly**: Use `@Before` and `@After` to set up and clean up resources.
- **Use Assertions**: Common assertions in JUnit include:
    - `assertEquals(expected, actual)`
    - `assertTrue(condition)`
    - `assertFalse(condition)`
    - `assertNotNull(object)`
    - `assertNull(object)`

#### **Example of Testing Multiple Conditions**:
```java
@Test
public void testCalculatorOperations() {
    Calculator calculator = new Calculator();
    
    // Test addition
    assertEquals(5, calculator.add(2, 3));
    
    // Test subtraction
    assertEquals(1, calculator.subtract(3, 2));
    
    // Test multiplication
    assertEquals(6, calculator.multiply(2, 3));
    
    // Test division
    assertEquals(2, calculator.divide(6, 3), 0);
}
```

#### **Testing for Exceptions**:
You can test for expected exceptions using `@Test(expected = Exception.class)` or `assertThrows`:
```java
@Test(expected = ArithmeticException.class)
public void testDivideByZero() {
    Calculator calculator = new Calculator();
    calculator.divide(1, 0);
}
```

---

### **Key Takeaways**:
- **JUnit** is the standard framework for writing tests in Java, with annotations like `@Test`, `@Before`, and `@After`.
- **Mockito** is a mocking framework used to isolate the unit under test by mocking external dependencies.
- **Writing Test Cases** involves setting up tests, asserting expected behavior, handling exceptions, and following best practices for test coverage.

By writing effective unit tests, you ensure your code is reliable, maintainable, and less prone to bugs.

---

Let me know if you need more detailed examples or explanations!