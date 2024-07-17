# Use an official OpenJDK runtime as a parent image
FROM eclipse-temurin:17-jdk-alpine

# Set the working directory in the container
WORKDIR /CodeCompass/springboot-backend

# Copy the jar file into the container at /app
COPY target/demo-0.0.1-SNAPSHOT.jar /CodeCompass/springboot-backend/demo-0.0.1-SNAPSHOT.jar

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run the jar file
CMD ["java","-jar","demo-0.0.1-SNAPSHOT.jar"]