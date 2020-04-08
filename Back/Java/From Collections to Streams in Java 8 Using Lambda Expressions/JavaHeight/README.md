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

____________________________
# Writing data processing Functions with Lambdas in Java 8

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
    Suppliers
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

____________________________
# Data Processing using Lambdas and the Collection Framework

New methods in the Collection API
## Iterable, Collection, List
On Iterable
```java
    import org.goumiesland.newpatternstoexistingapi.Person;
    import java.util.ArrayList;
    import java.util.List;
    import java.util.function.Consumer;
    import java.util.function.Predicate;

    public interface Iterable {
        void forEach(Consumer<? super E> consumer);
    }

    public interface Collection {
        boolean removeIf(Predicate<? super E> filter);
    }

    public interface List {
        boolean replaceAll(UnaryOperator<? super E> operator);
    }

    public interface List {
        boolean sort(Comparator<? super E> comparator);
    }

    class Main{
        public static void main(String[] args){
            Person firstPerson = new Person("Neo", "Dertal", 26);
            Person secondPerson = new Person("Malicia", "Mice", 18);
            Person thirdPerson = new Person("Ethel", "Rice", 24);
            
            List<Person> people = new ArrayList<>();
            people.add(firstPerson);
            people.add(secondPerson);
            people.add(thirdPerson);
    
            people.forEach(System.out::println);
            people.removeIf(person -> person.getAge() < 20);

            List<String> names = new ArrayList();
                    names.add( "Alberta");
                    names.add("Fatoumata");
                    names.add("Debora");
                    names.replaceAll(String::toUpperCase);
                    System.out.println(names);
        }
    }
```

## Map
```java
    import org.goumiesland.newpatternstoexistingapi.Person;
    import java.util.*;
    public interface Map {
        void forEach(BiConsumer<? super K, ? super V> consumer);
    }

   class Main{
        public static void main(String[] args){
            Map<String, List<Person>> map = new HashMap<>();
            Person firstPerson = new Person("Neo", "Dertal", 26);
            Person secondPerson = new Person("Malicia", "Mice", 18);
            Person thirdPerson = new Person("Ethel", "Rice", 24);
            
            List<Person> people = new ArrayList<>();
                        people.add(firstPerson);
                        people.add(secondPerson);
                        people.add(thirdPerson);

            map.put("Paris", people);
            map.put("Beijin", Collections.EMPTY_LIST);
            map.put("Kinshasa", people.removeIf(person -> person.getAge() > 20));

            map.forEach(
                (city, list) ->
                    System.out.println(city + " : " + list.size() + " people")
            );
        }
    }
```

New version of the get()
```java
    import java.util.*;
    import java.util.function.BiFunction;
    public interface Map {
        V getOrDefault(Object key, V defaultValue);
        V putIfAbsent(K key, V defaultValue);
        
        V replace(K key, V newValue);
        boolean replace(K key, V existingValue, V newValue);
    }
```

Complete remapping of a map :
        a BiFunction takes 2 parameters and returns a value.
        The returned value will replace the existing one
```java
    import java.util.*;
    import java.util.function.BiFunction;
    public interface Map {
        void replaceAll(BiFunction<? super K, ? super V, ? extends V> function);
}
```

* NEW * Checks the match between existing kv pair and the one passed
    Then it removes both existing key AND value.
    If one item doesn't match, the existing one stays in the map.
    Before Java 8, it only removed the key
```java
    import java.util.*;
    import java.util.function.BiFunction;
    public interface Map {
        void remove(Object key, Object newValue);
    }
```

A new family of methods : compute*()
3 new methods beginning with "compute". +++ They all return the value :
    that has just been computed
    or that was in the map before
Computes a new value from :
     The key passes as a parameter, that may not be in the map
     The value that may be associated with that key, or null
     The lambda that will compute the remapping
     /!\ Check for null as a returned value
```java
    import java.util.*;
    import java.util.function.BiFunction;
    public interface Map {
        V compute(
            K key,
            BiFunction<? super K, ? super V, ? extends V> remapping);
}
```

If absent, computes a new value from :
     The key passes as a parameter, that should not be in the map
     The lambda to compute the mapping from the key  
```java
    import java.util.*;
    import java.util.function.BiFunction;
    public interface Map {
        V computeIfAbsent(
            K key,
            Function<? super K, ? extends V> mapping);
    }
```
If present, computes a new value from :
     The key passes as a parameter
     The existing value
     The lambda that will compute the remapping
```java
    import java.util.*;
    import java.util.function.BiFunction;
    public interface Map {
        V computeIfPresent(
            K key,
            BiFunction<? super K, ? super V, ? extends V> remapping);
    }
```

merge()
key value to be merged in the existing map
+ a BiFunction that takes a pair of values
    If the passed key is not i the map : adds the kv pair to the map
    If the key is present :
        merge the existing value withe the passed value using the lambda
        note that the remapping takes a pair of values and return a new value
```java
    import java.util.*;
    import java.util.function.BiFunction;
    public interface Map {
        V merge(
            K key, V newValue,
            BiFunction<? super V, ? super V, ? extends V> remapping);
    }
```

```java
   import org.goumiesland.newpatternstoexistingapi.Person;
    class Main{
        public static void main(String[] args){
            Map<String, List<Person>> map = new HashMap<>();
            Person firstPerson = new Person("Neo", "Dertal", 26);
            Person secondPerson = new Person("Malicia", "Mice", 18);
            Person thirdPerson = new Person("Ethel", "Rice", 24);
            
            List<Person> people = new ArrayList<>();
                        people.add(firstPerson);
                        people.add(secondPerson);
                        people.add(thirdPerson);

            map.put("Paris", people);
            map.put("Beijin", Collections.EMPTY_LIST);
            map.put("Kinshasa", people.removeIf(person -> person.getAge() > 20));

            System.out.println(map.getOrDefault("Milan", Collections.EMPTY_LIST));
            map.putIfAbsent("London", Collections.EMPTY_LIST);
            map.get("London").add(secondPerson);
            System.out.println(map.getOrDefault("London", Collections.EMPTY_LIST));

            Map<String, List<Person>> map1 = new HashMap<>();
            Map<String, List<Person>> map2 = new HashMap<>();
            map2.forEach(
            
            );        
        }
    }
```
