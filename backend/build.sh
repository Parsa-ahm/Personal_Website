#!/bin/bash
mkdir -p target
javac -d target Main.java
cd target
echo "Main-Class: Main" > manifest.txt
jar cfm app.jar manifest.txt *.class
