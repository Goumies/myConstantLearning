# Spring Boot Fundamentals
[Plralsight](https://app.pluralsight.com/library/courses/spring-boot-fundamentals)
[Repo](https://gitlab.com/videolearning/spring-fundamentals)
Extension of Spring framework to create an app quickly with less code

Makes it super easy to set up configure and run your application

____________________________________   Spring   ____________________________________

                                      Spring Boot
                                      
            Spring MVC                Spring Data           Spring Security
                                      
          Spring Session              Spring AMQP           Spring Batch
____________________________________________________________________________________

Configuration challenges
    XML config files
    Configuration needed
    Annotation based
    
Structure
    Application > Controller > Services > Repository > Database + Servlet Container
        |
    XML Configuration
    
Spring Boot emphasis Convention over Configuration

Simple Deployment

Features of Spring Boot
    Automatic config
    Starter dependencies
    Command line interface
    Actuator
## Spring Boot starters
Starter dependency
    Included in the pom file
        spring-boot-starter-web
            (minimum dependency required to create a web app)
            Automatically adds web app dev lib :
                Spring MVC, REST, Tomcat, Jackson
        spring-boot-starter-test
            Includes testing libraries :
                JUnit, Mockito, Hamcrest, Spring Core, Spring test
        spring-boot-starter-data-jpa
            Includes needed libraries for Spring Data JPA and Hibernate :
                JDBC, Entity Manager, Transaction API, Spring Data JPA, Aspects
        spring-boot-starter-thymeleaf
    Starter pack including all of the lib that we need

## Automatic configuration
Time saving feature
Configures application based on libraries and adds it to project classpath
Maven dependencies configured automatically

## Spring Boot CLI
Application can be entirely written using Groovy scripts
Rapid prototyping

## Actuator
Allows us to see what's going on inside the running Spring application
    Monitor running application
    Manage via HTTP endpoints or JMX
    
We will be able to see :
    Health status
    metrics
    loggers
    audit events
    HTTP trace    

Bootstrapping an application
## Spring Initializr
[Spring Initializr](https://start.spring.io)
pom.xml
    ```
        <parent>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-parent</artifactId>
            <version>2.2.6.RELEASE</version>
            <relativePath/> <!-- lookup parent from repository -->
        </parent>
    ```
    artifact = parent for all spring boot projects
        Allows management of dependencies for multiple child modules at once
        = default config for several projects
        = no version tags required on dependencies

FundamentalsApplication
    ```
        @SpringBootApplication
        public class FundamentalsApplication {
        
        	public static void main(String[] args) {
        
        		SpringApplication.run(FundmentalsApplication.class, args);
        		System.out.println("Hello Pluralsight !");
        	}
        
        }
    ```
## Spring Boot CLI
Generates a project using the CLI
Some prefers it over Spring Initializr

```shell script
    spring init fundamentals2
    spring init --dependencies=web,data-jpa fundamentals3
```
    /!\ Default name = demo in pom.xml
    
```shell script
  cd cli
  spring run app.groovy 
```
    + go to localhost:8080

Automatic config
    Convention over configuration approach
    How it Works
        Process
            Finds JARs on the classpath and auto-configure beans
            => 
        Auto-configures
            Data source for Hibernate (corresponding JAR found on the classpath)
            or DispatcherServlet for Spring MVC (corresponding JAR found on the classpath)
        Non invasive
            If u add ur own beans like datasource bean, the default embedded database support
            backs away. Auto config is always applied after user defined beans have been registered
        Insights
            To check what auto-config is set, start application with --debug switch
            Or add a simple property to application.properties
            Or use the Spring Boot Actuator
    Enabling debug logging
        src/main/resources/application.properties :
        ```
            logging.level.org.springframework: DEBUG
        ```
        enables debug logs and reports it to the console
    Auto config
    src/main/resources/application.properties :
        [docs](https://docs.spring.io/spring-boot/docs/current/reference/html/common-application-properties.html)


Annotations
    @SpringBootApplication annotation
        Very important annotation
        Added to the main application class
        Replaces 3 annotations :
            @SpringBootConfiguration -> replaces @Configuration and annotates a class as a configuration
            @EnableAutoConfiguration -> tells Spring Boot to configure beans
            @ComponentScan -> tells Spring Boot to scan current package and subpackages
        
Profiles
    Fundamentals to the Spring framework
    Different environments Dev / Test / Production
    ```
        spring.profiles.active = dev
    ```
        Defines active profile
    ```
        applications-{profile}.properties
    ```
        Naming format for dedicated application properties file per environment
    ```
        applications-dev.properties
        applications-test.properties
        applications-prod.properties
    ```

## Accessing Data with Spring Boot and H2
Data access
    H2 DB, open-source DB written in Java
        In-memory DB
        Good for POCs, dev env, simple DB
        Easily integrated with Spring
        Administer via the H2 console
        Spring auto-configures H2 related properties, as declared in the pom file
    Default configurations
        H2 defaults :
        ```
            spring.datasource.url=jdbc:h2:mem:testdb
            spring.datasource.driverClassName=org.h2.Driver
            spring.datasource.username=sa
            spring.datasource.password=
            spring.h2.console.enabled=false
        ```
        Overridden defaults :
        ```
            spring.datasource.url=jdbc:h2:mem:bugtracker
            spring.datasource.path=/h2
            spring.h2.console.enabled=true
        ```

Benefits of Spring with JPA
    ORM (Object Relation Mapping) with JPA
        Spring Data JPA (provides repository support for JPA) with
        Hibernate, implementation required in order for JPA to work
                   persistence provider
                    |
        JPA (Java Persistence API), abstraction on JDBC
            to map Java obj on relational DBs
            = just a specification
            = set of guidelines
            = set of empty methods and collection of interfaces
                that only describes Java persistence methodology
                    |
        JDBC (Java DB Connectivity)
                    |
        Persistence Java Store
        
    Spring Data
        pom : spring-boot-starter-data-jpa
        = Hibernate, Spring Data JPA, Spring ORM
    
    
Querying using repositories
    Entities
        Objects living in a DB with tha ability to be mapped to a DB
        @Entity, class level annotation for JPA entity
        Class name = table name to be map with
        Traditionally JPA entities are specified in a persistence.xml file
            BUT, with Spring Boot, this file is not necessary and EntityScanning is used
            All the packages under the Main application class are searched,
            any classed annotated /w @Entity are included
    Repository
        Interfaces extending CrudRepository<ClassToBeManaged, Id>
            No implementation because Spring provides it via CrudRepository
            ```
                public interface ApplicationRepository extends CrudRepository<Application, Long> {
                }
            ```
    On runtime
    ```
        2020-04-29 16:47:47.265  INFO 31131 --- [           main] org.goumiesland.FundamentalsApplication  : The application is: Application{id=1, name='Trackzilla', owner=kesha.williams, description='Application for tracking bugs.'}
        2020-04-29 16:47:47.265  INFO 31131 --- [           main] org.goumiesland.FundamentalsApplication  : The application is: Application{id=2, name='Expenses', owner=mary.jones, description='Application to track expense reports.'}
        2020-04-29 16:47:47.265  INFO 31131 --- [           main] org.goumiesland.FundamentalsApplication  : The application is: Application{id=3, name='Notifications', owner=karen.kane, description='Application to send alerts and notifications to users.'}
    ```
    
    H2 console
    http://localhost:8080/h2-console/

## Configuring a Spring MVC Application with Spring Boot
MVC design pattern
    Spring MVC dependency = spring-boot-starter-web
    Auto-configuration provides :
        Dispatcher servlet
        Error page
        Servlet container (Tomcat is the default)
        JARs
    Model View Control decouples major components to promote faster development cycles
        and works well for developing large scale web applications that need to be supported
        by large teams of developers
    Model = Representation of data in a system
    View = Responsible for displaying data
    Controller = Directing incoming user requests
    ThymeLeaf, templating agent providing support for HTML, Java-based library used to create a web application
        It provides a good support for serving a XHTML/HTML5 in web applications
            Fragments : define repeatable chunks of code,
                reusable in another ThymeLeaf template file
                Components reused across pages
    ```
        spring-boot-starter-thymeleaf
    ```
    Service = Business Logic
    Controller = maps model to the view
    View
        /resources/templates/
        Once thymeleaf is enabled, no extra config necessary
        For any thymeleaf config > application.properties
    ```
        spring.thymeleaf.template-loader-path: classpath:/templates
        spring.thymeleaf.suffix: .html // suffix appended to page name when building an URL
        spring.thymeleaf.tcache: false
    ```
Useful annotations
@Controller stereotype = class level annotation considered by Spring
    whenever an HTTP request arrives
@EnabledWeb Spring MVC annotation is typically used
    BUT Spring automatically adds it when it sees the necessary
    dependencies on the classpath (auto-config)
@GetMapping = provides routing information

Deploy application to Tomcat
    Spring Boot application can be traditionally packaged as a web app in a .war file
        and deployed to a web server OR deployed as an executable .jar file with an embedded server
    Spring Boot Maven Plugin
    ```
        spring-boot-maven-plugin
    ```
        Repackages .jar and .war files to be executable
        For .jar files, it collects the .jar files in the classpath
            and build them as a single runnable .jar file called an Uber .jar
        Runs Spring Boot Application and searches for
            the public static void main method to flag as a runnable class
        Provides built-in dependency resolver that sets the version number
            to match Spring Boot dependencies
        Manages lifecycle of Spring Boot app and generate build infos that
            can be used by a tool called Actuator (provides app monitor and metrics)

## Building a RESTful Web Application with Spring Boot
REST architecture style
    REpresentational State Transfer :
        Set of guidelines used to design APIs, 4 principles
            > Data and functionality are considered resources
                identified through the URI (Uniform Resource Identifier),
                access via web links
            > Resources are manipulated using a fixed set of operations :
                GET - retrieves a resource
                POST - creates a resource
                PUT - updates a resource
                DELETE - removes it
            > Resources can be represented in multiple formats :
                HTML, XML, plain text, JSON... defined by a media type
            > Communication between the client and the endpoint is stateless :
                The server will not remember or store any state about the client
    ```
        @RestController // Simplifies creating RESTful app
        // The controller simply return object data written directly to the HTTP response as JSON
        
        @RequestMapping("/tza")
        // Maps HTTP resquest to the correct handler method in the controller
        // tza wil the root of all requests coming into this API
    ```
        @RestController
        @RequestMapping(...)
            = Spring MVC annotations
            
        @RestController = @Controller + @ResponseBody annotations
        
        All methods return ResponseEntity due to the @ResponseBody implicit annotation
        @ResponseBody in a controller indicates to Spring that the returned value
            of a method is serialized directly to the boby of the HTTP request
            
        ResponseEntity represents the entire HTTP response including status code, headers and response body
            is generic
            ```
            return new ResponseEntity<List<Ticket>>(list, HttpStatus.OK);
            ```

    To test the endpoints : 
    ```
        curl http://localhost:8080/tza/applications
        curl http://localhost:8080/tza/application/1

    ```
    
HTTP response codes
    HttpStatus.OK - 200
    HttpStatus.BAD_REQUEST - 400
    HttpStatus.NOT_FOUND - 404
    HttpStatus.CONFLICT - 409

Annotations
Exception Handling
    ResponseStatusException :
        Programmatic alternative to @ResponseStatus
        Base class Exception used for applying a status code to an HTTP response
        Implementing an instance by providing HTTPStatus + a reason + a cause
        Exceptions can be created programmatically
        Provides a default error mapping returning a JSON response with an HTTP status and the exception
 
## Building a GraphQL Server with Spring Boot
Allows users to choose the data they want to receive, offering more flexibility

GraphQL, query language for APIs or a syntax that describes how to ask for data
    Overview
        REST is the most popular way to expose data from a server
        REST is very rigid (returning all the data points as designed by the dev)
        GraphQL offers greater flexibility in the response returned
        Allows client to specify the exact data needed
        Aggregation of data from multiple sources in the backend
        No longer required to call multiple APIs for needed data
        Sample Query
        ```
            {
            findAllApplications
                {
                    id
                    owner
                }
            }
        ```
        Response
        ```
            {
                "data":
                {
                "findAllApplications":
                    [{
                        "id": "1",
                        "owner": "Kesha"},
                      { "id": "2",
                        "owner": "Jane"}]
                }
            }
        ```
    Dependencies
        ```
            graphql-spring-boot-starter // adds and auto-config a GraphQL servlet accessible at /graphql
            graphql-java-tools // helper library to parse the GraphQL schema
        ```
    Schema
        Defines data points offered via an API
        Data types and relationships
        Operations available
        graphql-java-tools parses schemas ending in .graphqls
        [more about GraphQL schema](https://graphql.org/learn/schema/)
    GraphQL server
    Resolvers, queries and mutations
        A Query Resolver will use our repository to query the DB
        src/main/java/org.goumiesland/resolver/Query.java
        Mutations : update of data stored in the server
            => Creating, updating, deleting
            Mutations are Java classes that implements the GraphQLMutationResolver
                src/main/java/org.goumiesland/mutator/Mutation.java
                The mutation resolver allows Spring to automatically detect and call the right
                    method in response to one of the GraphQL mutations declared inside the schema
                        = 1 method per operation declared in the Mutation part of the schema
    Exception handling
        /exception/ApplicationNotFoundException.java
        ```
            public class ApplicationNotFoundException extends RuntimeException implements GraphQLError {...}
        ```
        GraphQLError provides a field called extensions used to pass additional data to the error obj sent to the client
    GraphiQL, web app allowing execution of queries and mutations against a GraphQL server
        [GraphiQL](http://localhost:8080/graphiql)
        Query : cF Sample Query above
        Mutations :
        ```
        mutation{
            newApplication(
                    name: "Scheduler",
                    owner: "Romy Alula",
                    description: "An app used to schedule") {
                        id
                        name
                        owner
                        description
            }
        }
        ```
        ```
        mutation{
            updateApplicationOwner(
                    newOwner: "Romy Alula",
                    id: "1") {
                        id
                        name
                        owner
                        description
            }
        }
        ``````
        mutation{
            deleteApplication(id: "1")
            }
        }
        ```

## Spring Boot Actuator

## Testing