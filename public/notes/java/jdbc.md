Here are the notes for **Database Connectivity (JDBC)**:

---

### **13. Database Connectivity (JDBC)**

Java Database Connectivity (JDBC) is a standard API that allows Java applications to interact with databases. It provides methods to query, update, and manage data stored in relational databases.

JDBC allows Java applications to connect to various databases like MySQL, Oracle, PostgreSQL, and more. It is designed to make database interactions more efficient by providing an easy-to-use interface for working with SQL databases.

---

### **1. Connecting Java to Databases**

To connect a Java application to a database, you need to follow these general steps:
1. **Load the Database Driver**: The JDBC driver enables Java to communicate with the database.
2. **Establish a Connection**: Use the `DriverManager.getConnection()` method to create a connection to the database.
3. **Create a Statement**: This is used to execute SQL queries.
4. **Execute Queries**: Use the statement object to execute SQL queries.
5. **Process Results**: If executing a SELECT query, process the result set.
6. **Close Resources**: Close the connection and other resources like `Statement` and `ResultSet` after use.

#### **Example: Establishing a Connection to a MySQL Database**:
```java
import java.sql.*;

public class DatabaseConnectionExample {
    public static void main(String[] args) {
        try {
            // Step 1: Load the database driver (optional in recent JDBC versions)
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Step 2: Establish the connection to the database
            Connection connection = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/mydatabase", "username", "password");

            // Step 3: Create a statement
            Statement statement = connection.createStatement();

            // Step 4: Execute a query
            ResultSet resultSet = statement.executeQuery("SELECT * FROM users");

            // Step 5: Process the result set
            while (resultSet.next()) {
                System.out.println("ID: " + resultSet.getInt("id"));
                System.out.println("Name: " + resultSet.getString("name"));
            }

            // Step 6: Close resources
            resultSet.close();
            statement.close();
            connection.close();

        } catch (SQLException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
```
In this example:
- The database connection string (`jdbc:mysql://localhost:3306/mydatabase`) contains the database URL, username, and password.
- A `Statement` is used to execute the query, and the results are processed using a `ResultSet`.

---

### **2. Executing Queries**

In JDBC, queries can be executed using **Statement**, **PreparedStatement**, or **CallableStatement** objects.

#### **Using Statement**:
- **Statement** is used to execute SQL queries without parameters.
- It is ideal for running static SQL queries that don’t change often.

**Example**:
```java
Statement stmt = connection.createStatement();
ResultSet rs = stmt.executeQuery("SELECT * FROM employees");
```

#### **Using PreparedStatement**:
- **PreparedStatement** is used for executing SQL queries that involve parameters (e.g., INSERT, UPDATE, DELETE).
- It is more efficient and secure than `Statement` because it allows pre-compilation of SQL queries and protects against SQL injection attacks.

**Example**:
```java
String query = "INSERT INTO users (name, email) VALUES (?, ?)";
PreparedStatement pstmt = connection.prepareStatement(query);
pstmt.setString(1, "John Doe");  // Set the first parameter
pstmt.setString(2, "john.doe@example.com");  // Set the second parameter
pstmt.executeUpdate();  // Execute the update
```

#### **Using CallableStatement**:
- **CallableStatement** is used to execute stored procedures in the database.
- It is useful when you need to call a stored procedure that performs multiple operations.

**Example**:
```java
CallableStatement cstmt = connection.prepareCall("{call my_procedure(?, ?)}");
cstmt.setInt(1, 100);
cstmt.setString(2, "example");
cstmt.execute();
```

---

### **3. Prepared Statements**

**PreparedStatement** is a subclass of **Statement** and is used to execute precompiled SQL statements with parameters. It provides several benefits over a regular Statement:

- **Performance**: Prepared statements are more efficient when the same query is executed repeatedly.
- **Security**: Prepared statements prevent SQL injection attacks by automatically escaping input data.

#### **Advantages of Prepared Statements**:
1. **Precompiled SQL**: The SQL query is precompiled, improving performance, especially for repeated executions.
2. **Parameterized Queries**: Prepared statements use placeholders (`?`) for input values, which helps prevent SQL injection.
3. **Cleaner Code**: Parameterized queries make code more readable and easier to maintain.

#### **Example**:
```java
String sql = "UPDATE users SET email = ? WHERE id = ?";
PreparedStatement pstmt = connection.prepareStatement(sql);

// Set the parameters
pstmt.setString(1, "new.email@example.com");
pstmt.setInt(2, 1);

// Execute the update
pstmt.executeUpdate();
```

#### **Using Batch Processing**:
Prepared statements also support batch processing, where you can add multiple SQL statements to a batch and execute them at once. This improves performance by reducing the number of database round trips.

**Example**:
```java
String sql = "INSERT INTO users (name, email) VALUES (?, ?)";
PreparedStatement pstmt = connection.prepareStatement(sql);

// Adding multiple inserts to the batch
pstmt.setString(1, "Alice");
pstmt.setString(2, "alice@example.com");
pstmt.addBatch();

pstmt.setString(1, "Bob");
pstmt.setString(2, "bob@example.com");
pstmt.addBatch();

// Execute the batch
pstmt.executeBatch();
```

---

### **Key Points to Remember:**

- **JDBC** allows Java applications to interact with relational databases, enabling you to run SQL queries, update records, and process results.
- **Connection**: You establish a connection to the database using `DriverManager.getConnection()`.
- **Statement**: Used for executing SQL queries without parameters.
- **PreparedStatement**: Used for executing SQL queries with parameters, improving performance and security.
- **CallableStatement**: Used for executing stored procedures.
- **Batch Processing**: Prepared statements support batch processing, which improves performance when executing multiple queries.

---

These notes give a basic understanding of **JDBC** and how to use it for database connectivity. Let me know if you need more details or specific examples!