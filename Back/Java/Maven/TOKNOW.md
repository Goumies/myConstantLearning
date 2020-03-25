# Maven : Structure

## Goals (commands)
`clean`       Deletes `/target` and its generated sources\
`compile`     Compiles all the source code and copy .properties file and generated skeletons (like web services) to `/classes`
`package`     Runs `compile`, runs unit tests and package that up, based on the type defined in pom.xml
`ìnstall`     Download all the dependencies, runs `package` and install the resulted package in the local repository, default location /HOME/.m2
`deploy`      Runs `install` and deploys it to remote or corporate repository

## Overwriting goals : Build section
~/.m2/repository = Maven default storage
Stores artifact using info <groupId>/<artifactId>/<version>

`<finalName>helloMavenWorld</finalName>`

# Maven : Dependencies

List what we need thanks to <groupId>/<artifactId>/<version>

## Versions
Release number of the artifact we want to use
All internal developments should start with SNAPSHOT
