# How objects are utilized ?

## Adapter
Simple solution, easy to implement
Adapter typically provides multiple adapters
An adapter holds one single reference
Deals with legacy code
Works after code has been designed
Provides a different interface to legacy code that the one originally intended

Don't complicate
Don't add functionality

## Bridge
Designed upfront
Abstraction and implementation can vary independently
Complex but provides flexibility
Design for uncertainty
More than composition

Increases complexity
Conceptually difficult to plan
Can be confusing

Inheritance + Composition
Abstract Class + Interface through composition

## Composite
Tree structured, with Component (abstract class) as the root
Leaf or Composite, same operations
Composite knows about child objects and what it can do with it
Unity between objects
Generalizes a hierarchical structure
Easier for the clients, everything handled the same way

Can overly simplify system, harder to restrict
Implementation can be costly
Composite (hierarchy) != Composition (one object containing aanother)

## Decorator
Hierarchical pattern building functionality at each level
While using composition from similar data types
Inheritance based
Alternative to subclassing
Constructor requires instance from hierarchy
Modifies behavior of the contained entity (adds)
Doesn't change the concrete class / object

```
Sandwich sandwich = new DressingDecorator(new MeatDecorator(new SimpleSandwich()));

```

New class for every feature added
Multiple little objects
Confused with inheritance
Can be complex for clients

## Facade (pronounced in french)
Simplify interface or client usage (main goal)
Reduce dependencies on outside code
Usually a refactoring pattern
Composition in its design
Typically encompasses full lifecycle
Encompasses an entire API / package
Easy to implement

Should think about API design
Overused like the Singleton
Works with composites

## Flyweight
Minimizes memory use by sharing data with similarly typed objects
Optimization pattern
Immutable objects
Large number of similar objects
All primitive with wrapper => Integer, Boolean

Examples :
java.lang.String

Pattern of patterns :
Utilizes a Factory to retrieve flyweight objects after they've been created 
Encompasses Creation and Structure

Complex pattern
Premature optimization
Designed upfront
Used a lot by the core API (String, Integer, Boolean...)

## Proxy