# Use an official OpenJDK runtime as a parent image
FROM eclipse-temurin:17-jdk-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the pom.xml and source code into the container
COPY springboot-backend/pom.xml springboot-backend/pom.xml
COPY springboot-backend/src springboot-backend/src

# Package the application
RUN mvn -f springboot-backend/pom.xml clean package

# Copy the packaged jar file into the container
COPY springboot-backend/target/demo-0.0.1-SNAPSHOT.jar /app/demo-0.0.1-SNAPSHOT.jar

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run the jar file
CMD ["java","-jar","/app/demo-0.0.1-SNAPSHOT.jar"]