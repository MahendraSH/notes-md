# Moudule 5 Service-Oriented Architectures for Distributed Computing:

## 5.1 SERVICES AND SERVICE-ORIENTED ARCHITECTURE

### service-oriented architecture (SOA)

- SOA is about how to design a software system that makes use of services of new or legacy applications through their published or discoverable interfaces. These applications are often distributed over the networks. SOA also aims to make service interoperability extensible and effective. It prompts architecture styles such as loose coupling, published interfaces, and a standard communication model in order to support this goal.

- ## The World Wide Web Consortium (W3C) defines **_SOA as a form of distributed systems architecture characterized by the following properties_**

- **Logical view**: The SOA is an abstracted, logical view of actual programs, databases, business
  processes, and so on, defined in terms of what it does, typically carrying out a business-level
  operation. The service is formally defined in terms of the messages exchanged between provider
  agents and requester agents.

- **Message orientation**: The internal structure of providers and requesters include the
  implementation language, process structure, and even database structure. These features are
  deliberately abstracted away in the SOA: Using the SOA discipline one does not and should not
  need to know how an agent implementing a service is constructed. A key benefit of this
  concerns legacy systems. By avoiding any knowledge of the internal structure of an agent, one
  can incorporate any software component or application to adhere to the formal service definition.

- **Description orientation**: A service is described by machine-executable metadata. The
  description supports the public nature of the SOA: Only those details that are exposed to
  the public and are important for the use of the service should be included in the description.
  The semantics of a service should be documented, either directly or indirectly, by its description.

      -  **Granularity** Services tend to use a small number of operations with relatively large and
      complex messages.

      - **Network orientation** Services tend to be oriented toward use over a network, though this is
      not an absolute requirement.

      -  **Platform-neutral** Messages are sent in a platform-neutral, standardized format delivered through the interfaces. XML is the most obvious format that meets this constraint.

- Unlike the component-based model, which is based on design and development of tightly
  coupled components for processes within an enterprise, using different protocols and technologies
  such as CORBA and DCOM, SOA focuses on loosely coupled software applications running across
  different administrative domains, based on common protocols and technologies, such as HTTP and
  XML. SOA is related to early efforts on the architecture style of large-scale distributed systems, particularly Representational State Transfer (REST). Nowadays, REST still provides an alternative to the complex standard-driven web services technology and is used in many Web 2.0 services. In the following subsections, we introduce REST and standard-based SOA in distributed systems.

---

## 5.1.1 REST and Systems of Systems

REST is a software architecture style for distributed systems, particularly distributed hypermedia
systems, such as the World Wide Web. It has recently gained popularity among enterprises such as
Google, Amazon, Yahoo!, and especially social networks such as Facebook and Twitter because of
its simplicity, and its ease of being published and consumed by clients. REST, shown in Figure 5.1,
was introduced and explained by Roy Thomas Fielding, one of the principal authors of the HTTP
specification, in his doctoral dissertation [2] in 2000 and was developed in parallel with the
HTTP/1.1 protocol. **_The REST architectural style is based on four principles_**:

- **Resource Identification through URIs**: The RESTful web service exposes a set of resources
  which identify targets of interaction with its clients. The key abstraction of information in REST is a resource. Any information that can be named can be a resource, such as a document or
  image or a temporal service. A resource is a conceptual mapping to a set of entities. Each
  particular resource is identified by a unique name, or more precisely, a Uniform Resource
  Identifier (URI) which is of type URL, providing a global addressing space for resources
  involved in an interaction between components as well as facilitating service discovery. The
  URIs can be bookmarked or exchanged via hyperlinks, providing more readability and the
  potential for advertisement.
- **Uniform, Constrained Interface**: Interaction with RESTful web services is done via the HTTP
  standard, client/server cacheable protocol. Resources are manipulated using a fixed set of four
  CRUD (create, read, update, delete) verbs or operations: PUT, GET, POST, and DELETE. PUT
  creates a new resource, which can then be destroyed by using DELETE. GET retrieves the
  current state of a resource. POST transfers a new state onto a resource.

- **Self-Descriptive Message**: A REST message includes enough information to describe how to
  process the message. This enables intermediaries to do more with the message without parsing
  the message contents. In REST, resources are decoupled from their representation so that their
  content can be accessed in a variety of standard formats (e.g., HTML, XML, MIME, plain text,
  PDF, JPEG, JSON, etc.). REST provides multiple/alternate representations of each resource.
  Metadata about the resource is available and can be used for various purposes, such as cache
  control, transmission error detection, authentication or authorization, and access control.

- **Stateless Interactions**: The REST interactions are “stateless” in the sense that the meaning of a message does not depend on the state of the conversation. Stateless communications improve visibility, since a monitoring system does not have to look beyond a single request data field in order to determine the full nature of the request reliability as it facilitates the task of recovering from partial failures, and increases scalability as discarding state between requests allows the erver component to quickly free resources. However, stateless interactions may decrease network performance by increasing the repetitive data (per-interaction overhead). Stateful interactions are based on the concept of explicit state transfer. Several techniques exist to exchange state, such as URI rewriting, cookies, and hidden form fields. State can be embedded in response messages to point to valid future states of the interaction.
