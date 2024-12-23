# Collections Framework in Java

The Java Collections Framework provides a unified architecture for storing and manipulating groups of objects. It includes interfaces, implementations, and algorithms for handling data efficiently.

---

## List, Set, Map Interfaces

### List Interface
- **Definition:** A collection that allows ordered and duplicate elements.
- **Common Implementations:**
  - `ArrayList`
  - `LinkedList`

### Set Interface
- **Definition:** A collection that does not allow duplicate elements.
- **Common Implementations:**
  - `HashSet`
  - `TreeSet`

### Map Interface
- **Definition:** A collection that maps keys to values. Keys are unique, but values can be duplicate.
- **Common Implementations:**
  - `HashMap`
  - `TreeMap`

---

## ArrayList, LinkedList, HashSet, TreeSet, HashMap

### ArrayList
- **Features:**
  - Resizable array implementation.
  - Allows random access.
- **Example:**
  ```java
  import java.util.*;

  public class Main {
      public static void main(String[] args) {
          ArrayList<String> list = new ArrayList<>();
          list.add("Apple");
          list.add("Banana");
          list.add("Cherry");

          System.out.println(list);
      }
  }
  ```

### LinkedList
- **Features:**
  - Doubly linked list implementation.
  - Efficient for insertions and deletions.
- **Example:**
  ```java
  import java.util.*;

  public class Main {
      public static void main(String[] args) {
          LinkedList<String> list = new LinkedList<>();
          list.add("Dog");
          list.add("Cat");
          list.addFirst("Rabbit");

          System.out.println(list);
      }
  }
  ```

### HashSet
- **Features:**
  - Unordered collection of unique elements.
  - Backed by a hash table.
- **Example:**
  ```java
  import java.util.*;

  public class Main {
      public static void main(String[] args) {
          HashSet<String> set = new HashSet<>();
          set.add("Red");
          set.add("Green");
          set.add("Blue");

          System.out.println(set);
      }
  }
  ```

### TreeSet
- **Features:**
  - Sorted collection of unique elements.
  - Backed by a red-black tree.
- **Example:**
  ```java
  import java.util.*;

  public class Main {
      public static void main(String[] args) {
          TreeSet<String> set = new TreeSet<>();
          set.add("Yellow");
          set.add("Orange");
          set.add("Pink");

          System.out.println(set);
      }
  }
  ```

### HashMap
- **Features:**
  - Unordered collection of key-value pairs.
  - Backed by a hash table.
- **Example:**
  ```java
  import java.util.*;

  public class Main {
      public static void main(String[] args) {
          HashMap<Integer, String> map = new HashMap<>();
          map.put(1, "One");
          map.put(2, "Two");
          map.put(3, "Three");

          System.out.println(map);
      }
  }
  ```

---

## Iterators and Streams

### Iterators
- **Definition:** Objects that allow traversing through a collection.
- **Common Methods:**
  - `hasNext()` - Checks if more elements exist.
  - `next()` - Retrieves the next element.
  - `remove()` - Removes the current element.
- **Example:**
  ```java
  import java.util.*;

  public class Main {
      public static void main(String[] args) {
          ArrayList<String> list = new ArrayList<>();
          list.add("A");
          list.add("B");
          list.add("C");

          Iterator<String> iterator = list.iterator();
          while (iterator.hasNext()) {
              System.out.println(iterator.next());
          }
      }
  }
  ```

### Streams
- **Definition:** A sequence of elements that supports functional-style operations.
- **Common Operations:**
  - `filter()` - Filters elements based on a condition.
  - `map()` - Transforms elements.
  - `forEach()` - Iterates over elements.
- **Example:**
  ```java
  import java.util.*;
  import java.util.stream.*;

  public class Main {
      public static void main(String[] args) {
          List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
          numbers.stream()
              .filter(n -> n % 2 == 0)
              .forEach(System.out::println);
      }
  }
  ```

