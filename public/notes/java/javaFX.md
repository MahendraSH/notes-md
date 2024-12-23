
### **14. JavaFX and GUI Programming**

JavaFX is a powerful framework for building graphical user interfaces (GUIs) in Java applications. It provides a rich set of APIs for creating visually appealing and interactive user interfaces, making it easier to build desktop applications with Java.

---

### **1. JavaFX Basics**

JavaFX is an alternative to Swing for creating GUI applications in Java. It includes a comprehensive set of libraries and tools to design and manage the user interface, animations, and multimedia. The basic components of JavaFX applications are:

- **Stage**: The top-level container for a JavaFX application (equivalent to a window).
- **Scene**: Contains all the graphical elements (UI components) and is associated with a stage.
- **Nodes**: These are the building blocks of the JavaFX UI. A node can be a control (like a button or text field) or a container (like a pane).

#### **Basic Structure of a JavaFX Application**:
A basic JavaFX application extends the `Application` class and overrides the `start()` method to set up the user interface.

**Example**:
```java
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.stage.Stage;

public class JavaFXExample extends Application {
    @Override
    public void start(Stage primaryStage) {
        // Create a button
        Button btn = new Button("Click Me");
        
        // Set up the scene with the button
        Scene scene = new Scene(btn, 300, 200);
        
        // Set the title of the window
        primaryStage.setTitle("JavaFX Example");
        
        // Set the scene for the stage (window)
        primaryStage.setScene(scene);
        
        // Display the window
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);  // Launch the application
    }
}
```
In this example:
- The `start()` method sets up the UI and shows the window.
- The `Button` is added to the scene, and the scene is set for the stage.

---

### **2. Event Handling in JavaFX**

Event handling is essential for making your JavaFX application interactive. JavaFX provides an event-driven programming model, where actions such as button clicks or mouse movements trigger events that can be handled using event listeners.

#### **Event Handling Mechanism**:
JavaFX uses event handlers to respond to user actions like clicking a button or moving the mouse. Event handlers can be attached to nodes (such as buttons, text fields, etc.).

##### **Common Event Types**:
- **ActionEvent**: Triggered when a button or other action control is clicked.
- **MouseEvent**: Triggered by mouse actions (like clicking, moving the mouse).
- **KeyEvent**: Triggered by keyboard actions (like pressing keys).
- **WindowEvent**: Triggered by actions like closing the window.

#### **Handling Button Click (ActionEvent)**:
To handle an action event, you can set an event handler on a button using the `setOnAction()` method.

**Example**:
```java
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;

public class ButtonEventExample extends Application {
    @Override
    public void start(Stage primaryStage) {
        // Create a button
        Button btn = new Button("Click Me");
        
        // Set an event handler for the button click event
        btn.setOnAction(e -> System.out.println("Button clicked!"));
        
        // Set up the layout and scene
        StackPane root = new StackPane();
        root.getChildren().add(btn);
        Scene scene = new Scene(root, 300, 250);
        
        // Set the stage
        primaryStage.setTitle("Event Handling Example");
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
```
In this example:
- The `setOnAction()` method listens for a button click and runs the provided lambda expression when the button is clicked.

#### **Handling MouseEvent**:
You can handle mouse-related events like clicking or moving the mouse.

**Example (Mouse Click Event)**:
```java
btn.setOnMouseClicked(e -> {
    System.out.println("Mouse clicked at: " + e.getX() + ", " + e.getY());
});
```

#### **Handling KeyEvent**:
You can capture keyboard events like key presses.

**Example (Key Press Event)**:
```java
scene.setOnKeyPressed(e -> {
    System.out.println("Key pressed: " + e.getText());
});
```

---

### **3. Creating GUIs in JavaFX**

JavaFX provides a wide range of UI components that can be used to create rich graphical user interfaces. These components can be arranged in layouts, styled with CSS, and made interactive using event handling.

#### **Common JavaFX UI Controls**:
- **Button**: A clickable button that triggers an action.
- **Label**: Displays text.
- **TextField**: A single-line text input field.
- **TextArea**: A multi-line text input field.
- **ComboBox**: A dropdown menu for selecting from a list of options.
- **CheckBox**: A control that allows the user to select or deselect an option.
- **RadioButton**: A control for selecting one option from a group of choices.

#### **Layouts in JavaFX**:
JavaFX uses different layout managers to arrange UI components within a container.

- **HBox**: Arranges elements in a horizontal row.
- **VBox**: Arranges elements in a vertical column.
- **GridPane**: Arranges elements in a grid of rows and columns.
- **StackPane**: Stacks elements on top of each other.
- **BorderPane**: Divides the area into five regions (top, left, right, bottom, center).

#### **Example of a Simple Form**:
```java
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

public class SimpleForm extends Application {
    @Override
    public void start(Stage primaryStage) {
        // Create UI components
        Label nameLabel = new Label("Enter your name:");
        TextField nameField = new TextField();
        Button submitButton = new Button("Submit");

        // Event handler for the submit button
        submitButton.setOnAction(e -> {
            String name = nameField.getText();
            System.out.println("Hello, " + name);
        });

        // Layout the components
        VBox layout = new VBox(10);
        layout.getChildren().addAll(nameLabel, nameField, submitButton);

        // Set up the scene and stage
        Scene scene = new Scene(layout, 300, 200);
        primaryStage.setTitle("Simple Form Example");
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
```
In this example:
- A simple form is created with a `Label`, `TextField`, and `Button`.
- The form submits the user's name and prints it to the console.

---

### **Key Points to Remember:**

- **JavaFX** is used to create rich graphical user interfaces for desktop applications.
- **Stage** represents the window, and **Scene** contains the UI components in a JavaFX application.
- **Event handling** is done by setting event handlers (e.g., `setOnAction()` for buttons, `setOnMouseClicked()` for mouse events).
- JavaFX includes various **UI controls** such as `Button`, `TextField`, `Label`, `ComboBox`, and many others to create interactive forms.
- **Layouts** like `VBox`, `HBox`, `GridPane`, and `BorderPane` are used to arrange UI components.
