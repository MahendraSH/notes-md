# Service Discovery

- **Service Discovery**

  - **need of service discovery**

  - lets consider two microservices A and B , A will call B and B will call A with the help of the initial configuration in the bootstrap.yml file.
  - but when one of the microservice is redeployed or changed to other port or host the call will be failed.
  - we need a way to know which microservice is calling which microservice.
  - so we need service discovery for this purpose.
  - **what is service discovery?**

    - service discovery is a way to know which microservice is calling which microservice.

  - **service registry**
    - in this the microservice will register itself to the service registry and the other microservice will get the information from the service registry and it can also get other microservice information from the service registry.
    - name port host address etc are stored in service registry.
  - **service discovery pattern**
  - even when the port or host of one microservice is changed or redeployed the other microservice will not be affected as the port number and host of the is updated in the service registry.
  - it will get the information from the service registry where the updated information is stored.

    - **Summary**
      - need of service discovery
      - what is service discovery
      - service registry
      - service discovery pattern

- **Service Discovery using Spring Cloud Consul**

  - **Service Registry and Discovery APIs**
    examples :
    - netflix eureka
    - zookeeper
    - spring cloud consul
  - **how service discovery using Spring Cloud Consul**

    - consul helps in service discovery and registry along with configuration management.
    - all the services must be registered to the consul server.
    - when a microservice is started it will register itself to the consul server.
    - when a microservice is stopped it will deregister itself from the consul server.
    - when a service what to discover it will get the information from the consul server before which the consul server checks for the health of the service that is being discovered.

  - **Summary**
    - service discovery using Spring Cloud Consul
    - Service Registry and Discovery APIs
    - how service discovery using Spring Cloud Consul

- **Demo : Service Discovery using Spring Cloud Consul**
- **steps**

  1. add the necessary dependencies to the pom.xml file.

  ```xml
  <dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-consul-discovery</artifactId>
    <exclusions>
      <!-- exclude the netflix hystric library and ribbon library -->
      <exclusion>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-netflix-hystrix</artifactId>
      </exclusion>
      <exclusion>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-netflix-ribbon</artifactId>
      </exclusion>
    </exclusions>
  </dependency>
  ```

  2. add the necessary configuration to the bootstrap.yml file.

  ```yaml
  spring:
    cloud:
      consul:
        discovery:
          enabled: true #optional
          hostname: localhost
          port: 8500 #optional
          health-check-path: /actuator/health #optional
  ```

  The meaning of the configuration is as follows:

  - `spring.cloud.consul.discovery.enabled`: This flag indicates that service discovery using Spring Cloud Consul is enabled.
  - `spring.cloud.consul.discovery.hostname`: This flag specifies the hostname or IP address of the consul server.
  - `spring.cloud.consul.discovery.port`: This flag specifies the port number on which the consul server is running.
  - `spring.cloud.consul.discovery.health-check-path`: This flag specifies the path on the consul server where the health check is performed.

  3. add the necessary code to the use service discovery using Spring Cloud Consul :

     - in the `HelloController of the microservice-a`

     ```java
     @RestController
     public class HelloController {
     @Autowired
     private DiscoveryClient discoveryClient;// for service discovery
       @GetMapping("/hello")
       public String hello() {
         ServiceInstance serviceInstance = discoveryClient.getInstances ("microservice-b").get(0); // get the instance of microservice-b
         String url = serviceInstance.getUri().toString() + "/hello"; // get the url of microservice-b
         RestTemplate restTemplate = new RestTemplate();
         String result = restTemplate.getForObject(url, String.class);
         return result;
       }

     }
     ```

     - in the `HelloController of the microservice-b`

     ```java
     @RestController
     public class HelloController {
       @GetMapping("/hello")
       public String hello() {
         return "Hello from microservice-b";
       }
     }
     ```

  - **Summary**
    - Demo : Service Discovery using Spring Cloud Consul
    - steps
      1. add the necessary dependencies to the pom.xml file.
      2. add the necessary configuration to the bootstrap.yml file.
      3. add the necessary code to the use service discovery using Spring Cloud Consul
