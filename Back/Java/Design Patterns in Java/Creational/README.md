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

Usually needs to be used with another pattern
Requires more code if Deep Copy intended (only shallow copies)
Don't necessarily jump to Factory 

## Factory

## AbstractFactory