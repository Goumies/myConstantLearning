# Spring Fundamentals

## What is Spring
Originally created to make  Java applications without EJBs

Spring is 
    Inversion of Control Container
    made for Dependency Injection
    Framework to reduce the complexity around JEE
    providing a way to implement Enterprise development without EJBs
    Now it's primarily used to avoid EJBs
    Enables the enterprise development without an application server
    /!\ Tomcat is NOT an application server but just a web server
        (lightweight standard container)
    POJO based and interface driven
    Unobtrusive
    using AOP/Proxies to apply things like transactions to our code
    built around Best Practices
        = Singleton, Factory, Template Method, annotation based config
        
The Problem
    Testability
    Maintainability
    Scalability
    (Strong Coupling)
    Complexity
    Business Focus
    
Business Focus & JDBC
    Only interest for the business = request
    
The Solution
    Remove config / lookup code
    Focus
    Testing
    Annotation / XML based
    Interface based
    Template methods palette
    
## How it works
Spring = kind of glorified HashMap

POJOs + HashMap (Application context, Spring configured container /w all its dependencies wired to it) + Registry

## Why Spring
Make existing tasks easier. Earlier design patterns were based on JEE Blueprints to help establish better code
and make repeatable processes. But made code brittle and unrepeatable

WORA : Write Once Run Anywhere

No hardcoded configuration in the project
Spring removes configuration code from the project

## Configuration
### Java configuration in Spring approach (most popular config)
No applicationContext.xml
Earlier versions of Spring required too much XML
Later versions included Namespaces
Now everything is available to be configured via Java

@Configuration
    replaces applicationContext.xml
    class level annotation
    
@Bean
    defines Spring Beans
    method level annotation
    registers the bean inside Spring
    makes the bean available through the application
    
No convention for class or method names, annotations only matter for Spring
Setter Injection, all beans are singletons per default
    and they will only execute methods the first time that it's called
Constructor Injection works just like Setter Injection

Creates and wires java objects

### Spring Scopes and Autowiring
Scopes
    Go hand in hand with Pattern
    BUT Scope != Pattern
    Spring uses design patterns
    
5 scopes
    Valid in any configuration
        Singleton
        Prototype (new bean per request)
    Valid only in web-aware Spring projects
        Request
        Session
        Global
        => Spring MVC, Microservices, SPA
        
SINGLETON
    Default bean scope
    Single instance per Spring container (a JVM can contain several Spring container)
    
    @Scope("singleton")
    = Maven transitive dependency of Spring
    
        @Scope(value = BeanDefinition.SCOPE_SINGLETON)`
        
        ```
        org.goumiesland.service.SpeakerServiceImpl@483f6d77
        Romy
        org.goumiesland.service.SpeakerServiceImpl@483f6d77
        ```

PROTOTYPE
    Instance per request
    Guaranteed unique
    Opposite of Singleton

        @Scope(value = BeanDefinitionSCOPE_PROTOTYPE)``

        ```
        org.goumiesland.service.SpeakerServiceImpl@1b1426f4
        Romy
        org.goumiesland.service.SpeakerServiceImpl@581ac8a8
        ```
        
Web Scopes
    Spring MVC
    Request : bean per HTTP request
        like a kind of Prototype bean for the lifecycle of a bean Request
    Session : bean per HTTP session
        alive as long as a user session is alive on a website
    GlobalSession : bean per application
        alive until the application is not deployed anymore or the server is rebooted

Autowired
    Great technique to reduce the wiring up and configuration of an app
    Convention over configuration
    @ComponentScan(Where to look for autowired annotations)
    ```@ComponentScan({"org.goumiesland"})```
        + @Bean
        + Autowired By Name / Instance Type
        `@Autowired`
            ```
                SpeakerServiceImpl()
                SpeakerServiceImpl repository constructor
                SpeakerServiceImpl setter
           ```

### Annotations in Spring
Stereotypes
    @Component ( = @Bean BUT class level annotation)
    @Repository
    @Service ( = Business Logic)
    @Controller (Spring MVC, web or Micro services for app)

```
    @Autowired
    public void setRepository(SpeakerRepository repository) {
        System.out.println("SpeakerServiceImpl setter");
        this.repository = repository;
    }

    SpeakerServiceImpl()
    SpeakerServiceImpl setter
    org.goumiesland.service.SpeakerServiceImpl@2e385cce
    Romy
    org.goumiesland.service.SpeakerServiceImpl@2e385cce
```
```
    @Autowired
    public SpeakerServiceImpl(SpeakerRepository speakerRepository) {
        System.out.println("SpeakerServiceImpl repository constructor");
        repository = speakerRepository;
    }

    SpeakerServiceImpl repository constructor
    org.goumiesland.service.SpeakerServiceImpl@2c1b194a
    Romy
    org.goumiesland.service.SpeakerServiceImpl@2c1b194a
```

### XML configuration method
Why use XML
    First historical approach
    Simpler
    Separation of concerns

applicationContext.xml
    Standard name associated with Spring
    Root of application in Spring
    Spring context sort of a HashMap
    Can simply be a registry
    Namespaces aid in configuration / validation
    
Namespaces
    beans : dictionary for the properties that we can use
        to create a bean inside our application
        = POJOs
        
XML Setter injection (better for existing code)
    Name-based
    ```
        <bean name="speakerService"
              class="org.goumiesland.service.SpeakerServiceImpl">
            <property name="speakerRepository"
                ref="speakerRepository" />
        </bean>
    ```
    
XML Constructor injection
    Guaranteed contract
    Constructor defined for each situation
    Can be used together with setter injection
    Index-based
    
    ```
        <bean name="speakerService"
              class="org.goumiesland.service.SpeakerServiceImpl"
            autowire="constructor"
        >
            <!-- Constructor injection-->
            <constructor-arg index="0" ref="speakerRepository" />
        </bean>
    ```
    
Autowiring
    4 types of autowiring
        byType (by default, if no name. Fatal error when multiple similar types)
        byName
        constructor (constructor-arg)
        no (none for autowiring)
    
    ```
        <bean name="speakerService"
              class="org.goumiesland.service.SpeakerServiceImpl"
            autowire="constructor"
        >
        </bean>
    ```

## Advanced Bean Configuration
Bean Lifecycle
    Instantiation
        |
        Populate Properties
        |
        BeanNameAware
        |
        BeanFactoryAware
        |
        Pre Initialization - BeanPostProcessors
        |
        InitializeBean
        |
        initMethod
        |
        Post Initialization - BeanPostProcessors

            
### BeanPostProcessor
    Annotations recommended for configuration related methods
    Not for logging or handling connections (Spring does it for us)
    ```
        // SpeakerServiceImpl
        @PostConstruct
        private void initialize() {
            System.out.println("We're called after the constructors");
        }
        
        // SpeakerServiceImpl
        @PreDestroy
        private void initialize() { ... }
    ```
    
### FactoryBean (create Spring Bean as static method out of it)
Builds on initMethod concept
Factory Method Pattern
Integrate Legacy code in a application
Contract without Constructor
Static methods

### SpEL (Spring Expression Language)
Typically used in libraries but can be used to modify application
Manipulate Object Graph
Evaluate at Runtime
Configuration

### Proxies
Spring AOP (Aspect Oriented Programming) Proxies
    Spring utilizes Proxies
    When doing something framework or library based
    @Transactional : starting point of the codebase in which
        you want the following code tob be surrounded with a transaction

### Profiles (used in devOps / configuration per environment scenario)
Bean profiles
    Set up specific code for a dedicated environment
    Swap configuration at runtime
    @Profile("dev") : chosen name
        + Edit configs > VM options : -Dspring.profiles.active=dev
        = Make the bean available on required profile option submission
        = Allow specific code on specific environment