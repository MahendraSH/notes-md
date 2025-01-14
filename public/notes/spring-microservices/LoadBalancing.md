## LoadBalancing

- **introdction to Load Balancing**

  - **Why Load Balancing ?**
  - if there is a high demand for a service , you can use load balancing to distribute requests evenly between the instances of the service.
  - **what is Load Balancing ?**

    - if you have multiple instances of a service , you can use load balancing to distribute requests evenly between the instances.

  - **Server Side Load Balancing**
  - in server side we have a hardware that first takes a request and then distribute it to multiple instances of a service.
  - the problem with server side load balancing is that it requires a lot of hardware resources and is not scalable and costly.
  - **Client Side Load Balancing**

    - in client side load balancing we have a software that first takes a request and then distribute it to multiple instances of a service.
    - the client has the ability to distribute the request to multiple instances of a service.

- **introdction to Load Balancing using spring cloud load balancer**

  - The spring cloud load balancer is a component that is used to distribute requests evenly between the instances of a service. - it supports both static and dynamic load balancing.

  -**static load balancing** - when you provide the details of the instances of the service in the configuration file, the load balancer will distribute the requests evenly between the instances. that is you provide the details manually.

  - **dynamic load balancing** - when the load balancer takes the details from the service registry / discovery and selects the instances that are healthy, it will distribute the requests evenly between the instances.

-**Demo : introdction to Load Balancing using spring cloud load balancer**

- **steps for static load balancing** :

1. add the necessary dependencies to the pom.xml file.

```xml
<dependency>
  <groupId>org.springframework.cloud</groupId>
  <artifactId>spring-cloud-starter-loadbalancer</artifactId>
</dependency>
```

2. create a load balancer bean in the configuration class.

```java
@component
public class LoadBalancerConfig {
  @Bean
  @primary
  ServiceInstanceListSupplier serviceInstanceListSupplier() {
    return new DemoServiceInstanceListSupplier("microservice-a");
  }

}
class DemoServiceInstanceListSupplier implements ServiceInstanceListSupplier {

  private final String serviceId;

  public DemoServiceInstanceListSupplier(String serviceId) {
    this.serviceId = serviceId;
  }

  @Override
  public List<ServiceInstance> get() {
    return Arrays.asList(
        new ServiceInstance(serviceId + "1", "localhost:4001", "http://localhost:4001"),
        new ServiceInstance(serviceId + "2", "localhost:4002", "http://localhost:4002")
    );
  }

}

```

5. add customConfig

```java
@Configuration
public class CustomConfig {
  @Bean @LoadBalanced
  public RestTemplate restTemplate() {
    return new RestTemplate();
  }
}
```

4. create a controller class.

```java
@RestController
@LoadBalancerClient(name = "microservice-b", configuration = LoadBalancerConfig.class)
public class DemoController {

 @Autowired
 RestTemplate restTemplate;
  @GetMapping("/hello")
  public String hello() {
    return restTemplate.getForObject("http://microservice-b/hello", String.class);

  }

}
```

- **steps for dynamic load balancing** :

  1. add the necessary dependencies to the pom.xml file.

  ```xml
  <dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-loadbalancer</artifactId>
  </dependency>
  ```

  2. add configuration class.

  ```java
  @Configuration
  public class CustomConfig {
    @Bean @LoadBalanced
    public RestTemplate restTemplate() {
      return new RestTemplate();
    }
  }
  ```

  3. create a controller class.

  ```java
  @RestController
  public class DemoController {

  @Autowired
  RestTemplate restTemplate;
    @GetMapping("/hello")
    public String hello() {
      return restTemplate.getForObject("http://microservice-b/hello", String.class);

    }


  }
  ```
