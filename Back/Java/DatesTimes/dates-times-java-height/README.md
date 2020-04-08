# Programming with Dates and Times in Java 8

## Why do we need an API for date and time
Leap Years
    Solar year = 365,242 days
    
Time Zones
    24 time zones, 1 for each hour of the day in theory
    The time zone map is complex, changeable and subject to political influence

Daylight Saving Time
    Changing rules among the different countries that use it

Need to impose a structure (month, days, minutes) on the continuous flow of time
Need to match time to human activity

Modern gregorian calendar since 1600s

---
Instant.EPOCH = 1970-01-01T00:00:00Z (UTC)
Instant.ofEpochSecond(9961199) = 9961199 ms(?) after the EPOCH = 1970-04-26T06:59:59Z (UTC)
Duration.between (Instant.EPOCH, Instant.ofEpochSecond(9961199)) = new Duration

/!\ .between(Temporal, Temporal) needs to be used with care
     Temporal = new top level interface of java.time implemented 
     by most of the classes in the package 
     (LocalDateTime, LocalDate, LocalTime, ZonedDateTime, Instant)
     Will fail :
     - if applied to value to LocalDate which doesn't support seconds
     - with 2 different types of Temporal because the process of this method
        will attempt to convert the 2nd type based on the 1st one
        => LocalDateTime can be converted to LocalDate or LocalTime
        => LocalTime can't be converted to LocalDateTime
    If a Duration is created using between, the result will contain the startTime
        but not the endTime
        
Duration.from(TemporalAmount) can be considered as a copy constructor
    * TemporalAmount = Duration or Period but in this method, only a Duration
        can be used as an argument to from

UTC (Coordinated Universal Time)
yyyy-mm-ddTseparatorhh:mm:ssZtoEmphasizeTheUTCformat
    = standard time in more human friendly way
    = useful for purposes like calculate satellites orbits

Everyday programming is more often a concern of calculating
the date and time of a particular point on Earth
    = date + time + time zone
    
ZonedDateTime (= LocalDate + LocalTime  + zoneOffset = LocalDateTime + zoneOffset)
zoneOffset = fixed offset of UTC
yyyy-mm-ddTseparatorhh:mm:ss-hh:mmOffset

ZoneId

Period
= encapsulation of a fixed number of years, months and days 


## Domain assumptions behind java.time
Design Goals
    Immutable
    - thread-safe
    - allowing caching
    - works with streams and lambdas
    
    Fluent
    Type-safe
    - Class cast exception are usually prevented
        by detection of type errors at compile time
    Extensible
    - more features in ThreeTen-Extra
    
Core Classes    
    java.time               Meaning                     Example
    Instant                 Instant of time             Timestamp
    
    ZonedDateTime           Date-time with              Conference call
                            time zone information       start
                            
    LocalDate               Date without                Birthday
                            time zone information       
    
    Duration                Time between 2 instants     Conference call
                            (in nanoseconds)            length
    
    Period                  Amount of time              Prison sentence
                            in years, month, days       length
                            (in human unit)            
    
Formatting and Parsing
Mostly implemented by the class DateTimeFormatter
    = converts a String to Java Time Object called a Temporal
    - DateTimeFormatter.parse(String)
    - DateTimeFormatter.format(TemporalAccessor) = converts to String
    - DateTimeFormatter.ISO_DATE_TIME converts Java Time Object to ISO Time Format
    - The Factory methods : DateTimeFormatter.ofLocalizedTime(FormatStyle.SHORT)
                           => US locale = 7:00 PM
                              UK locale = 19:00
    -                     : DateTimeFormatter.ofPattern("E") = day of the week
                           => US locale = Wed

Interoperation
java.util classes (old one used for Date Time) got new methods in Java 8
    - Date.from(Instant)
    - date.toInstant()
    - Calendar.toInstant()
    - TimeZone.getTimeZone(ZoneId)

java.sql classes allows interconversion with java sql types
for db storage of java time objects
    - java.sql.Date <-> LocalDate
    - java.sql.TimeStamp <-> LocalDateTime (assuminig w/ LocalTimeZone)
    - java.sql.TimeStamp <-> Instant
    
JPA (Java Persistence Application, relational DB Persistence)
    /!\ Current specification (2.1) was published before Java 8 shipped
        = Adapter required = AttributeConverter to integrate java time object

### Human time vs machine time

## Overview of the Java date/time API
### Design goals, core classes