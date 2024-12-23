### **Java I/O (Input/Output)**

Java I/O is essential for reading and writing data (characters, bytes, objects) from various sources like files, console input, network connections, and memory. It is divided into streams and offers many classes for different I/O operations.

---

### **1. File Handling**

File handling is the process of reading from and writing to files. Java provides a set of classes in the `java.io` package for this purpose.

#### **Important Classes:**

- **File**: Represents the file or directory in the filesystem. It provides methods for creating, deleting, renaming, and checking file properties.
- **FileReader**: A reader for reading the file contents as characters (part of the character stream).
- **FileWriter**: A writer for writing characters to a file (part of the character stream).
- **BufferedReader**: A wrapper for `FileReader` that adds buffering capabilities for efficient reading.
- **BufferedWriter**: A wrapper for `FileWriter` that adds buffering for efficient writing.

#### **Basic File Handling Example:**

```java
import java.io.*;

public class FileHandlingExample {
    public static void main(String[] args) {
        try {
            // Create a new file
            File file = new File("example.txt");
            if (!file.exists()) {
                file.createNewFile();
            }

            // Writing to a file
            FileWriter writer = new FileWriter(file);
            writer.write("Hello, world!");
            writer.close();

            // Reading from the file
            FileReader reader = new FileReader(file);
            int character;
            while ((character = reader.read()) != -1) {
                System.out.print((char) character);
            }
            reader.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

---

### **2. Byte and Character Streams**

Java provides two categories of streams:

#### **Byte Streams:**

- Handle **raw binary data** (like images, audio, and files).
- They are suitable for any I/O operations with binary data.
- **Base classes**: `InputStream` and `OutputStream`
- **Common classes**:
  - `FileInputStream`: Reads bytes from a file.
  - `FileOutputStream`: Writes bytes to a file.
  - `BufferedInputStream`: Reads bytes more efficiently with buffering.
  - `BufferedOutputStream`: Writes bytes more efficiently with buffering.

#### **Character Streams:**

- Handle **text data** (characters), automatically taking care of encoding and decoding.
- They are suited for reading and writing character data like text files.
- **Base classes**: `Reader` and `Writer`
- **Common classes**:
  - `FileReader`: Reads characters from a file.
  - `FileWriter`: Writes characters to a file.
  - `BufferedReader`: Reads characters efficiently using buffering.
  - `BufferedWriter`: Writes characters efficiently using buffering.

#### **Byte Stream Example:**

```java
import java.io.*;

public class ByteStreamExample {
    public static void main(String[] args) {
        try {
            FileInputStream fis = new FileInputStream("input.dat");
            FileOutputStream fos = new FileOutputStream("output.dat");

            int byteData;
            while ((byteData = fis.read()) != -1) {
                fos.write(byteData);
            }
            fis.close();
            fos.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

#### **Character Stream Example:**

```java
import java.io.*;

public class CharacterStreamExample {
    public static void main(String[] args) {
        try {
            FileReader reader = new FileReader("text.txt");
            BufferedReader bufferedReader = new BufferedReader(reader);

            String line;
            while ((line = bufferedReader.readLine()) != null) {
                System.out.println(line);
            }
            bufferedReader.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

---

### **3. Serialization and Deserialization**

#### **Serialization:**

Serialization is the process of converting an object into a byte stream. This is useful when you need to store an object (e.g., in a file or database) or transmit it over a network.

- An object can only be serialized if its class implements the `Serializable` interface.
- Java provides the `ObjectOutputStream` to serialize objects.

#### **Deserialization:**

Deserialization is the process of converting a byte stream back into a copy of the original object.

- Java provides the `ObjectInputStream` for deserialization.

#### **Serialization Example:**

```java
import java.io.*;

class Student implements Serializable {
    String name;
    int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

public class SerializationExample {
    public static void main(String[] args) {
        try {
            Student student = new Student("John", 20);

            // Serialize the object
            FileOutputStream fileOut = new FileOutputStream("student.ser");
            ObjectOutputStream out = new ObjectOutputStream(fileOut);
            out.writeObject(student);
            out.close();
            fileOut.close();
            System.out.println("Serialized data is saved in student.ser");
        } catch (IOException i) {
            i.printStackTrace();
        }
    }
}
```

#### **Deserialization Example:**

```java
import java.io.*;

class Student implements Serializable {
    String name;
    int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

public class DeserializationExample {
    public static void main(String[] args) {
        try {
            // Deserialize the object
            FileInputStream fileIn = new FileInputStream("student.ser");
            ObjectInputStream in = new ObjectInputStream(fileIn);
            Student student = (Student) in.readObject();
            in.close();
            fileIn.close();

            System.out.println("Deserialized Student...");
            System.out.println("Name: " + student.name);
            System.out.println("Age: " + student.age);
        } catch (IOException | ClassNotFoundException i) {
            i.printStackTrace();
        }
    }
}
```
