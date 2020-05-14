# Spring Framework: Spring MVC Fundamentals

## What is Spring MVC
Standard for Java Web development.
Originally created for frontend development
+ Later, became an alternative to serve services -> REST full support
+ SPA dominating web development -> full support
Java config, rather than XML

Architecture MVC
    View => REST service, JSP page
    Controller => Spring Bean
    Model => Persistence, with Relational or Non-Relational DB, JPA, Hibernate
        * NEW * : config through xml
        
Vocabulary
    SPA : Single Page App
    DispatcherServlet : A Spring MVC Web app begins its config w/ this entry point
    Controller : Command Pattern Handler implementation (Behavioural Design Pattern)
    RequestMapping : URL and Request Type
    ViewResolver : Locates the view and serve it back up, can be used to find a template / HTML / JSP page / RESTful service
    servlet-config : Configuration file
    POJO : Plain Old Java Object, no-args constructor + properly named getters and setters
    Spring Bean : Spring configured POJO
    
## Creating your first MVC App
Java 11 + Maven + Tomcat
### Spring Boot
[spring initializr](https://start.spring.io/)
= Self contained
Run > localhost:8080 > Whitelabel Error Page because there is no index.html or any config.
resources > static > + index.html

/!\ For files that have never been deployed to the server, we have to restart and deploy again.

### WAR vs Contained
Spring Boot doesn't recommend deploying self contained JARs (cf doc)

[Instance of Tomcat](http://tomcat.apache.org/download-90.cgi)
Configure IntelliJ
    IntelliJ > Preferences - command +, > Build, Execution, Deployment > Application Servers > + > Tomcat server
    Change project to be packaged as a WAR :
        pom.xml > package type associated :
            ```xml
                // under version
                <packaging>war</packaging>
                
                // Add Tomcat dependency between starter-web & starter-test
                <dependency>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-starter-tomcat</artifactId>
                    <scope>provided</scope>
                </dependency> 
            ```
    = standalone Tomcat enabled WAR 
        + Add configuration > + Tomcat Server > Local > 
            JRE : 11
                > Deployment tab > + > Artifact > confernece:war > Application context : /context
                > Server tab > check + OK
                
War apps static files are served from /webapp :
    /main/webapp
    
Run failed > Permission denied >
    ```shell
        chmod a+x /Users/romyalula/Documents/dev/tools/apache-tomcat-9.0.35/bin/catalina.sh  
    ```
Configuration
    4 areas:
        pom.xml > maven dep
        Config
        Java files : Config, controllers...
        View
        
+ 2 new directories for jsp views :
    /webapp/WEB-INF/jsp
    
    + new file :
        /jsp/greeting.jsp
        
Change config :
    ConferenceApplication > + extends SpringBootServletInitializer
    = Launch app w/ the desired config we're used to use inside of a web app :
        Setup internal View Resource Resolver
        Resolve JSP pages
        Setup STL (Standard Template Library) for us
    + application.properties :
    ```properties
        spring.mvc.view.prefix=/WEB-INF/jsp/
        spring.mvc.view.suffix=.jsp
        // = internal View Resolver
    ```
        prefix = where to look for view
        suffix = what format
        
Java code :
    main/package > + new controller controller.GreetingController :
    ```java
        @Controller
        public class GreetingController {
            
            // URL = method call
            @GetMapping("greeting")
            public String greeting(Map<String, Object> model) {
                model.put("message", "Hello Romy !"); // key = variable to jsp page
                return "greeting"; // looks for a jsp page called greeting
            }
        }
    ```

## Understanding the Structure of Spring MVC Applications
Model-View-Controller pattern, n-tier application
Presentation Layer > Business Logic > Data Layer > Business Logic > Presentation Layer
    Separation of concerns (things in the right layer so it can be re-architectured later)
    Reusable layers (a purpose and a point that we trying to drive)
    Maintenance / Refactoring
Components
    Controller :
        No business logic
        Handles req/res
        Coordinate w/ service and repo
        @Controller
        Handles exceptions and view routing
    Service :
        @Service
        Business Logic belongs here
        Describes verbs/actions of system
        Ensure business obj state
        Transactional
        Often same methods as repo but a different focus
    Repository (DAO, Data Access Object) :
        @Repository
        Nouns (data) of the system
        DB interaction
        One-to-one object mapping
        Often one-to-one DB table mapping
        
## Creating Controllers in Spring MVC
Heart and soul of Sprig MVC
### What is a Controller
Separation of duties
Central concept of the framework
Chooses what to do based on a user action req
Responsibility :
    Interpret and transform
    Access Business Logic
    Determines view or response type
    Interpret exceptions
Very lightweight
    @Controller
    Associated request mapping => @GetMapping(value = "/greeting")
```java
    // In RegistrationController
    @Controller
    public class RegistrationController {
    
        @GetMapping("registration")
        public String getRegistration(Map<String, Object> model) {
            
            return "registration"; // internal lookup to registration.jsp
                /*
                    this return allows the Dispatcher Servlet to handle every web req
                    the string value = value.jsp
                */
        }
    }
```

```java
    // In RegistrationController
    
    @SpringBootApplication
    public class ConferenceApplication extends SpringBootServletInitializer {
        // ...
    }   
``` 
    @SpringBootApplication + SpringBootServletInitializer
        = tells the app server to create a Dispatcher Servlet (by extending SpringBootServletInitializer) and start serving up things
            + the @SpringBootApplication makes Spring look for @Controller & @GetMapping
    To interact w/ the Dispatcher Servlet > application.properties
    
### Passing Parameters
Lib provided by Spring (rather than standard HTML input tags)
Binding attribute to object approach
    @ModelAttribute
    HTTP Get / @Get
    HTTP Post / @Post
    POJO based
    Validated binding result
    
Adding POST method to registration.jsp :
    ```jsp
        <%-- + import form lib --%> 
        <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

    ```
    Unknown path "name" >
        New class model.Registration
        + in RegistrationController, change getRegistration parameter to :
```java
@Controller
public class RegistrationController {

    @GetMapping("registration")
    public String getRegistration(@ModelAttribute ("registration")Registration registration) {
    // = binding (by our model) the Registration object to the model attribute  

        return "registration";
    }
}
```
        + in registration.jsp :
        ```
                <form:form modelAttribute="registration">
        ```
        + support POST method :
        ```
            @PostMapping("registration")
            public String addRegistration(@ModelAttribute ("registration")Registration registration) {
                System.out.println("Registration: " + registration.getName()); // Registration: Romy A
                return "registration";
            }
        ```

