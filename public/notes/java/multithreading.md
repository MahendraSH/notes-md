
### **8. Multithreading and Concurrency**

Multithreading is the ability of a CPU, or a single core in a multi-core processor, to provide multiple threads of execution concurrently. It allows efficient CPU utilization by performing multiple tasks simultaneously. Java provides built-in support for multithreading through the `java.lang.Thread` class and the `java.util.concurrent` package.

---

### **1. Thread Lifecycle**

A thread in Java has several states during its lifecycle:

1. **New (Born)**: A thread is created but not yet started. It is in the `new` state.
2. **Runnable**: A thread enters this state when it is ready to run and waiting for the CPU to execute it. It can move between `runnable` and `running` states.
3. **Running**: The thread is currently executing.
4. **Blocked**: A thread enters this state if it is waiting to acquire a lock on a resource.
5. **Waiting**: A thread is waiting for another thread to perform a specific action (e.g., `Thread.sleep()` or `Object.wait()`).
6. **Timed Waiting**: A thread is waiting for a specific amount of time (e.g., `Thread.sleep(milliseconds)`).
7. **Terminated (Dead)**: A thread has finished its execution or has been terminated. A thread cannot transition back to any other state after reaching the `terminated` state.

#### **Thread Lifecycle Diagram**:
```plaintext
New -> Runnable -> Running -> Blocked/Waiting/Timed Waiting -> Terminated
```

---

### **2. Creating and Managing Threads**

In Java, threads can be created and managed in two ways: by extending the `Thread` class or by implementing the `Runnable` interface.

#### **Creating a Thread by Extending the Thread Class**:
You can create a thread by extending the `Thread` class and overriding the `run()` method.

```java
class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("Thread is running.");
    }

    public static void main(String[] args) {
        MyThread thread = new MyThread();
        thread.start();  // Starts the thread
    }
}
```

#### **Creating a Thread by Implementing the Runnable Interface**:
You can also create a thread by implementing the `Runnable` interface and passing the instance to a `Thread` object.

```java
class MyRunnable implements Runnable {
    @Override
    public void run() {
        System.out.println("Thread is running via Runnable.");
    }

    public static void main(String[] args) {
        MyRunnable runnable = new MyRunnable();
        Thread thread = new Thread(runnable);
        thread.start();  // Starts the thread
    }
}
```

#### **Managing Threads**:
- **start()**: Begins the execution of the thread.
- **sleep(long millis)**: Causes the current thread to pause for the specified time.
- **join()**: Ensures that the current thread waits for another thread to finish before continuing.
- **interrupt()**: Interrupts the execution of a thread.

---

### **3. Synchronization**

In a multithreaded environment, multiple threads may try to access shared resources simultaneously. This can lead to data inconsistencies or race conditions. To prevent this, **synchronization** is used to control the access of shared resources.

#### **Synchronized Methods**:
You can synchronize methods by using the `synchronized` keyword. It ensures that only one thread can execute the method at a time for a given object.

```java
class Counter {
    private int count = 0;
    
    // Synchronized method
    public synchronized void increment() {
        count++;
    }
    
    public int getCount() {
        return count;
    }
}
```

#### **Synchronized Blocks**:
Instead of synchronizing the entire method, you can synchronize only the critical section using a block.

```java
class Counter {
    private int count = 0;

    public void increment() {
        synchronized (this) {
            count++;
        }
    }

    public int getCount() {
        return count;
    }
}
```

#### **Locks**:
Java also provides explicit locks like `ReentrantLock` (from `java.util.concurrent.locks`) for more complex synchronization and control.

```java
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

class Counter {
    private int count = 0;
    private final Lock lock = new ReentrantLock();

    public void increment() {
        lock.lock();  // Acquire the lock
        try {
            count++;
        } finally {
            lock.unlock();  // Release the lock
        }
    }

    public int getCount() {
        return count;
    }
}
```

---

### **4. Executors and Thread Pools**

Using thread pools allows you to manage and reuse a group of threads instead of creating new ones for every task. Java provides the **Executor** framework to manage thread pools and simplify thread management.

#### **Executor Interface**:
The `Executor` interface provides methods for executing tasks asynchronously.

- **execute()**: Used for executing tasks that don’t return a result.
- **submit()**: Submits a task for execution and returns a `Future` object for tracking the result.

#### **ExecutorService**:
The `ExecutorService` interface is an extension of `Executor` that adds methods for lifecycle management and task scheduling.

```java
import java.util.concurrent.*;

class Task implements Runnable {
    @Override
    public void run() {
        System.out.println("Task is running");
    }
}

public class ExecutorExample {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(2);
        
        // Submit tasks
        executor.submit(new Task());
        executor.submit(new Task());
        
        // Shutdown executor
        executor.shutdown();
    }
}
```

#### **Types of Thread Pools**:
- **Fixed Thread Pool**: A fixed number of threads are used to process tasks.
  ```java
  ExecutorService executor = Executors.newFixedThreadPool(10);
  ```

- **Cached Thread Pool**: Creates new threads as needed, but will reuse previously constructed threads when they are available.
  ```java
  ExecutorService executor = Executors.newCachedThreadPool();
  ```

- **Single Thread Executor**: Uses a single worker thread to process tasks sequentially.
  ```java
  ExecutorService executor = Executors.newSingleThreadExecutor();
  ```

- **Scheduled Thread Pool**: Used for scheduling tasks at fixed-rate or with fixed-delay intervals.
  ```java
  ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(1);
  scheduler.scheduleAtFixedRate(new Task(), 0, 1, TimeUnit.SECONDS);
  ```

---

### **Key Points to Remember:**

- Multithreading allows concurrent execution of tasks in Java.
- Threads can be created using `Thread` class or `Runnable` interface.
- Synchronization ensures thread safety when accessing shared resources.
- Executors and thread pools simplify thread management by reusing threads.
