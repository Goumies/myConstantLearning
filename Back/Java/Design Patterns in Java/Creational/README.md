# How objects are created ?

## Singleton
One private constructor method - no args
No interface (private property)

Guarantees only one instance
Easy to implement
Solves a well defined problem

To use wisely, too many Singletons slow the application

Lazy load it
```
if(instance == null)
```

Forbid any Reflection
```
if(instance != null) {
 			throw new RuntimeException("Use getInstance() method to create");
 		}
```

Make sure to make it threadsafe :
```
... volatile Singleton instance = null;
```
```
synchronised(MySingleton.class){ ... }
```


## Builder
Handles complex constructors (many arguments, telescoping constructors)
No interface required
Can be a separate class
Works with legacy code

Fluent design / interface

## Prototype
Lighter weight construction
Unique call of new in a single place, the prototype for as many instances as required
Unique instance every time, copy of itself
Can help with performance issues in application with a lot of objects
Registry with a Map field and loadItems() in the constructor and createItem() method
`createItem()` clones the instance stored in the registry
clone() or genericClone() based on clone() from Cloneable interface

Usually needs to be used with another pattern
Requires more code if Deep Copy intended (only shallow copies)
Don't necessarily jump to Factory 

## Factory
Exposes a common interface
Specified by architecture, implemented by user
Returns various instances, multiple constructors
Contract driven (abstract class or interface)
Parameter driven
Subclasses with `switch` on Enum of types
Adaptable to environment more easily
Solves complex creation
Opposite of a Singleton

Involves more complexity
Warning, creation takes place in the subclasses

## AbstractFactory
Factory of Factories
Factory of related objects
Buit through Composition
Parameterized create method
Concrete Classes
Implemented w/ a Factory
Hides the Factory
Abstracts Environment

Difficult to implement
Very problem specific
Grouping of factory
Heavy abstraction (general software contracts)
Framework pattern