Here are the notes for **Networking in Java**:

---

### **12. Networking in Java**

Java provides a powerful set of APIs for networking, allowing you to create both client and server applications that can communicate over the network. Java’s networking capabilities are built around the **Socket** class and the **URL** class, which enable easy communication between applications over protocols like TCP and HTTP.

---

### **1. Sockets and Servers**

In Java, sockets are used for communication between computers over a network. A socket is an endpoint for sending or receiving data across the network. Java provides two primary classes for socket-based communication:

- **Socket**: Used for client-side communication.
- **ServerSocket**: Used for server-side communication.

#### **Socket Programming**:
A socket connection allows two machines to communicate by sending and receiving data. A client creates a socket to connect to the server, and the server listens for incoming connections on a specific port.

#### **Creating a Server**:
The **ServerSocket** class is used to create a server that listens for incoming client connections.

- **Example of a Simple Server**:
  ```java
  import java.net.*;
  import java.io.*;

  public class Server {
      public static void main(String[] args) {
          try (ServerSocket serverSocket = new ServerSocket(12345)) {
              System.out.println("Server is waiting for a connection...");
              Socket socket = serverSocket.accept();  // Accept client connection

              // Create I/O streams for communication
              BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
              PrintWriter writer = new PrintWriter(socket.getOutputStream(), true);

              // Read data from the client and respond
              String message = reader.readLine();
              System.out.println("Received from client: " + message);
              writer.println("Hello from server!");

              // Close connections
              socket.close();
          } catch (IOException e) {
              e.printStackTrace();
          }
      }
  }
  ```

#### **Creating a Client**:
The **Socket** class is used to create a client that connects to the server.

- **Example of a Simple Client**:
  ```java
  import java.net.*;
  import java.io.*;

  public class Client {
      public static void main(String[] args) {
          try (Socket socket = new Socket("localhost", 12345)) {  // Connect to the server
              // Create I/O streams for communication
              BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
              PrintWriter writer = new PrintWriter(socket.getOutputStream(), true);

              // Send a message to the server
              writer.println("Hello from client!");

              // Read the server’s response
              String response = reader.readLine();
              System.out.println("Received from server: " + response);

              // Close the connection
              socket.close();
          } catch (IOException e) {
              e.printStackTrace();
          }
      }
  }
  ```

#### **Key Methods in Socket and ServerSocket**:
- **ServerSocket**:
  - `accept()`: Waits for a client to make a connection.
- **Socket**:
  - `getInputStream()`: Returns an input stream to read data from the server.
  - `getOutputStream()`: Returns an output stream to send data to the server.

---

### **2. URL and HTTP Connections**

Java also provides the **URL** and **HttpURLConnection** classes for working with HTTP requests and responses, enabling client-server communication over the internet.

#### **URL Class**:
The **URL** class represents a URL (Uniform Resource Locator) and provides methods for accessing the components of a URL, such as the protocol, host, and port.

- **Example of Using URL**:
  ```java
  import java.net.*;

  public class URLExample {
      public static void main(String[] args) {
          try {
              URL url = new URL("https://www.example.com");
              System.out.println("Protocol: " + url.getProtocol());
              System.out.println("Host: " + url.getHost());
              System.out.println("Port: " + url.getPort());
              System.out.println("Path: " + url.getPath());
          } catch (MalformedURLException e) {
              e.printStackTrace();
          }
      }
  }
  ```

#### **HttpURLConnection**:
The **HttpURLConnection** class allows you to send HTTP requests and read responses from a URL. This is commonly used to communicate with web services via the HTTP protocol.

- **Example of Using HttpURLConnection**:
  ```java
  import java.net.*;
  import java.io.*;

  public class HttpURLConnectionExample {
      public static void main(String[] args) {
          try {
              URL url = new URL("https://jsonplaceholder.typicode.com/posts");
              HttpURLConnection connection = (HttpURLConnection) url.openConnection();

              // Set request method to GET
              connection.setRequestMethod("GET");
              connection.setConnectTimeout(5000);
              connection.setReadTimeout(5000);

              // Get the response code
              int responseCode = connection.getResponseCode();
              System.out.println("Response Code: " + responseCode);

              // Read the response
              BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
              String inputLine;
              StringBuilder response = new StringBuilder();
              while ((inputLine = reader.readLine()) != null) {
                  response.append(inputLine);
              }
              reader.close();

              // Print the response
              System.out.println(response.toString());

          } catch (IOException e) {
              e.printStackTrace();
          }
      }
  }
  ```

#### **Key Methods in HttpURLConnection**:
- **`setRequestMethod(String method)`**: Sets the HTTP method (e.g., GET, POST).
- **`getResponseCode()`**: Returns the HTTP response code (e.g., 200 OK, 404 Not Found).
- **`getInputStream()`**: Gets the input stream to read the response from the server.

---

### **Key Points to Remember:**

- **Sockets** in Java provide the basic mechanism for communication between client and server using TCP/IP. `ServerSocket` is used by the server to accept incoming client connections, and `Socket` is used by the client to connect to the server.
- **URL** class is used to represent and manipulate URLs, enabling access to the components of a URL such as protocol, host, path, and query.
- **HttpURLConnection** is used to send HTTP requests and receive responses, enabling interaction with web servers and APIs over HTTP.
- Java networking classes allow both blocking (synchronous) and non-blocking (asynchronous) communication.
- Java networking API supports both simple socket communication and HTTP communication, making it versatile for a wide range of applications.
