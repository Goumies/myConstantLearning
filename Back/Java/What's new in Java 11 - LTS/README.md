# What's new in Java 11: LTS

LTS release every 3 years
Java 11 LTS > Java 17 LTS

Catching up /w Java 9 :
    Module System
Catching up /w Java 10 :
    Local variable type inference : var    

## Java 11 Intro
Oracle JDK & OpenJDK
    OpenJDK : open-source BUT mainly driven by Oracle (owners of Java)
        plus many outside contributions Red Hat, Twitter, IBM
    Oracle JDK used to be slightly extended version of OpenJDK
        BUT over the past JDKs their codebases have both been converging
    Ultimate goal = no differences between their builds
    Oracle JDK contains commercial features and has committed to open-source those to OpenJDK
        This process started /w Java 9 and 10, it is continued /w Java 11
        => Java Flight Recorder
                Always-on, low-overhead data collection framework
                Bounded circular buffer
        => Java Mission Control
                App analyzing the dumps from Java Flight Recorder
                Giving graphical overview of what's happening inside the JVM
    With Java 11, the convergence goal has been achieved
        Removed: -XX:+UnlockCommercialFeatures that you previously have to enable
            to use these commercial features
    Licensing :
        Features-wise, they're not exactly the same
        OpenJDK : GPL 2 license = true open-source license
        Oracle JDK : Oracle Binary Code license Agreement (proprietary license)
            /!\ Up to Java 10, you could use both JDKs in production free of charge.
                For Oracle JDK, you could buy optional support from Oracle.
                [Oracle subscription module to use Java 11 in production](bit.ly/javasubscription)
                OpenJDK is still free of charge in production
    New Java Release Schedule
        Java 6 > + 3-4 years > Java 7 > + 3-4 years > Java 8
        2018 : March - Java 10, September - Java 11
            The idea = 2 Java releases per year, indefinitely
                     = this would make much easier to get more new features into the language
            Long-term support (LTS) release every 3 years minimum (might be a possibility to buy support from Oracle)
                Java 11, first LTS after Java 8
                Java 11 will be supported until Java 17 LTS release in 2021
                    Then Java 23 LTS in 2024
            /!\ LTS only concerns Oracle JDK. Non LTS releases are not experimental
                APIS deprecations / removals between LTS
            /!\ OpenJDK will only have 6 months support until the next release
                    which is realisable since the releases are smaller than before and they're incremental
Others
    AdoptOpenJDK : community efforts providing builds adopting the OpenJDK to more platforms than OpenJDK does
        They're exploring the possibility of having LTS version for the OpenJDK as well
    Azul : another different JDK vendor that also builds on top of OpenJDK.
        Azul offers their own builds and their own support, thanks to the open-source OpenJDK.
  
## New interesting feature : Launching Single-file source-code              
Launch a source file without compiling
    Compilation is intern and no class file is emitted
    ```
        java Hello.java
        > Hello Pluralsight !
    ```
         --source <version>
         when omitted, it's the current JDKs version
         BUT another side effect of this option :
            this forces Java runtime into source execution mode
         = enables the execution of a java file without its extension   

Launching Single-file source-code + (option enabled) + shebang notation
= executable scripts

Scripting
shebang notation (supported on Unix based OS : linux, macOS)
```
    #!/usr/bin/java --source 11
    import java.nio.file.*;

    public class ListFiles {
        public static void main(String... args) throws Exception {
            Files.walk(Paths.get(args[0]))
                .forEach(System.out::println);
        }
    }
```
1st line = shebang definition
`#!<java binary location> + setting the source version to 11`
The source flag forces the Java Runtime into source execution
    mode and it will execute the Java code inside listfiles
+ 

Then, passing listfiles as our source file to be executed
And we pass the current folder as an argument to the script
```
romyalula@MacBook-Pro-de-Romy java % java --source 11 listfiles ./
  args : [./]
  .
  ./Hello.java
  ./Pluralsight.java
  ./listfiles
```

Or we can make listfiles executable /w
`chmod +x listfiles`
= 'chmod': change mode, '+': adds a right, 'x': allows execution
`./listfiles .`
```
    args : [.]
    .
    ./Hello.java
    ./Pluralsight.java
    ./listfiles
```
 
## Deprecations & removals
Many APIs are banished from Java 11
Removal of Enterprise module (java.se.ee) from the JDK (modularized in java 9)
6 APIs
    java.corba - not as much used as the others anymore
    java.transaction - JTA - 
    java.xml.ws.annotation - JAX-WS annotations
    java.xml.ws - JAX-WS - Java XML web services tag
        This may be used in app to create web services, SOAP endpoints
    java.xml.bind - JAXB - the most well-known enterprise technology
        It used to map XML to and from Java objects
    java.activation - JavaBeans Activation framework
Any app /w dependencies on those APIs will not compile /w Java 11

Those are still available in the EE application server

Alternatives
    As of Java 11, if you want to use these technologies, 
        you need to add an external dependency for these APIs and
        the implementations of these APIs to the app yourself.
    JAXB (java.xml.bind) is used in many popular frameworks => Spring
        -> Maven dependencies
            artifactId jaxb-api & jaxb-impl
    [more Java Enhancement Proposal, JEP 320](openjdk.java.net/jeps/320)
    
Removed Methods
    Thread class (deprecated methods because judged dangerous)
        countStackFrames()
        destroy() --- removed
        resume()
        stop()
        stop(Throwable obj) --- removed
        suspend()
            removing the others would be a too big breaking change
    +
    java.lang.System
    java.lang.Runtime
        runFinalizerOnExit()
            Depending on object finalization in Java is discouraged
            Methods around finalization are being slowly deprecated and removed
    +
    SecurityManager, API class, core API of Java
        checkAwtEventQueueAccess() --- dependency on AWT (desktop technology)
        checkSystemClipboardAccess()
        checkTopLevelWindow()
        checkMemberAccess()
            |
            |
        All these methods should be replaced by
        checkPermission(java.security.Permission)
        = more generic
        
JavaFX
    Java 11, no longer bundled
    Moved out of the JDK to OpenJFX
    Now JavaFX can develop and release at its own pace
    JavaFX JARs are released on Maven Central
        maven dep artifactId javafx
    Javapackager (native MSI (Win)/DMG (Mac) installers) has been removed as well,
        No alternative as os right now BUT draft proposal jpackager in the OpenJDK
    
Removed & Deprecated technologies
    Applets, really ancient technology
        Provided a way to bring Java to the browser /w a Java browser plugin
            and the Java plugin has been removed to Adobe Flash
        Alternative : Java 8 commercial support
    Java Web Start
        Made easier to start a Java desktop app through a browser
        Alternative : jlink, jpackager tool maybe
    Nashorn
        Javascript engine running on Java
        You can use it as a stand-alone JS engine to execute JS code as part of your app
        Deprecated /w Java 11, since JS evolves so quickly Nashorn wasn't
        maintainable alongside the development of Java
        Alternative : Graal.js w/ Graal JDK (part of an experimental project), ProjectDetroit (Google V8)
        
    /!\ For Desktop client development [Oracle roadmap](bit.ly/clientroadmap)
        
## Language & Library improvements
HttpClient API
    Bad API java.net.HttpURLConnection is replaced by
        a reboot of java.net.HttpURLConnection
            which supports HTTP/2, WebSocket
            (no more external lib required)
    Reactive Streams (introduced in Java 9) integration
        Offers interface to manage asynchronous streams of data,
            including the notion of back pressure,
            where consumers of the data can slow down producers
            to get an optimal flow of data
    Main Goal : Be easy to use in common cases
                And powerful enough for the complex cases 
    Was already available in Java 9 & 10 BUT was marked as an incubating or experimental API
    +
    Important Types
        HttpClient
            send()
            sendAsync()
        HttpClient.Builder (fluent API)
        +
        HttpRequest
            uri
            headers
            method
        HttpRequest.Builder (fluent API)
        +
        HttpResponse (immutable object /w all the info returned by the server)
            uri
            headers
            statusCode
            body
    
Library Improvements
    String
        repeat(times) = instance method
            => jshell> "na ".repeat(16) + "Batman"
               $1 ==> "na na na na na na na na na na na na na na na na Batman"
        isBlank()
            var, introduced in Java 10
            => jshell> "".equals(notext.trim())
               $4 ==> true
               +
               jshell> notext.isBlank()
               $5 ==> true
        strip()
            only keeps the characters. It's based on Character.isWhitespace()
            => jshell> Character.isWhitespace('\u2005') 
               $9 ==> true
            != trim(), not aware of all the Unicode whitespace code points
            => jshell> var text = "\n\t       text       \u2005"
               text ==> "\n\t       text        "
               +
               jshell> text.strip()
               $8 ==> "text"
        lines()
            creates a stream of lines
            => jshell> var multiline = "1\n2\n3\n4"
               multiline ==> "1\n2\n3\n4"
               +
               jshell> multiline.lines().forEach(System.out::println)
               1
               2
               3
               4
    Files
        String readString(Path path)
            returns the String content of the file
            (opening & closing files streams, converting bytes of a fil to a stream :
            all done for us)
            Assuming the file is encoding using UTF-8
            For other charset use
        String readString(Path path, Charset cs)
        Path writeString(Path path, Charsequence cs, OpenOption options)
        Path writeString(Path path, Charsequence cs, Charset cs, OpenOption options)
    Optional::isEmpty
        => jshell> var opt = Optional.ofNullable(null);
           opt ==> Optional.empty
           +
           jshell> opt.isEmpty()
           $13 ==> true
    Predicate::not
        Filters out the elements based on the condition
        => jshell> Stream<String> strings = Stream.of("  ", "a", "b");
           strings ==> java.util.stream.ReferencePipeline$Head@4b952a2d
           +
           jshell> strings.filter(Predicate.not(String::isBlank)).forEach(System.out::println)
           a
           b

            
jshell, addition of Java 9
= run `jshell`
    Unicode 10 alliance
        Upgrade from Unicode 8 in Java 10
        Unicode 10, over 16, 000 new characters have been added
        10 new scripts (collection of related characters)
            => \u20BF, Bitcoin sign, part of unicode and java
            jshell> System.out.println(" \u20BF")
             ₿

        
Local-variable Syntax for Lambda Parameters
    Local-variable Type inference introduced in Java 10
        The compiler infer the type of the variable based on the right-hand side of the assignment
        Useful for types of parameters of a method or fields in a class
    At first, when var was introduced in Java 10, it was impossible to use var for lambda parameters
    Now it's possible
    => (String a, String b) -> a.concat(b)
       (a,b) -> a.concat(b)
       (var a, var b) -> a.concat(b)
    /!\ WHY would u do that ?
    => (@Nonnull var a,
        @Nullable var b) -> a.concat(b)
        We can't use annotations without a type !
    Limitations
        /!\ Forbidden instructions, will fail to compile
            (var a, b) -> a.concat(b)
            (var a, String b) -> a.concat(b)
            var a -> a.toUpperCase()

Nest-based Access Control
    Change to the  Access Control to the JVM
    No more bridge method implemented by the compiler
    New class attributes Host and nest Member
    Gives more alignment to the Java language and the JVM implementation

Dynamic Class-file Constants, purely a JVM change
    Goal : Make Class-file more flexible in anticipation
    for more features in Java

## Performance & security improvements