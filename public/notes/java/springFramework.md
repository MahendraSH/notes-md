Here are detailed notes on **Spring Framework Basics**, covering **Spring Core**, **Spring Boot Overview**, and **Dependency Injection**:

---

### **Spring Framework Basics**

The **Spring Framework** is a comprehensive framework for building enterprise-grade Java applications. It simplifies development by providing a wide range of services such as Dependency Injection (DI), aspect-oriented programming (AOP), transaction management, and more.

---

### **1. Spring Core**

The **Spring Core** module provides the fundamental features required to build a Spring-based application. It contains features related to the container, bean configuration, and core utilities. The core module is the backbone of the Spring Framework.

#### **Key Concepts**:
- **Bean**: In Spring, a bean is an object that is managed by the Spring IoC (Inversion of Control) container. A bean is defined in a configuration file or through annotations.
- **IoC (Inversion of Control)**: IoC is the core concept of Spring. It refers to the inversion of the flow of control in a system. In traditional programming, the program controls the flow, but with IoC, the container controls the flow.
- **ApplicationContext**: The central interface to the Spring IoC container. It provides configuration and lifecycle management of beans.
- **BeanFactory**: The simplest container in Spring, providing basic functionality for bean management.

#### **Bean Definition**:
Beans can be defined in two primary ways:
1. **XML-based Configuration**: Beans are defined in an XML configuration file.
2. **Annotation-based Configuration**: Beans are defined using annotations like `@Component`, `@Service`, `@Repository`, etc.

**Example (XML-based Configuration)**:
```xml
<beans xmlns="http://www.springframework.org/schema/beans">
    <bean id="myBean" class="com.example.MyBean"/>
</beans>
```

**Example (Annotation-based Configuration)**:
```java
@Component
public class MyBean {
    public void showMessage() {
        System.out.println("Hello, Spring!");
    }
}
```

---

### **2. Spring Boot Overview**

**Spring Boot** is a specialized framework built on top of the Spring Framework that simplifies the process of setting up and running Spring applications. It provides pre-configured setups, a production-ready environment, and minimal setup for web, data access, and messaging components.

#### **Key Features of Spring Boot**:
- **Auto-Configuration**: Automatically configures application components based on the classpath. For example, if `spring-boot-starter-web` is in the classpath, Spring Boot automatically sets up Tomcat as the default embedded server and configures necessary components for a web application.
- **Embedded Server Support**: Spring Boot supports embedded web servers like Tomcat, Jetty, and Undertow, eliminating the need for deploying WAR files to an external server.
- **Spring Boot Starters**: Pre-configured templates that group dependencies required for common tasks (e.g., `spring-boot-starter-web` for web applications, `spring-boot-starter-data-jpa` for JPA support).
- **Spring Boot Actuator**: Provides production-ready features like health checks, metrics, and environment details for monitoring and managing Spring Boot applications.

#### **Spring Boot Project Setup**:
1. **Spring Initializr**: A web-based tool that allows you to generate a Spring Boot project with dependencies.
   - URL: [Spring Initializr](https://start.spring.io/)
   - You can select the desired dependencies like web, JPA, security, etc.
2. **Dependencies**: In Spring Boot, dependencies are often bundled as "starters," like:
   - `spring-boot-starter-web`: For building web applications.
   - `spring-boot-starter-data-jpa`: For JPA-based data access.

#### **Example of a Spring Boot Application**:
```java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}
```
- **`@SpringBootApplication`**: A combination of three annotations: `@EnableAutoConfiguration`, `@ComponentScan`, and `@Configuration`.
- **`SpringApplication.run()`**: Launches the Spring Boot application.

#### **Running a Spring Boot Application**:
You can run a Spring Boot application using the following:
- **From IDE**: Run the main method of the `@SpringBootApplication` class.
- **Command Line**: `mvn spring-boot:run` (if using Maven) or `./gradlew bootRun` (if using Gradle).
- **Packaging as JAR**: Spring Boot applications are typically packaged as executable JAR files.
```bash
mvn clean package
java -jar target/myapp.jar
```

---

### **3. Dependency Injection (DI)**

**Dependency Injection (DI)** is a design pattern used to implement **Inversion of Control (IoC)**. It allows the Spring container to manage the lifecycle of beans and their dependencies, rather than the application code managing them directly. This results in more flexible, testable, and maintainable code.

#### **Types of Dependency Injection**:
1. **Constructor Injection**: Dependencies are provided through the constructor of the class.
   - **Example**:
   ```java
   @Component
   public class MyService {
       private final MyRepository repository;
   
       // Constructor injection
       public MyService(MyRepository repository) {
           this.repository = repository;
       }
   
       public void doSomething() {
           repository.save();
       }
   }
   ```

2. **Setter Injection**: Dependencies are provided through setter methods.
   - **Example**:
   ```java
   @Component
   public class MyService {
       private MyRepository repository;
   
       // Setter injection
       @Autowired
       public void setRepository(MyRepository repository) {
           this.repository = repository;
       }
   
       public void doSomething() {
           repository.save();
       }
   }
   ```

3. **Field Injection**: Dependencies are injected directly into fields using `@Autowired`. This is the least recommended form as it makes testing harder and the code more tightly coupled.
   - **Example**:
   ```java
   @Component
   public class MyService {
       @Autowired
       private MyRepository repository;
   
       public void doSomething() {
           repository.save();
       }
   }
   ```

#### **Key Annotations for DI**:
- **`@Autowired`**: Marks a dependency that needs to be injected. Spring can inject beans automatically using this annotation.
- **`@Inject`**: Part of the JSR-330 specification and works similarly to `@Autowired`.
- **`@Qualifier`**: Used in combination with `@Autowired` to specify which bean to inject when there are multiple beans of the same type.
- **`@Component`, `@Service`, `@Repository`, `@Controller`**: These annotations mark a class as a Spring-managed bean.

#### **Example with `@Autowired`**:
```java
@Component
public class MyService {
    private final MyRepository repository;

    @Autowired
    public MyService(MyRepository repository) {
        this.repository = repository;
    }

    public void performAction() {
        repository.save();
    }
}
```

#### **Benefits of Dependency Injection**:
- **Loose Coupling**: The class does not manage its dependencies directly. The Spring container takes care of the instantiation and injection of dependencies.
- **Testability**: You can easily substitute real implementations with mocks or stubs during unit testing.
- **Maintainability**: Easier to modify and maintain code, as dependencies are injected rather than hardcoded.

#### **Dependency Injection Modes in Spring**:
- **Annotation-based Configuration**: Using annotations such as `@Autowired` and `@Component`.
- **XML-based Configuration**: Defining beans and dependencies in an XML configuration file.

---

### **Key Takeaways**:
- **Spring Core** is the foundation of the Spring Framework, providing essential features such as IoC and bean management.
- **Spring Boot** simplifies application setup with auto-configuration, embedded servers, and production-ready features.
- **Dependency Injection** in Spring reduces tight coupling by allowing Spring to manage the creation and injection of dependencies, making your application more flexible and easier to test.

---

Let me know if you need further clarification or examples!