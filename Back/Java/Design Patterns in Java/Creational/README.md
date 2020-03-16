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

## Factory

## AbstractFactory