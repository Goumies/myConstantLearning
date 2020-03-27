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

## Functional interfaces
### How to define a type for lambda expressions

## Functional interfaces
= The type of a lambda, so it has to be written precisely
A lambda expression is an instance of a functional interface
The notion of functional interface has been introduced iin java 8 just for that
Single abstract method
=> Comparator, Runnable, Predicate

```java
    public interface Predicate<T> {
        boolean test(T t);
}
```
Backward compatible with the JDK
= Makes many old versions from java 1 functional interfaces

The java 8 compiler is smart :
    The interface is functional = only 1 method to implement (*NEW *)
    The type of the variable gives the type of the lambda expression
    The parameters & return types must be compatible
    The same for exceptions, if any
    
Functional interface
= regular interface :
    With only 1 abstract method
    Default methods do not count
    Static methods do not count
    Object class's methods do not count
        Super class of every objects in Java. I can modify the javadoc of such methods,
        by overwriting them in my functional interface. But I can't add new methods
        => equals()
        Default methods from the Object class are not allowed (compiler error)
        => hashcode() will not compile

`@FunctionalInterface` = optional annotation, for legacy reasons
(no refactoring or compiling needed) = backward compatibility
This annotation should be put on all the functional interfaces built in java 8
It makes the compiler checks if it really is a functional interface.
Since it can have 1 abstract method and many many default methods.
The compiler will easily go through thousands of lines of code.



## The java.util.function package
Main functional interfaces
Toolbox of the Map / Filter / Reduce pattern
The collection Framework
The Stream API

43 functional interfaces defined, in 4 categories :
    Consumers
    Supplier
    Functions
    Predicates

## The Consumers
Consume an object and do not return anything

```java
    public interface Consumer<T>{
        void accept(T t);
    }
    
    public interface BiConsumer<T, V>{
        void accept(T t, V v);
    }
    
    class Main{
        public static void main(String[] args){
            Consumer<String> printer1 = s -> System.out.println(s);
            Consumer<String> printer2 = System.out::println;
        }
    }
```

## The Supplier
Provide an object, takes no parameter
```java
    import org.goumiesland.newpatternstoexistingapi.Person;
    
    public interface Supplier<T> {
        T get();
    }

    class Main{
            public static void main(String[] args){
                Supplier<Person> personSupplier = Person::new;
            }
        }
```

## The Functions
Take an object and return another object
```java
    import org.goumiesland.newpatternstoexistingapi.Person;
    public interface Function<T, R> {
        R apply(T t);
    }

    public interface BiFunction<T, V, R> {
        R apply(T t, V v);
    }

    // Doesn't define any methods. Just an interface extending Function
    public interface UnaryOperator<T> extends Function<T, T> {
    }

    
    // Doesn't define any methods. Just an interface extending Function
    public interface BinaryOperator<T> extends BiFunction<T, T, T> {
    }

    class Main{
        public static void main(String[] args){
            Function<Person, Integer> ageMapper = Person::getAge;
        }
    }
```

## The Predicate


```java
    public interface Predicate<T> {
        boolean test(T t);
    }
    
    public interface BiPredicate<T, U> {
        boolean test(T t, U u);
    }

   class Main{
        public static void main(String[] args){
            Predicate<Person> ageGT20 = person -> person.getAge() > 20;
        }
    }
```

## Functional interfaces for Primitive Types
IntPredicate
IntFunction
IntToDoubleFunction
...