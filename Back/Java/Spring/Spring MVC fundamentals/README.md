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
[spring initializr](https://start.spring.io/) + Spting Web
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
                > Deployment tab > + > Artifact > conference:war > Application context : /context
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

## Creating Views in Spring MVC
Standard convention :
    Views are located in /webapp/WEB-INF/

= From self contained to executed WAR file addition
= Serves up the jsp files and route them to the final user

### Resolving a View
```java
    @Controller
    public class RegistrationController {
    
        @GetMapping("registration")
        public String getRegistration(@ModelAttribute("registration") Registration registration) {
            return "registration"; // used by the View Resolver to find the jsp page with this title
        }
    }
```

ViewResolver
    application.properties > prefix + returned title + suffix
    @SpringBootApplication + SpringBootServletInitializer
        = Configures the ViewResolver
    /!\ This can be overridden w/ a new config => ConferenceConfig.java
```java
    // How it internally works with @SpringBootApplication + SpringBootServletInitializer
    @Configuration
    public class ConferenceConfig {
    
        @Bean
        public ViewResolver viewResolver() {
            InternalResourceViewResolver bean = new InternalResourceViewResolver();
            bean.setPrefix("/WEB-INF/jsp/");
            bean.setSuffix(".jsp");
            bean.setOrder(0);
            return bean;
        }
    }
```
    @SpringBootApplication has a component scanner that tells it to go look for any other class labeled @Configuration
        = In those config, tells it to load up the beans
    
    In Spring MVC, Views are resolved :
        Controller
            builds a Model
            passes the Model to a View Resolver
        View Resolver
            determines the correct View
            chooses the appropriate View based off of that req
    
    Various ViewResolvers are provided by Spring,
    and we can create custom ViewResolver (= extending ViewResolver interface).
        Some of these ViewResolvers are used for templating tools like ThymeLeaf or FreeMarker
                                              or templating layouts for internationalization purpose

### Resolving Static Files
Why do we wanna host up static files from inside of our Spring MVC app :
    Implement security on them
    Make sure they're logged in
    For caching purpose
    
Adding new resource handlers :
```java
@Configuration
public class ConferenceConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/files/**")
                .addResourceLocations("/WEB-INF/pdf/");
    }
    
    // ...
}
```
Restart server > http://localhost:8080/conference/files/AI%20interview-consent.pdf

## Using Java Server Pages with Spring MVC Views
I18N - Internationalization

### Interceptors (middelware)
Usages :
    Logging
    Security
    I18N
    Performance Monitoring
    
### I18N
SessionLocaleResolver
    Ties our current session to a locale
```java
@Configuration
public class ConferenceConfig implements WebMvcConfigurer {

    @Bean
    public LocaleResolver localeResolver() {
        SessionLocaleResolver sessionLocaleResolver = new SessionLocaleResolver();
        sessionLocaleResolver.setDefaultLocale(Locale.FRANCE);
        return sessionLocaleResolver;
    }
}
```

LocaleChangeInterceptor
    Looks for a parameter either through a hidden element / on an URL string as a query parameter / ...
    Sees if it should intercept that change
```java
@Configuration
public class ConferenceConfig implements WebMvcConfigurer {
    
    @Bean
        public LocaleChangeInterceptor localeChangeInterceptor() {
            LocaleChangeInterceptor localeChangeInterceptor = new LocaleChangeInterceptor();
            localeChangeInterceptor.setParamName("lang"); // what parameter we're looking for
            return localeChangeInterceptor;
    }
}
```

Add Interceptor to the InterceptorRegistry
```java
@Configuration
public class ConferenceConfig implements WebMvcConfigurer {
 
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(localeChangeInterceptor());
    }
}
```
    Good practice : Overriden methods on top
    
Add 2 new properties :
    resources/messages.properties
        ```
        # labels
        name=Nom
        
        # buttons
        save.changes=Enregistrer Modifications
        ```
    resources/messages_es.properties
        ```
        # labels
        name=Nombre
        
        # buttons
        # save.changes=Save Changes
        save.changes=Guardar cambios
        ```
    In registration.jsp :
    ```jsp
        <%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
        <%-- ... --%>
        <%-- Name: becomes --%>
        <spring:message code="name"/>:

    ```
    > http://localhost:8080/conference/registration
        Registration
        Nom:	
    > http://localhost:8080/conference/registration?lang=es
        Registration
        Nombre:
    
### PRG - Post-Redirect-Get pattern
= Technique to eliminate form resubmission
= User posts to Controller
    > Controller does the intended requested action
        > Before returning the View back to User,
            ViewResolver is told by Controller to internally redirect
            Clears out the form
            And does a GET to /registration
In RegistrationController :
```java
@Controller
public class RegistrationController {

    // ...

    @PostMapping("old-registration")
    public String addRegistration(@ModelAttribute("registration") Registration registration) {
        return "registration"; // keeps old input ?
    }
    
    @PostMapping("registration")
    public String addRegistration(@ModelAttribute("registration") Registration registration) {
        return "redirect:registration"; // add "redirect:"
    }
}
```
    "redirect:" = 

## Using ThymeLeaf Spring MVC Views
Lightweight View framework
Minor setup required in our app
If the app is a self contained JAR, this is the recommended templating framework

Dependency
```xml
    <dependency>
        <groupId>org.thymeleaf</groupId>
        <artifactId>thymeleaf-spring5</artifactId>
        <version>3.0.11.RELEASE</version>
    </dependency>
```
/!\ order is important because it determines the loading order of dep in the classpath
= After spring-boot-starter-tomcat
+ Before spring-boot-starter-test

### Template Resolver
Configures where the template files should be located and their extension
+ the View Resolver sets the order and references these templates

In ConferenceConfig, we define the  Template Resolver:
```java
@Configuration
public class ConferenceConfig implements WebMvcConfigurer {

    // On top
    @Autowired
    private ApplicationContext applicationContext;
    
 
    @Bean
    public SpringResourceTemplateResolver templateResolver() {
        SpringResourceTemplateResolver templateResolver = new SpringResourceTemplateResolver();
        templateResolver.setApplicationContext(applicationContext);
        templateResolver.setPrefix("/WEB-INF/views/");
        templateResolver.setSuffix(".html");
        return templateResolver;
    }
}
```
### Template Engine
Spring Template Engine = pretty unique to ThymeLeaf
= Will process the project > Substitute the model values from Spring into our pages to be displayed  
```java
@Configuration
public class ConferenceConfig implements WebMvcConfigurer {
    
    @Bean
    public SpringTemplateEngine templateEngine() {
        SpringTemplateEngine templateEngine = new SpringTemplateEngine();
        templateEngine.setTemplateResolver(templateResolver());
        templateEngine.setEnableSpringELCompiler(true);
        return templateEngine;
    }
}
```

### View Resolver
Takes whichever loaded template (after the Template Resolver looked up the actual template)
    + Returns that based off the name
=  Template Resolver & View Resolver work in conjunction
/!\ To work with JSP & ThymeLeaf together (not common),
    We must reorder the View Resolver lookup for files : 1st ThymeLeaf then JSP
```java
@Configuration
public class ConferenceConfig implements WebMvcConfigurer {
    
    @Bean
    public ViewResolver viewResolver() {
        InternalResourceViewResolver bean = new InternalResourceViewResolver();
        bean.setPrefix("/WEB-INF/jsp/");
        bean.setSuffix(".jsp");
        bean.setOrder(1);
        return bean;
    }

    @Bean
    public ViewResolver thymeleafViewResolver() {
        ThymeleafViewResolver viewResolver = new ThymeleafViewResolver();
        viewResolver.setTemplateEngine(templateEngine());
        viewResolver.setOrder(0);
        return viewResolver;
    }
}
```
    + New file /WEB-INF/views/thyme.html
    ```html
        <!DOCTYPE html>
        <!--
            xml name space makes it a ThymeLeaf page and allows us to utilize
            elements described in there => th:text below
        -->
        <html xmlns:th="http://www.thymeleaf.org">
            <head>
                <title>Template</title>
            </head>
            <body>
                <h1>Thymeleaf Integration</h1>
                <p th:text="${message}"></p>
            </body>
        </html>
    ```
    + In GreetingController
    ```java
    @Controller
    public class GreetingController {
    
        // ...
    
        @GetMapping("thyme")
        public String thyme(Map<String, Object> model) {
            model.put("message", "Hello ThymeLeaf !");
            return "thyme";
        }
    }
    ```
    > http://localhost:8080/conference/thyme
    = OK
    But <- + Click on Greeting link = KO HTTP 500

## Validating Objects in Spring MVC Applications
### JSR Bean Validation
[Réf JMDoudoux - La validation des données](https://www.jmdoudoux.fr/java/dej/chap-validation_donnees.htm)
JSR 303 (Java 5)
JSR 349 (Java 7)
JSR 380 (Java 8 and later)

Another approach (not discussed in this course) could be :
    Validator Interface
        Used before JSR 303
        Very programmatic
        Not deprecated
        Separation of concerns is made hazy, Business Logic get scripted in the interface
        More advanced validation -> Service tier : Custom class to handle it properly there
    
Dependency
The Bean Validator reference implementation is an instance of Hibernate Validator.
Even though we're not using Hibernate ORM, the Validator has nothing to do with DB
```xml
<dependency>
    <groupId>org.hibernate.validator</groupId>
    <artifactId>hibernate-validator</artifactId>
    <version>6.1.5.Final</version>
</dependency>
```

What object do we want to validate :
```java
    public class Registration {
    
        @NotEmpty
        private String name;
    
        public String getName() {
            return name;
        }
    
        public void setName(String name) {
            this.name = name;
        }
    }
```
= + @NotEmpty annotation on the property to validate

In RegistrationController :
```java
@Controller
public class RegistrationController {

    // ...

    @PostMapping("registration")
    public String addRegistration(@Valid @ModelAttribute("registration")
                                              Registration registration,
                                  BindingResult result) {
        if (result.hasErrors()) {
            System.out.println("There were errors !");
            return "registration";
        }
        return "redirect:registration";
    }
}
```
= + @Valid annotation on the passed object constrains it to be a valid Registration
    + BindingResult result to handle errors 
    
BindingResult reference
    contains
        any error
        and a flag that notifies us that was a validation error
            so we can direct to the correct view

+ Notify the user, in case of error. In registration.jsp :
```
    <style>
        .error {
            color: #ff0000;
        }

        .error-block {
            color: #000;
            background-color: #ffEEEE;
            border: 3px solid #ff0000;
            padding: 8px;
            margin: 16px;
        }
    </style>

    <%-- ... + --%>
    <form:form modelAttribute="registration">
        <form:errors path="*" cssClass="error-block" element="div" />
```
    > http://localhost:8080/conference/registration
        Registration
        ne doit pas être vide
        Nom:	

### Custom Error Messages
In registration.jsp, field specific validation :
```jsp
    <td>
        <form:input path="name"/>
    </td>
    <td>
        <form:errors path="name" cssClass="error" />
    </td>
```
+ In messages.properties :
```properties
# validations
NotEmpty.registration.name=Le nom ne peut pas être vide. Merci de le renseigner
```
+ In messages.es.properties :
```properties

# validations
NotEmpty.registration.name=El nombre no se puede ser vacío. Por favor rellenarlo
```

## Using Client-side JavaScript in Spring MVC Applications
### Spring config to serve REST (all about AJAX)
New Model User
+ New Controller UserController annotated with @RestController

The @RestController
    Makes sure that every call going in and out of here looks at the content type
    and the except headers to see how and what it should return

    > http://localhost:8080/conference/user
    {"firstName":"Romy","lastName":"Alula","age":70}
    = Response in JSON
    
    > http://localhost:8080/conference/user?firstname=Pimprenelle&lastname=Mazette
    {"firstName":"Pimprenelle","lastName":"Mazette","age":70}
    
    For POST call, Postman allows us to easily set the POST body
    Or curl commands :
    `curl -d "firstName=Pimprenelle&lastName=Mazette&age=43" -X POST http://localhost:8080/conference/user`
        = {"firstName":"Pimprenelle","lastName":"Mazette","age":43}
        
### jQuery
+ main/resources/static/user.js
+ main/resources/static/user.html