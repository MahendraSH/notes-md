
# Classification Method:

## The importance of proper classification,

- problems of classification, and classification is fundamentally a problem of finding sameness. When we classify, we seek to group things that have a common
  structure or exhibit a common behavior.

- Classification helps us to identify generalization, specialization, and aggregation
  hierarchies among classes. By recognizing the common patterns of interaction
  among objects, we come to invent the mechanisms that serve as the soul of our
  implementation. Classification also guides us in making decisions about modularization. We may choose to place certain classes and objects together in the same
  module or in different modules, depending on the sameness we find among these
  declarations. Coupling and cohesion also indicate a type of sameness. Classification also plays a role in allocating processes to processors. We place certain processes together in the same processor or different processors, depending on
  packaging, performance, or reliability concerns


### The Difficulty of Classification
- The fact that intelligent classification is difficult is hardly new information. Since 
there are parallels to the same problems in object-oriented design

- The best software designs look simple, but as experience shows, 
it takes a lot of hard work to design a simple architecture

- The Incremental and Iterative Nature of 
Classification

- in software engineering, “The development of individual abstractions often follows a common pattern. First, problems are solved ad hoc. As experience accumulates, some solutions turn out to work better than others, and a sort of folklore 
is passed informally from person to person. Eventually, the useful solutions are understood more systematically, and they are codified and analyzed. This enables
the development of models that support automatic implementation and theories
that allow the generalization of the solution. This in turn enables a more sophisticated level of practice and allows us to tackle harder problems—which we often 
approach ad hoc, starting the cycle over again

- The incremental and iterative nature of classification directly impacts the construction of class and object hierarchies in the design of a complex software system. In practice, it is common to assert a certain class structure early in a design 
and then revise this structure over time. At later stages in the design, once clients
have been built that use this structure, we will obtain insights as to the quality of 
our classification. On the basis of this experience, we may decide to create new 
subclasses from existing ones (derivation). We may split a large class into several 
smaller ones (factorization), or create one larger class by uniting smaller ones
(composition). Occasionally, we may even discover previously unrecognized
commonality and proceed to devise a new class (abstraction)

- First, there is no such thing as a “perfect” classification, although certainly
some classifications are better than others

- Any classification is
relative to the perspective of the observer doing the classification. Second, intelligent classification requires a tremendous amount of creative insight

# Package diagram

- Provides clarity and understanding in a complex systems development
- Supports concurrent model use by multiple users
- Supports version control
- Provides abstraction at multiple levels—from systems to classes in a
  component
- Provides encapsulation and containment; supports modularity

## The essential elements of a package diagram are packages, their visibility, and their dependencies.

## Essentials: The Package Notatio

- ## The Package Notation for Contained Element

  ![Alt text](https://notes-mds.vercel.app/notes/oomd/images/image-14.png)

## Essentials: Visibility of Elements

- Public (+) Visible to elements within its containing package, including
  nested packages, and to external elements
- Private (-) Visible only to elements within its containing package and to
  nested package

  ![Alt text](https://notes-mds.vercel.app/notes/oomd/images/image-15.png)

## Essentials: The Dependency Relationship

![Alt text](https://notes-mds.vercel.app/notes/oomd/images/image-16.png)

![Alt text](https://notes-mds.vercel.app/notes/oomd/images/image-17.png)

## **Types of replaction**

![Alt text](https://notes-mds.vercel.app/notes/oomd/images/image-18.png)

![Alt text](https://notes-mds.vercel.app/notes/oomd/images/image-19.png)

## The Package Notation Used for Partitioning

![Alt text](https://notes-mds.vercel.app/notes/oomd/images/image-20.png)

# Component Diagrams

## The essential elements of a component diagram are components, their interfaces, and their realizations

## The Component Notation for EnvironmentalControlSystem

![Alt text](https://notes-mds.vercel.app/notes/oomd/images/image-22.png)

## The Component Notation with Interface Grouping

![Alt text](https://notes-mds.vercel.app/notes/oomd/images/image-23.png)

## provider( ball ) and require (socket )

- the ball-and-socket notation is used to specify the required and
  provided interfaces of each of the components. The interfaces between the components are called assembly connectors; they are also known as interface connectors. Though the assembly connectors are shown in the ball-and-socket notation

![Alt text](https://notes-mds.vercel.app/notes/oomd/images/image-21.png)

## Essentials: Component Interface
![Alt text](https://notes-mds.vercel.app/notes/oomd/images/image-24.png)
![Alt text](https://notes-mds.vercel.app/notes/oomd/images/image-25.png)


## Essentials: Component relizations 
![Alt text](https://notes-mds.vercel.app/notes/oomd/images/image-26.png)

![Alt text](https://notes-mds.vercel.app/notes/oomd/images/image-27.png)

ball -` <<realizes >> <<aquires>>`
scoket - `<<uses >> --uses-->`

# deployment diagram

# # The three essential elements of a deployment diagram are artifacts, nodes, and their connections

##  The Artifact Notatio
it can use `<< (uses , manifestes ---------------->) ,( relatises---------|> )   >>`
![Alt text](https://notes-mds.vercel.app/notes/oomd/images/image-28.png)

## The Node Notation
![Alt text](https://notes-mds.vercel.app/notes/oomd/images/image-29.png)

## connections
![Alt text](https://notes-mds.vercel.app/notes/oomd/images/image-30.png)