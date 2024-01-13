# Use cases Diagrma

- ## use cases
  ![Alt text](https://notes-mds.vercel.app/notes/oomd/image-1.png)
- ## actor
  ![Alt text](https://notes-mds.vercel.app/notes/oomd/image.png)
- ## connections
  ![Alt text](https://notes-mds.vercel.app/notes/oomd/image-2.png)
- ## : «include» and «extend» Relationship
  ![Alt text](https://notes-mds.vercel.app/notes/oomd/image-3.png)
- ## An Example Use Case Specification
  Let us look at an example for the use case Maintain Storage Tanks.
  Use Case Specification
- Use case name: Maintain Storage Tanks
- Use case purpose: This use case provides the ability to maintain the fill
  levels of the contents of the storage tanks. This use case allows the actor to
  maintain specific sets of water and nutrient tanks.
  Optimistic flow:
  A) Actor examines the levels of the storage tanks’ contents.
  B) Actor determines that tanks need to be refilled.
  C) Normal hydroponics system operation of storage tanks is suspended by
  the actor.
  D) Actor selects tanks and sets fill levels.
  For each selected tank, steps E through G are performed.
  E) If tank is heated, the system disables heaters.

1. Heaters reach safe temperature.
   F) The system fills tank.
   G) When tank is filled, if tank is heated, the system enables heaters.
1. Tank contents reach operating temperature.
   H) Actor resumes normal hydroponics system operation.
   Pragmatic flows:

- Conditions triggering alternate flow:
- Condition 1: There is insufficient material to fill tanks to the levels
  specified by the actor.

1. Alert actor regarding insufficient material available to meet tank
   setting. Show amount of material available.
2. Prompt actor to choose to end maintenance or reset fill levels.
3. If reset chosen, perform step D.
4. If end maintenance chosen, perform step H.
5. Else, perform step D2.
   Condition 2: . . .

## A Use Case Generalization

![Alt text](https://notes-mds.vercel.app/notes/oomd/image-4.png)

# Activity Diagrams

- ## Activity diagrams provide visual depictions of the flow of activities, whether in a system, business, workflow, or other process. These diagrams focus on the activities that are performed and who (or what) is responsible for the performance of those activities

.

- ## The elements of an activity diagram are action nodes, control nodes, and object nodes. There are three types of control nodes: initial and final (final nodes have two varieties, activity final and flow final), decision and merge, and fork and join.

## Initial and Final Nodes for a Simple Activity Diagra

![Alt text](https://notes-mds.vercel.app/notes/oomd/image-5.png)

## A Decision Nod

![Alt text](https://notes-mds.vercel.app/notes/oomd/image-6.png)

## A Merge Node with a Flow Final Nod

![Alt text](https://notes-mds.vercel.app/notes/oomd/image-7.png)

## An Activity Diagram with Partition

![Alt text](https://notes-mds.vercel.app/notes/oomd/image-8.png)

## An Activity Diagram with Object Node

![Alt text](https://notes-mds.vercel.app/notes/oomd/image-9.png)

# State Machine Diagrams.

## The two essential elements of a state machine diagram are states and state transitions

## Notations for Simple States

![Alt text](https://notes-mds.vercel.app/notes/oomd/image-10.png)

## Transitions and Events

![Alt text](https://notes-mds.vercel.app/notes/oomd/image-11.png)

![Alt text](https://notes-mds.vercel.app/notes/oomd/image-12.png)

![Alt text](https://notes-mds.vercel.app/notes/oomd/image-13.png)

# Sequence Diagrams,

![Alt text](https://notes-mds.vercel.app/notes/oomd/image-14.png)

# Interaction Overview Diagrams

- Interaction overview diagrams are a combination of activity diagrams and interaction diagrams  that are intended to provide an overview of the flow of control
  between interaction diagram elements. Though any type of interaction diagram
  (sequence, communication, or timing) may be used, the sequence diagram will
  likely be the most prevalent.

- The essential elements of the interaction overview diagram are the frames, the
  flow of control elements, and the interaction diagram elements.
