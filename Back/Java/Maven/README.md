# Maven fundamentals

## Build tool
Produces 1 Artifact (1 version of) :\
.jar / Component / ZIP file

Manages Dependencies

## Project Management Tool
Handles Versioning / Releases

Describes Project

Produces Javadocs / Site info

### Maven is Apache Software Foundation property
Is built with Maven (site generation plugin)
Open Source

## Why
Repeatable builds
DevOps / SysOps

Transitive dependencies (dependencies of dependencies)

Environment

Local repo for jars common to multiple projects

IDE and Standalone (command line)

Preferred method to work with build tools like Jenkins (CI)

Maven configure the classpath of the IDE, by adding all the project dependencies
--> tells the JVM where the required libraries are
(More about [Classpath](https://stackoverflow.com/questions/21983858/classpaths-in-ides))
([Setting the Classpath - java 8](https://docs.oracle.com/javase/8/docs/technotes/tools/windows/classpath.html))

### Ant VS Maven
Ant developed to replace Make, a not cross-platform build tool

Ant built on top Java and using XML = meant to be used in cross platform

Ant = verbose and imperative not-standard instructions = scripting tool

Maven = Full Featured tool

With lot of implicit functionality

Inheritance

Consistent across projects and platforms

Transitive dependencies (+++)

Versioned, it handles things by snapshot (added context)

= 1 of the main goals of its design

+ cF Pros and Cons slide, p14 (maven-fundamentals > 02 > introduction-to-maven-slides)


[Maven download](maven.apache.org/download.cgi)


Ant : scripting tool
Maven : project lifecycle