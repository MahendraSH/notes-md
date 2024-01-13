# Module-1

## SLE: The Inherent Complexity of Software

- **Software complexity**: Software can be complex in different ways than physical objects, and some of the complexity is arbitrary and not inherent to the problem domain.
- **Simple software systems**: These are applications that are built and used by one person, have a limited scope and lifespan, and are not very challenging to design or maintain.
- **Industrial-strength software**: These are applications that have a rich and diverse set of behaviors, interact with the physical world, handle large amounts of data, and require high performance and reliability. These are the types of software that interest us and pose significant challenges.

### Why Software Is Inherently Complex

The inherent complexity derives from four elements:

- the complexity of the problem domain,
- the difficulty of managing the development process,
- the flexibility possible through software,
- the problems of characterizing the behavior of discrete systems.

- ## the complexity of the problem domain,

  - **Inescapable Complexity**: Software problems often have many conflicting requirements that are hard to understand and satisfy, such as functionality, usability, performance, cost, etc.`( software performence )`

  - **Communication Gap**: Users and developers of software systems have different backgrounds and views on the problem and the solution, which makes it difficult to express and capture the requirements accurately and precisely. `(Communitcation gap)`

  - **Requirements Change**: Software requirements are not fixed, but evolve during the development process, as new insights and feedback emerge from the project. `(software maintenance)`

- ## the difficulty of managing the development process,

  - **Illusion of Simplicity**: Software developers try to hide the complexity of the problem and the solution by writing less code and reusing existing code. However, sometimes the requirements are too complex and demand a lot of new or novel code.`(code complexity) `
  - **Scale and Comprehension**: Software systems have grown in size and complexity over the years, making it impossible for one person to understand them fully. Software developers have to break down the system into smaller and meaningful modules, but still face the challenge of managing hundreds or thousands of them.`(lines of code 100 of millions)`
  - **Team Development**: Software development requires a team of developers, preferably as small as possible, to work together. However, team development poses difficulties in communication, coordination, and design integrity, especially if the team is spread across different locations.
    `(larger team more problems)`

- ## the flexibility possible through software,

  - **Software Flexibility**: Software developers can create any abstraction they want, unlike other industries that rely on physical materials and standards.`(any abstraction : any thing)`
  - **Software Primitives**: Software developers have to make their own basic components for their abstractions, which makes software development hard and time-consuming. `(starting from basic  compontes to  all the complex  components )`

- ## the problems of characterizing the behavior of discrete systems.

  - **Discrete vs Continuous Systems**: Discrete systems have a finite number of states, while continuous systems have an infinite number of states. Discrete systems are often unpredictable and unstable, while continuous systems are more reliable and smooth.`( continuous - predictable , Discrete - unpreditable )`
  - **Software as a Discrete System**: Software systems are discrete systems that run on digital computers. They have many variables, threads, and processes that determine their current state. Software systems can behave unexpectedly or incorrectly due to external events or design flaws.
    `(Software dev - unpredictable and full of flwas and incorrect and unexpected things )`

## the Five Attributes of a Complex System

Considering the nature of this complexity, we conclude that there are five
attributes common to all complex systems.

- **Hierarchic Structure**: Complex systems are often made up of smaller and simpler subsystems, which are also made up of even smaller subsystems, and so on. This hierarchic structure helps us understand and describe complex systems and their parts.`( Complex to simple by dividing it into smaller parts)`

- **Relative Primitives**: The choice of what components in a system are primitive is relatively arbitrary and depends on the perspective of the observer. Different observers may have different levels of abstraction for the same system.`(is a componet is premetive? -  depend on observer )`

- **Separation of Concerns**: Complex systems have stronger connections within their subsystems than between them. This means that the subsystems have different dynamics and behaviors that can be studied separately.`( subsystem - stronger contenction internally , then between subsystems)`

- **Common Patterns**: Complex systems are often made of a few types of subsystems that are arranged in different ways. These subsystems may share some common components or structures, such as cells or vascular systems.`(subsytems share  common componets or patters)`

- **Stable Intermediate Forms**: Complex systems evolve from simple systems that work, and they need stable intermediate forms to evolve faster. Complex systems that are designed from scratch do not work and need to be rebuilt from a simple system. Primitive objects in complex systems are not perfect and need to be improved over time. `( simple to complex must have statble intermediate  for faster  dev)`

---

# Module-2

## Key Abstractions and Mechanisms

- **Key abstractions** are classes or objects that define the problem domain and its boundaries.
- **Mechanisms** are structures that describe how objects collaborate to achieve a behavior or a requirement.
- Key abstractions and mechanisms can be identified through `discovery` (from domain experts) or **invention** (from designers).
- The choice of abstractions and mechanisms depends on the **`purpose`** and **`granularity`** of the application.

### Refining key abstractions

- **Refining key abstractions** involves evaluating, placing, and reorganizing them in the class and object hierarchies.
- **Evaluation** requires asking questions about the creation, destruction, and operations of the abstractions.
- **Placement** is an iterative and incremental process of finding the right level of abstraction for each abstraction.
- **Reorganization** is a common activity of factoring out or splitting up abstractions to improve the design.

### Naming key abstractions

- **Naming key abstractions** helps to capture their semantics and make the software more readable and understandable.
- **Objects** should be named with proper noun phrases, such as theSensor or shape.
- **Classes** should be named with common noun phrases, such as Sensor or Shape.
- **Names** should reflect the domain experts' terminology, whenever possible.
- **Modifier operations** should be named with active verb phrases, such as draw or moveLeft.
- **Selector operations** should imply a query or be named with verbs of the form “to be,” such as extentOf or isOpen.
- **Cosmetic style** of names is a matter of personal taste, but should be consistent within the program.

### Mechanisms

- **Mechanisms** are structures that describe how objects collaborate to achieve a behavior or a requirement.

- Mechanisms are **`design choices`** that depend on various factors, such as cost, reliability, and safety.

- Mechanisms **`define rules of behavior`** for the objects involved, and these rules should not be violated by other objects.

- Mechanisms are **`the soul of the design`**, and they require the use of scenarios to analyze how objects work together.
