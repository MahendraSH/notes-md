## introduction to microservices

- **need of microservices**
  Lets consider some applications like uber , netflix , amazon etc , these applications need be :

  - Highly available
  - Highly Scalable
  - Easy to maintain
  - Easy to Deploy
  - Independent of each other

  Lets Consider a **monolithic application** which has several features like :

  - Authentication
  - Authorization
  - Billing
  - Payment
  - Inventory
    these all features are in a single application in a monolithic application which is not :
  - maintainable
  - larger deployment times
  - load balancing is also a problem
  - huge application leading to complexity
  - and only one technology stack

  - **summery**
    - features needed in an application
    - disadvantages of monolithic application
    - why microservices are needed

- **what are microservice**

  - microservices are micro applications which are independent of each other and with each other using http protocols
  - microservices are distributed systems
  - we can convert a monolithic application into microservices using the concept of **microservices architecture** or we can develop microservices from scratch using **microservices framework**
  - **Characteristics of microservices**
    - independent development
    - independent deployment
    - independent maintainability
    - independent scaling
    - uses lightweight protocols like rest
    - independent monitored
    - highly organized and easy to deploy
    - support decentralized databases
    - support devops
  - **monolithic vs microservices**
    <!--table for monolithic vs microservices  -->
    | **Monolithic**                          | **Microservices**                  |
    | --------------------------------------- | ---------------------------------- |
    | single technology stack                 | multiple technology stacks         |
    | single database                         | multiple databases                 |
    | full testing of application is required | the changes service must be tested |
    | single process                          | multiple processes                 |
    | scale the entire application            | scale each microservice            |
    | redeploy the entire application         | redeploy each microservice         |
    | single point of failure                 | multiple points of failure         |
    | ---                                     | ---                                |
  - **Reason to choose microservices**
    - easy to deploy
    - small teams
    - loose coupling
    - domain driven development
    - easy to maintain
    - easy to scale
  - **which one to choose** :

    - microservices if you have good domain knowledge and want to build a complex application
    - monolithic if you have less domain knowledge and want to build a simple application

  - **microservices advantages and disadvantages**

    - **advantages**
      - easy to deploy
      - small teams
      - loose coupling
      - domain driven development
      - easy to maintain
      - easy to scale
    - **disadvantages**
      - complexity
      - high cost
      - high maintenance
      - performance issues

  - **Summary**
    - what are microservices
    - characteristics of microservices
    - monolithic vs microservices
    - reason to choose microservices
    - which one to choose
    - microservices advantages and disadvantages

- **Converting a monolithic application into microservices**
- we can convert a monolithic application into microservices using the concept of **microservices architecture** or we can develop microservices from scratch using **microservices framework**
- lets consider a monolithic application which has following features :
  - Authentication
  - Authorization
  - Billing
  - Payment
  - Inventory
- we can convert this application into microservices using the concept of **microservices architecture**
- making the monolithic application into microservices means :
- for each entity we can create a microservice / for each feature we can create a microservice
  - for authentication we can create a microservice for authentication
  - for authorization we can create a microservice for authorization
  - for billing we can create a microservice for billing
  - for payment we can create a microservice for payment
  - for inventory we can create a microservice for inventory
  - these microservices are independent of each other and with each other using http protocols
- the database for each microservice is independent of each other and with each other there must be no dependency between them
- the data form one microservice is going to be consumed by another microservice by using http protocols so we need additional endpoints for each microservice
- the deployment of each microservice is independent of each other and with each other
- the testing of each microservice is independent of each other and with each other
