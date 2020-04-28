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
Setter Injection, all beans are singletons
    and they will only execute methods the first time that it's called
Constructor Injection works just like Setter Injection

Creates and wires java objects

### Annotations in Spring
### XML configuration method