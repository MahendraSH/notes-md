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