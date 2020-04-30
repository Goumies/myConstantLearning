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


## Language & Library improvements
## Performance & security improvements