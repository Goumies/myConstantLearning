# Maven : Structure

## Goals (= plugins, = commands)
`clean`       Deletes `/target` and its generated sources\
`compile`     Compiles all the source code and copy .properties file and generated skeletons (like web services) to `/classes`
`package`     Runs `compile`, runs unit tests and package that up, based on the type defined in pom.xml
`ìnstall`     Download all the dependencies, runs `package` and install the resulted package in the local repository, default location /HOME/.m2
`deploy`      Runs `install` and deploys it to remote or corporate repository

## Overwriting goals : Build section
~/.m2/repository = Maven default storage
Stores artifact using info <groupId>/<artifactId>/<version>

`<finalName>helloMavenWorld</finalName>`

________________________________________________________

# Maven : Dependencies

List what we need thanks to <groupId>/<artifactId>/<version>

## Versions
Release number of the artifact we want to use
All internal developments should end with SNAPSHOT

SNAPSHOT                    the only specific naming convention = development in progress
Release                     no specific naming convention\
myapp-1.0-SNAPSHOT.jar      
myapp-1.0-M1.jar            M1 = milestone release
myapp-1.0-RC1.jar           RC1 = release candidate
myapp-1.0-RELEASE.jar       RELEASE
myapp-1.0-Final.jar

/!\ The build of a SNAPSHOT project will attempt to update every SNAPSHOT type dependency in the local repository

## Types
Packaging types
    pom, -jar, war, ear,- maven-plugin
    - - = glorified ZIP files

Dependency Pom
    dependency from a pom package

## Transitive dependencies
One of the reasons why people started using Maven
Dependencies required by the dependencies we need in our project

In case of conflict, the newer version is preferred

## Scopes (6)
compile         Default scope, all resources available everywhere in the app 
provided        Like compile, the artifact will be available during the entire build cycle
                => XML APIs, Servlet API, no servlet in the final artifact 
                = provided by the container that we are deploying our app to
                
runtime         needed for execution for dynamically loaded at runtime items 
                => Driver Manager resource bundled with the application using JDBC to connect to DB
                
runtime != provided

test            test compilation and execution phase only
                => JUnit or testNg jars
                
system          /!\ Never use it /!\
                = hard-coding a path to a jar in a system
                = exists to tie existing projects to Maven build
                
import          dependency management through several poms

________________________________________________________

# Repositories (HTTP locations)
### Local Repository
Maven storage

Super pom.xml in the Maven installation /!\ Never edit it /!\
    Default location repo.maven.apache.org (all the open-source projects)
    Ways to safely overwrite Super pom.xml = global parent project file our through the project pom.xml

Multiple repositories allowed and often encouraged
Corporate Repository is encouraged
    => Nexus (+++ for from scratch project) or Artifactory
    
## Dependency Repository
Dependencies download
Releases and / or snapshots
Separated repositories

`<repository>`

## Plugin Repository
Plugins download from Corporate repository
Usually separated repositories

`<pluginRepository>`

## Releases / Snapshots
Release process a little bit more work
Better separate non Production related files from releases

________________________________________________________

# Plugins
Maven uses it to build and package applications
As well as downloading and storing artifacts

## Goals
Default goals = plugins = defined in Super pom
Super pom = Inheritance
    = pom (Project Object Model) from which the effective pom inherits its goals
    
Goals can be edited in the effective pom
    = very common
    
## Phases
Available to tie our goals to :
`validate`              validates project and structure (every required info)
`compile`               compiles any source in the project
`Test`                  compiles testing code, tests the compiled code
`package`               packages the code in the specified package type
--- newer phase to maven
`integration-test`      deploys and runs integration tests
`verify`                runs checks to verify integrity
`install`               installs package in local repo
`deploy`                Copies package to remote repo

________________________________________________________

# Compiler Plugin
Plugin used to to compile the source and test code in different phases
Invokes javac and does a little more :
    Sets the classpath with the dependencies from the application
    Builds the classpath based on what the dependencies are and their classification of scope
    Defaults to older version of Java (1.7 regardless of the installed JDK)
    
Customizable with the configuration section, required since 1.8

```xml
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.8.1</version>
            <configuration>
                <release>11</release>
            </configuration>
        </plugin>
```

fork        Spin off on its on thread
Memory      Set the Min and Max memory
source/target directories
________________________________________________________

# Jar Plugin
Package
Tied to the package phase of our Build lifecycle
Configuration
    Sets includes/excludes
    Builds our Manifest file

Already configured by default based on the packaging type defined in the pom
________________________________________________________

# Source plugin
Package source code so it can be distributed inside the IDE or make some more code intensive javadoc
And attached it to a dedicated jar file
Tied to the package phase of our Build lifecycle
    Frequently overridden to later phase a lot 
    => install or deploy phase to avoid slowing the build down
________________________________________________________

# Javadoc plugin
Package javadocs and attached it to a dedicated jar file
Package phase
    Frequently overridden to later phase a lot 
    => install or deploy phase to avoid slowing the build down
Defaults
    Many customization options