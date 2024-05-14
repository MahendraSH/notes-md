# Familiarize yourself with the commonly used containers (vector, list, map, set, etc.) and algorithms provided by the STL.

Certainly! The C++ Standard Template Library (STL) provides a rich set of containers and algorithms that simplify common programming tasks. Here's an overview of some commonly used containers and algorithms provided by the STL:

### Containers:

1. **Vector (`std::vector`)**:

   - Dynamic array that automatically adjusts its size.
   - Efficient for random access and insertion/removal at the end.

   ```cpp
   #include <vector>
   std::vector<int> vec = {1, 2, 3, 4, 5};
   ```

2. **List (`std::list`)**:

   - Doubly linked list.
   - Efficient for insertion/removal at any position.

   ```cpp
   #include <list>
   std::list<int> lst = {1, 2, 3, 4, 5};
   ```

3. **Map (`std::map`)**:

   - Associative container that stores key-value pairs.
   - Elements are sorted by key.

   ```cpp
   #include <map>
   std::map<std::string, int> m = {{"a", 1}, {"b", 2}, {"c", 3}};
   ```

4. **Set (`std::set`)**:

   - Associative container that stores unique elements in sorted order.

   ```cpp
   #include <set>
   std::set<int> s = {3, 1, 2, 4, 5};
   ```

5. **Queue (`std::queue`)**:

   - FIFO (First-In-First-Out) data structure.
   - Wrapper around `std::deque` or `std::list`.

   ```cpp
   #include <queue>
   std::queue<int> q;
   ```

6. **Stack (`std::stack`)**:
   - LIFO (Last-In-First-Out) data structure.
   - Wrapper around `std::deque` or `std::list`.
   ```cpp
   #include <stack>
   std::stack<int> stk;
   ```

### Algorithms:

1. **Sort (`std::sort`)**:

   - Sorts elements in ascending order.
   - Can be used with different containers or custom comparison functions.

   ```cpp
   #include <algorithm>
   std::sort(vec.begin(), vec.end());
   ```

2. **Find (`std::find`)**:

   - Finds the first occurrence of a value in a container.

   ```cpp
   #include <algorithm>
   auto it = std::find(vec.begin(), vec.end(), 3);
   ```

3. **Binary Search (`std::binary_search`)**:

   - Performs binary search on a sorted container.

   ```cpp
   #include <algorithm>
   bool found = std::binary_search(vec.begin(), vec.end(), 3);
   ```

4. **Reverse (`std::reverse`)**:

   - Reverses the order of elements in a container.

   ```cpp
   #include <algorithm>
   std::reverse(vec.begin(), vec.end());
   ```

5. **Transform (`std::transform`)**:

   - Applies a function to each element of a container and stores the result in another container.

   ```cpp
   #include <algorithm>
   std::transform(vec.begin(), vec.end(), vec.begin(), [](int x) { return x * 2; });
   ```

6. **Merge (`std::merge`)**:
   - Merges two sorted ranges into a single sorted range.
   ```cpp
   #include <algorithm>
   std::vector<int> merged;
   std::merge(vec1.begin(), vec1.end(), vec2.begin(), vec2.end(), std::back_inserter(merged));
   ```

These are just a few examples of the containers and algorithms provided by the STL. The STL offers a wide range of containers and algorithms to suit various programming needs, making C++ programming more efficient and productive.

---

# Practice using STL containers and algorithms in your programs.

Absolutely! Here's a simple example demonstrating the use of STL containers (vector) and algorithms (sort, find) in a program:

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    // Create a vector of integers
    std::vector<int> numbers = {5, 2, 8, 1, 3, 7, 4, 6};

    // Sort the numbers in ascending order
    std::sort(numbers.begin(), numbers.end());

    // Display the sorted numbers
    std::cout << "Sorted numbers: ";
    for (int num : numbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    // Find the position of number 3 in the sorted numbers
    auto it = std::find(numbers.begin(), numbers.end(), 3);
    if (it != numbers.end()) {
        std::cout << "Number 3 found at position: " << std::distance(numbers.begin(), it) + 1 << std::endl;
    } else {
        std::cout << "Number 3 not found" << std::endl;
    }

    return 0;
}
```

This program creates a vector of integers, sorts them in ascending order using `std::sort`, and then searches for the number 3 using `std::find`. Finally, it displays the sorted numbers and the position of number 3 if found.

Feel free to modify and expand upon this example to practice using other STL containers and algorithms in your programs!
