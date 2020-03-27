# Lambda expressions in Java 8
A new way of writing instances of anonymous class

## How to write, build and use lambdas

Examples :
    A basic Comparator
    A Runnable
    = passed code as a parameter, thanks to anonymous class (only possible way in Java)
    
Remarks :
    Possible modifiers on the parameters of a lambda expression :
        `final`  prevents modification of tha-e parameters by the code of this lambda expression
        Annotations read by the Reflection API
    /!\ It's impossible to specify the returned type of a lambda expression (=> cast)
    Parameters types can be omitted = light weight lambda expressions
    
## Method References
### An alternative syntax for lambda expressions

```
person -> person.getAge();
==
Person::getAge;
```

/!\ Not to be confused with a static method

## How to create a new API
### Lambdas + default methods + static methods
All introduced in Java 8\
[Default method](https://docs.oracle.com/javase/tutorial/java/IandI/defaultmethods.html)

Default and Static methods's purpose it's to add new functionality to existing interfaces
And assure compatibility with existing code

