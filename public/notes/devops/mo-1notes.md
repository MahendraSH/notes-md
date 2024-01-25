# 1.1 Introduction to DevOps:

**Definition:**
DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the systems development life cycle and provide continuous delivery with high software quality.

**Key Principles:**

- Collaboration and communication between development and operations teams.
- Automation of processes to achieve efficiency.
- Continuous integration, delivery, and deployment.
- Monitoring and feedback loops for continuous improvement
- DevOps is "bottom-up" and a flexible practice, created by software engineers, with software engineer needs in mind.

# Systems Development Life Cycle

SDLC is a process used by software industries to design, develop, and test high-quality software. Different models include Waterfall, Agile, V-Model, Spiral Model, and more.

**Phases:**

1. **Planning:** Define the project, gather requirements.
2. **Analysis:**
3. **Design:**
4. **Implementation:** Actual coding and development.
5. **Maintenance & Support:** Post-release activities, bug fixing, and updates.

## Waterfall SDLC Model

1. Requirements
2. Analysis
3. Design
4. implementation
5. Testing
6. Delivery
7. Maintenance

The Waterfall model is a traditional software development life cycle (SDLC) methodology that follows a linear and sequential approach. It consists of several distinct phases, and each phase must be completed before moving on to the next one. The model is named "Waterfall" because it resembles a waterfall, where progress flows in one direction, and once a phase is completed, there's no turning back. Here's a brief explanation of each phase:

1. **Requirements:**

   - In this phase, the project's requirements are gathered and documented in detail.
   - Stakeholders, including clients and end-users, collaborate to define the functionalities and features that the software must have.
   - The requirements are typically outlined in a document known as the Software Requirements Specification (SRS).

2. **Analysis:**

   - During the analysis phase, the gathered requirements are thoroughly analyzed to identify any inconsistencies or ambiguities.
   - The system's overall architecture and design are conceptualized.
   - The analysis results in a clear understanding of the system's functionalities and the relationships between its components.

3. **Design:**

   - In the design phase, the system's architecture is transformed into a detailed blueprint.
   - The design includes specifications for each component, such as databases, user interfaces, modules, and interactions.
   - The goal is to create a design that can be implemented effectively and efficiently.

4. **Implementation:**

   - This phase involves the actual coding or programming of the software based on the detailed design.
   - Developers use the specifications from the design phase to write code, and the software starts to take shape.
   - Unit testing is often performed during this phase to ensure that individual components work as intended.

5. **Testing:**

   - The testing phase involves thorough testing of the entire software system to identify and fix any defects.
   - Different types of testing, such as functional testing, integration testing, and system testing, are carried out to ensure that the software meets the specified requirements.

6. **Delivery:**

   - Once testing is successfully completed and all issues are resolved, the software is delivered or deployed to the end-users.
   - This phase may also involve user training and documentation to support the successful use of the software.

7. **Maintenance:**
   - The maintenance phase involves ongoing support and updates to the software.
   - Bug fixes, enhancements, and changes are made as necessary to address issues or accommodate new requirements.
   - This phase can continue for an extended period to ensure the software remains relevant and effective.

While the Waterfall model provides a structured and systematic approach to software development, it has its limitations, such as inflexibility to changes after the project has started and potential delays in delivering a working product until the end of the development cycle. Agile methodologies, like Scrum and Kanban, have gained popularity as alternatives that offer more flexibility and adaptability in response to changing requirements.

![Alt text](http://localhost:3000/notes/devops/image.png)

## V-model of software development

- verficatoin
  1. User Requirements
  2. System Specifications
  3. Architecture Desgin (HLD )
  4. Module Design (HLD)
  5. implemenatation
- Vailidation
  1. user acceptiance Testing
  2. System testing
  3. integration test
  4. component testing
  5. unit testing

The V-Model, also known as the Verification and Validation model, is a software development model that emphasizes the relationship between the development phases and their corresponding testing phases. The model is represented in the shape of a "V" to illustrate the sequential progression from the verification phase (left side of the V) to the validation phase (right side of the V). Let's break down each phase in both verification and validation:

### Verification Phases (Left Side of the V):

1. **User Requirements:**

   - In this phase, user requirements are gathered and documented.
   - The focus is on ensuring that the requirements are well-defined and complete.

2. **System Specifications:**

   - The high-level system specifications are derived from the user requirements.
   - This phase involves creating a detailed specification document that outlines the overall system architecture and design.

3. **Architecture Design (HLD - High-Level Design):**

   - The architectural design phase involves creating a high-level design that defines the overall structure of the system.
   - It focuses on key architectural components and their interactions.

4. **Module Design (LLD - Low-Level Design):**

   - The module design phase follows the high-level design and involves breaking down the system into smaller, more manageable modules.
   - Detailed specifications for each module are created during this phase.

5. **Implementation:**
   - In this phase, the actual coding or implementation of the software occurs based on the detailed design specifications.
   - Developers write code for individual modules.

### Validation Phases (Right Side of the V):

1. **Unit Testing:**

   - The unit testing phase involves testing individual modules or components in isolation.
   - The goal is to ensure that each unit of the software functions as intended.

2. **Component Testing:**

   - Component testing, also known as module testing, focuses on testing groups of related modules together.
   - It verifies that the interactions between modules are correct.

3. **Integration Testing:**

   - Integration testing verifies that different modules or components work together as a whole system.
   - The goal is to identify any issues that may arise from the interactions between modules.

4. **System Testing:**

   - System testing involves testing the entire software system as a complete and integrated entity.
   - It ensures that the system meets the specified requirements and behaves as expected.

5. **User Acceptance Testing (UAT):**
   - UAT is the final phase in the validation process and involves testing the system with actual users.
   - Users validate that the software meets their expectations and business requirements.

The V-Model emphasizes the importance of testing at each stage of development to catch defects early in the process. It provides a systematic and structured approach to software development and testing, making it easier to trace requirements to the corresponding tests. However, like the Waterfall model, the V-Model can be less flexible to changes in requirements during the development process. Iterative and Agile methodologies offer more adaptability in response to changing customer needs.
![Alt text](http://localhost:3000/notes/devops/image-1.png)

## Rapid Application Development

The key principle is a reduction in planning to focus on a highly iterative design and construction
process, enabling teams to accomplish more in less time, without impacting client satisfaction

he prototyping and rapid construction phases may be repeated until the product owner
and users are satisfied that the prototype and build meets the project requirements

![Alt text](http://localhost:3000/notes/devops/image-2.png)

## Spiral SDLC Model

The Spiral model is a flexible and iterative software development life cycle (SDLC) model that combines elements of both traditional and iterative development approaches. It was proposed by Barry Boehm in 1986 and is characterized by a spiral-shaped process model, reflecting the repetitive and evolutionary nature of the development process. The Spiral model consists of a series of repeating cycles, each of which represents a phase in the development process. The key phases of the Spiral model include:

1. **Planning:**

   - The development process begins with project planning, where goals, constraints, risks, and alternative strategies are identified and analyzed.
   - The project is planned based on the understanding of the problem, requirements, and potential risks.

2. **Risk Analysis:**

   - The second phase involves a comprehensive risk analysis, where potential risks are identified and assessed.
   - Risks may include technical uncertainties, project management issues, or external factors that could impact the project's success.

3. **Engineering:**

   - In this phase, the actual development and implementation of the software take place.
   - The engineering phase involves designing, coding, and testing the software according to the specifications.

4. **Evaluation:**
   - After completing a cycle of development, the project is evaluated to determine if it satisfies the project goals and requirements.
   - This evaluation includes a review of the progress, potential risks, and the decision on whether to proceed with the next iteration of the spiral.

The key feature of the Spiral model is its iterative nature. Each cycle in the spiral represents a complete loop of the development process. As the development progresses, the project moves outward in the spiral, indicating increased functionality and complexity. The spiral model continues until the project is completed or terminated.

**Advantages of the Spiral Model:**

1. **Risk Management:** The model explicitly addresses risk at each iteration, allowing for effective risk management throughout the project.
2. **Flexibility:** The model is adaptable and allows for changes and refinements at each iteration.
3. **Early Prototyping:** Prototypes can be developed early in the process, providing stakeholders with a tangible understanding of the evolving product.

**Disadvantages of the Spiral Model:**

1. **Complexity:** The model can be complex to manage, particularly for small projects where a simpler model may be more suitable.
2. **Costly:** The iterative nature of the model may lead to increased costs and longer development timelines.

The Spiral model is well-suited for large, complex projects where risks are high, and a flexible approach is needed. It is particularly effective when the requirements are not well-understood or are likely to change during the development process.

## Agile SDLC methodology

- Suitable for unpredictable and uncertain environments
- Open to change and incorporates changes throughout the
  development cycle
- Flexible with project processes repeated during the lifecycle
  (iterative), allowing fast adaptation to changes
- Focus on processes and people (streamlining processes)
- Feedback received early and often (Feedback Loop)
- Frequent releases and early feedback promote learning and
  refinement
- Focus on delivering value (waste is reduced)
- Self-organized teams promote increased collaboration
- Requirements expected to change and prioritized through
  iterations
- Changes made before proceeding with requirements and new
  iterations
- Processes require less documentation and more human
  interaction

### Agile Scrum with Sprints - Development:

**Agile Scrum** is an iterative and incremental framework for software development that prioritizes flexibility and adaptability to changing requirements. The development process is organized into fixed-length time intervals called **sprints**. Here's a summary:

- **Roles:**

  - **Product Owner:** Represents the stakeholders and prioritizes the backlog.
  - **Scrum Master:** Facilitates the Scrum process and removes impediments.
  - **Development Team:** Self-organizing cross-functional team responsible for delivering the product increment.

- **Artifacts:**

  - **Product Backlog:** A prioritized list of features and requirements.
  - **Sprint Backlog:** Selected items from the product backlog for a specific sprint.
  - **Increment:** The sum of all completed product backlog items at the end of a sprint.

- **Events:**
  - **Sprint Planning:** Selecting items from the product backlog for the upcoming sprint.
  - **Daily Standup:** Short daily meeting for the team to synchronize and plan the day's work.
  - **Sprint Review:** Demonstrating the completed increment to stakeholders.
  - **Sprint Retrospective:** Reflecting on the sprint and identifying improvements for the next sprint.

**Key Characteristics:**

- **Time-Boxed:** Sprints have a fixed duration (usually 2-4 weeks), promoting a regular and predictable cadence.
- **Adaptability:** The team can adapt to changing requirements and feedback after each sprint.
- **Continuous Improvement:** The retrospective encourages teams to reflect on their processes and make improvements.

### Agile Kanban - Maintenance:

**Agile Kanban** is a visual management method for software development and maintenance. It originated from Lean manufacturing principles and emphasizes continuous delivery and flow. Here's a summary in the context of maintenance:

- **Board Structure:**

  - **Backlog:** Contains a prioritized list of tasks or issues to be addressed.
  - **In Progress:** Indicates tasks currently being worked on.
  - **Done:** Represents completed tasks.

- **Work in Progress (WIP) Limits:**

  - Sets a maximum limit on the number of tasks allowed in each column, preventing overloading and encouraging focus.

- **Continuous Flow:**

  - Tasks move through the board as they are worked on and completed.
  - New tasks are pulled into the "In Progress" column only when there is capacity.

- **Roles:**
  - **No Prescribed Roles:** Kanban doesn't prescribe specific roles like Scrum but encourages collaboration and flexibility.

**Key Characteristics:**

- **Visual Management:** The Kanban board provides a clear visual representation of the work in progress.
- **Flexibility:** There are no fixed time intervals (sprints), allowing for a continuous and flexible workflow.
- **Focus on Efficiency:** Kanban aims to optimize the flow of work and minimize lead times.

**Usage in Maintenance:**

- Agile Kanban is particularly suitable for maintenance tasks, where the volume and nature of incoming issues may vary.
- It allows teams to handle a constant flow of incoming requests while maintaining a focus on efficiency and quality.

Both Agile Scrum with Sprints and Agile Kanban offer effective approaches to software development, with Scrum being more structured and time-boxed, while Kanban provides flexibility for continuous delivery and flow, making it well-suited for maintenance activities

## History of DevOps

- **Phase 1 (Before DevOps):** Siloed development and operations teams.
- **Phase 2 (Agile Era):** Agile methodologies emphasized collaboration.
- **Phase 3 (DevOps Emergence):** Need for faster and more reliable deployments.

## DevOps Roles

### DevOps - Core Team

- DevOps Champion

  - They promote DevOps in
    organization, secure funding
    for investment into DevOps,
    communicate to upper
    management on benefits and
    improvements

- System Architect

  - Investigate and analyze best
    DevOps practices; their
    application on a system;
    suggest architecture
    improvements; manage the
    cost

- QA/XA Engineers

  - Quality Assurance and
    eXperience Assurance
    checks the implementation;
    verifies the usability and
    utility of the implementation;
    suggests tweaks to improve
    usage of tools

- Security Engineers

  - Investigate and handle security
    aspects (AAA) of the
    implemented DevOps tools and
    processes

- These are roles which provide
  direction and assessment of the
  DevOps implementation

- Usually these are responsibilities and not
  defined roles in an organisation. People with
  these responsibilities often have other
  organisational roles

### DevOps - Implementors & Users

- Product Owner / Release Manager

  - They determine which DevOps
    tools will be used in a specific
    project. They also have the
    decision making power to not
    use a tool and convey
    improvements in processes
    and tools to DevOps Core team

- IT Engineer

  - Involved in deployment of
    DevOps tools, tracking the
    usage metrics and upgrade
    of tools as per needs of the
    project infrastructure

- Software Developers

  - Involved in applying DevOps
    process in their daily work;
    Use DevOps tools to deploy
    the code and track
    application metrics

- Software Testers

  - Involved in applying DevOps
    process in their daily work;
    Use DevOps tools to verify
    the code deployed and track
    testing metrics

- These are roles which implement
  and use the DevOps tools and
  Processes in their day-to-day
  work
- Usually these are clearly defined roles in an
  organisation. People with these
  responsibilities often have other
  organisational roles

### Goals:

1. **Faster Deployment:**

   - Reduced lead times for new features.

2. **Increased Release Frequency:**

   - Shorter release cycles.

3. **Lower Failure Rate:**
   - Reduced defects and rollbacks.

# How DevOps Solves Development to Operation Risks: (pdf and summery )

Risk Management with DevOps

1. Infrastructure as Code (IaC)
   1. Automating server creation; thereby reducing manual errors
   2. IaC scripts are shared between teams for consistency
   3. Auto-scale based on load management
   4. Improve MTTR and other server metrics
2. Automation to manage regulatory conditions
   1. Legal provisions and Acts prevent real-data management to unauthorised persons
   2. Automating such testing will reduce the exposure to public
   3. Quality of application delivered / maintained will be improved with periodic automation cases
3. Security aspects of AAA to a project
   1. VPN accesses to restrict users
   2. Software and Hardware upgrades either automated / manually done based on alerts set by
      common org-wide scripts
   3. No manual hardening of servers for different applications; applying org-wide policy across
      server setups

# Difference between Agile and DevOps: (pdf )

# Introduction to DevOps Tools:

### SCM (Source Code Management):

- **Git:** Distributed version control system for tracking changes in source code.
- **SVN (Subversion):** Centralized version control system.

### CI/CD Tools:

- **Jenkins:** Open-source automation server for building, testing, and deploying code.
- **Travis CI:** Cloud-based CI/CD service for GitHub projects.

### Configuration Management:

- **Ansible, Puppet, Chef:** Tools for automating infrastructure configuration and management.

### Monitoring Tools:

- **Nagios, Prometheus:** Monitor system health, detect and alert on issues.

As of my last knowledge update in January 2022, it's challenging to pinpoint a single "most widely used" DevOps tool, as the popularity of tools can vary based on the specific needs and preferences of different organizations. However, several DevOps tools have gained widespread adoption due to their effectiveness in various areas of the software development lifecycle. Let me provide an overview of some commonly used DevOps tools along with their purposes:

1. **Jenkins:**

   - **Purpose:** Jenkins is an open-source automation server used for building, testing, and deploying code. It supports continuous integration and continuous delivery (CI/CD) processes, helping automate the building and testing of code changes.

2. **Git:**

   - **Purpose:** Git is a distributed version control system that allows multiple developers to collaborate on a project. It facilitates the tracking of changes, merging of code, and managing different versions of source code.

3. **Docker:**

   - **Purpose:** Docker is a containerization platform that enables the packaging of applications and their dependencies into containers. Containers provide consistency across different environments, making it easier to deploy and scale applications.

4. **Ansible:**

   - **Purpose:** Ansible is an open-source automation tool for configuration management, application deployment, and task automation. It allows developers to define infrastructure as code and automate repetitive tasks.

5. **Kubernetes:**

   - **Purpose:** Kubernetes is a container orchestration platform that automates the deployment, scaling, and management of containerized applications. It helps in managing and coordinating containerized workloads in a clustered environment.

6. **Puppet:**

   - **Purpose:** Puppet is a configuration management tool that automates the provisioning and management of infrastructure. It allows for the definition and enforcement of desired infrastructure states.

7. **Chef:**

   - **Purpose:** Chef is a configuration management tool that automates the deployment and management of infrastructure. It uses a declarative approach, allowing developers to define the desired state of the infrastructure.

8. **Azure DevOps (formerly VSTS):**

   - **Purpose:** Azure DevOps is a set of development tools and services provided by Microsoft. It includes features for version control, build automation, release management, and more, supporting end-to-end DevOps processes.

9. **Jira:**

   - **Purpose:** Jira is a popular issue and project tracking tool that supports Agile project management. It is widely used for managing and tracking software development projects, including features for sprint planning, backlog management, and reporting.

10. **Splunk:**
    - **Purpose:** Splunk is a platform for searching, monitoring, and analyzing machine-generated data. It is commonly used for log management, monitoring, and gaining insights into system and application performance.

These tools are just a subset of the extensive DevOps toolchain available. The choice of tools depends on the specific requirements and workflows of a given organization. Many organizations adopt a combination of these tools to create a toolchain that aligns with their development, testing, deployment, and monitoring needs. Additionally, new tools may emerge, and the popularity of existing tools may change over time. It's advisable to stay updated with the latest trends and tooling in the DevOps space.

# Best Practices in DevOps:

### Continuous Integration:

- Frequent integration of code changes.
- Automated testing for early issue detection.

### Continuous Deployment:

- Automated release processes to production.

### Monitoring and Logging:

- Real-time visibility into system performance.
- Proactive issue detection and resolution.

### Infrastructure as Code (IaC):

- Managing infrastructure through code for consistency.
- Automating infrastructure provisioning and configuration.

Introduction to servers and its purpose ( mo-1 -2 pdf)
– Server Administration ( mo-1 -2 pdf)
