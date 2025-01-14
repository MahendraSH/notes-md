## Centralized Configuration

- **Distributed and Centralized Configuration**

  - **what is the need for distributed and centralized configuration?**
    - if we what to change the configuration of the application we need to change the configuration in multiple places and redeploy all the micro services.
    - so we need a centralized configuration to manage the configuration of the application. we need a server to manage the configuration of the application and all the micro services can access the configuration from the server.
  - **what is distributed centralized configuration?**

    - distributed centralized configuration is a configuration management system that is used to manage the configuration of the application and all the micro services.
      eg: spring cloud Consul , spring cloud config

  - **Summery**
    - what is the need for distributed and centralized configurations?
    - what is distributed centralized configurations?

- **Spring Cloud Consul**

  - **Distributed configuration management APIs** :
    - Spring Cloud Consul
    - Spring Cloud Config etc
  - **Distributed Configuration using Consul**

    - Consul is a service networking solution to automate configuration management. It helps to manage the configuration of the application and all the micro services in one place that is the consul server.
    - consul server shares the configuration of the application and all the micro services in bootstrap phase.

  - **Summery**
    - Distributed configuration management APIs
    - Distributed Configuration using Consul

- **Demo**

  - **Setting up the Consul**
    - install the consul application
      - acc to the os install the consul application
    - start the consul server
      - the command to start the consul as server
      ```bash
        consul agent -server -ui -bind 127.0.0.1 -bootstrap-expect 1 -data-dir /user/consul/application_name
      ```
      - The meaning of the command is as follows:
        - `-server`: This flag indicates that the consul server is running in server mode.
        - `-ui`: This flag enables the web UI for the consul server.
        - `-bind`: This flag specifies the IP address or hostname that the consul server will bind to.
        - `-bootstrap-expect`: This flag specifies the number of expected bootstrap nodes.
        - `-data-dir`: This flag specifies the directory where the consul data will be stored.
      - open `http://locahost:8500/ui` to get the ui of consul
  - **Distributed configuration using Consul**

    - Consul uses key-value store to store the configuration of the application and all the micro services.
    - **lets understand with an example** :
      To set up Spring Boot microservices with Spring Cloud Consul and use a centralized configuration for each microservice, you need to configure both **Consul** and **Spring Boot** to interact with each other.

      In this scenario, you want to store both **common properties** and **service-specific properties** in **Consul**, and then load these configurations into each microservice at runtime. You will also need a `bootstrap.yml` configuration to initialize Spring Cloud Consul settings for each application.

      Let’s break down the steps and configurations required for this setup.

      ### 1. **Consul Key-Value Store Structure**

      You will store the configuration in **Consul** in the following structure:

      - **Common configuration** (applies to all microservices, like datasource settings)

        ```
        /config/application/data:
            spring:
                datasource:
                    driver-class-name: com.mysql.cj.jdbc.Driver
                    url: jdbc:mysql://localhost:3306/myapp
                    username: root
                    password: root_password
                jpa:
                    hibernate.ddl-auto: update
                    show-sql: true
        ```

      - **Service-specific configuration** (unique to each service like the port number)

        ```
        /config/serviceA/data:
            spring:
                datasource:
                    url: jdbc:mysql://localhost:3306/serviceA_db
                    username: serviceA_user
                    password: serviceA_password
                server:
                    port: 4001

        /config/serviceB/data:
            spring:
                datasource:
                    url: jdbc:mysql://localhost:3306/serviceB_db
                    username: serviceB_user
                    password: serviceB_password
                server:
                    port: 4002
        ```

      ### 2. **Add Required Dependencies to `pom.xml` for Each Microservice**

      To use **Spring Cloud Consul**, make sure you include the following dependencies in your `pom.xml` for each microservice.

      #### Maven Dependencies:

      ```xml
      <dependency>
          <groupId>org.springframework.cloud</groupId>
          <artifactId>spring-cloud-starter-consul-config</artifactId>
      </dependency>
      <dependency>
          <groupId>org.springframework.boot</groupId>
          <artifactId>spring-boot-starter-data-jpa</artifactId>
      </dependency>
      <dependency>
          <groupId>org.springframework.boot</groupId>
          <artifactId>spring-boot-starter-jdbc</artifactId>
      </dependency>
      <dependency>
          <groupId>com.mysql</groupId>
          <artifactId>mysql-connector-java</artifactId>
      </dependency>
      ```

      Ensure you also include the **Spring Cloud BOM** for dependency management, which allows you to use the appropriate versions of Spring Cloud dependencies:

      ```xml
      <dependencyManagement>
          <dependencies>
              <dependency>
                  <groupId>org.springframework.cloud</groupId>
                  <artifactId>spring-cloud-dependencies</artifactId>
                  <version>2021.0.4</version> <!-- Use the latest compatible version -->
                  <scope>import</scope>
                  <type>pom</type>
              </dependency>
          </dependencies>
      </dependencyManagement>
      ```

      ### 3. **Create `bootstrap.yml` for Spring Boot Microservices**

      In Spring Cloud, the **bootstrap.yml** is used for configuring environment-specific settings and initializing Spring Cloud components. For each microservice, you’ll need to configure the `bootstrap.yml` file to enable Consul and configure the application name, server port, and Consul-related properties.

      #### **`bootstrap.yml` Example for Each Microservice**

      Here’s how you should structure the `bootstrap.yml` for **Service A** and **Service B**:

      ##### **1. Service A (`bootstrap.yml`)**

      ```yaml
      server:
        port: ${config.serviceA.server.port:4001} # Service A port from Consul, default to 4001

      spring:
        application:
          name: serviceA # Name of the application (matches the Consul key)

        cloud:
          consul:
            config:
              enabled: true # Enable Consul configuration support
              prefix: config # Prefix where configurations are stored in Consul
              data-key: data # Key in Consul where configurations are stored(file name)
              default-context: application # Default context for config (will look under /config/application/data)
              profile-separator: "::" # Separator for profile-specific configuration (e.g., application::dev)
              format: yml # Format for configuration (YAML)
              fail-fast: true # Fail fast if the configuration cannot be loaded
              watch:
                delay: 10s # Delay for watching config updates from Consul
      ```

      ##### **2. Service B (`bootstrap.yml`)**

      ```yaml
      server:
        port: ${config.serviceB.server.port:4002} # Service B port from Consul, default to 4002

      spring:
        application:
          name: serviceB # Name of the application (matches the Consul key)

        cloud:
          consul:
            config:
              enabled: true # Enable Consul configuration support
              prefix: config # Prefix where configurations are stored in Consul
              data-key: data # Key in Consul where configurations are stored(file name)
              default-context: application # Default context for config (will look under /config/application/data)
              profile-separator: "::" # Separator for profile-specific configuration (e.g., application::dev)
              format: yml # Format for configuration (YAML)
              fail-fast: true # Fail fast if the configuration cannot be loaded
              watch:
                delay: 10s # Delay for watching config updates from Consul
      ```

      In the `bootstrap.yml` file:

      - **`spring.application.name`** specifies the application name, which must match the service name stored in Consul (e.g., `serviceA`, `serviceB`).
      - **`server.port`** is dynamically pulled from Consul. If the service-specific port is not found, it defaults to the value specified after the colon (`4001` for Service A, `4002` for Service B).
      - **`spring.cloud.consul.config`**: This section enables the Spring Boot application to retrieve its configuration from Consul and defines key properties:
        - **`prefix`** specifies the root path where configurations are stored in Consul (e.g., `/config`).
        - **`default-context`** defines the default configuration context (e.g., `/config/application/data` for common configurations).
        - **`profile-separator`** allows you to define different profiles (e.g., `application::dev` for development-specific configurations).
        - **`format: yml`** ensures that Spring Boot expects the configuration to be in YAML format.
        - **`fail-fast: true`** ensures the application fails if the configuration cannot be fetched from Consul.
        - **`watch.delay`** allows Spring Boot to watch for changes in the configuration and reload them after the specified delay.
        - **`data-key`** specifies the key in Consul where the configuration is stored (e.g., `data` for common configurations).

      By using `bootstrap.yml`, you can ensure that each microservice can access the desired configuration from Consul, making it easier to manage and scale microservices.

  - consul can be written in yml, json , xml format

  - **summary** :

    - Distributed configuration using Consul
    - Distributed configuration management APIs
    - Distributed Configuration using Consul
    - Spring Cloud Consul
    - Spring Cloud Config example
