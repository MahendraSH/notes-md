## LoadBalancing

- **introdction to Load Balancing**
  
  - **Why Load Balancing ?**
   - if there is a high demand for a service , you can use load balancing to distribute requests evenly between the instances of the service.
  - **what is Load Balancing ?**
    - if you have multiple instances of a service , you can use load balancing to distribute requests evenly between the instances.

  -  **Server Side Load Balancing**
    - in server side we have a hardware that first takes a request and then distribute it to multiple instances of a service.
    - the problem with server side load balancing is that it requires a lot of hardware resources and is not scalable and costly. 
  - **Client Side Load Balancing**
    - in client side load balancing we have a software that first takes a request and then distribute it to multiple instances of a service.
    - the client has the ability to distribute the request to multiple instances of a service.
- **introdction to Load Balancing using spring cloud load balancer** 
    - The spring cloud load balancer is a component that is used to distribute requests evenly between the instances of a service.
    - it supports both static and dynamic load balancing.
    -**static load balancing**
       -  when you provide the details of the instances of the service in the configuration file, the load balancer will distribute the requests evenly between the instances. that is you provide the details manually.
    - **dynamic load balancing**
       - when the load balancer takes the details from the service registry / discovery  and selects the instances that are healthy, it will distribute the requests evenly between the instances.
-**Demo : introdction to Load Balancing using spring cloud load balancer**
  
