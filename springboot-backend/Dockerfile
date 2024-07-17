# Use an official OpenJDK runtime as a parent image
FROM eclipse-temurin:17-jdk-alpine

# Set the working directory in the container
WORKDIR /CodeCompass/springboot-backend

# Copy the Maven project files
COPY springboot-backend /CodeCompass/springboot-backend

# Install Maven
RUN apk add --no-cache maven

# Package the application
RUN mvn -f /CodeCompass/springboot-backend/pom.xml clean package

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run the jar file
CMD ["java", "-jar", "/CodeCompass/springboot-backend/target/demo-0.0.1-SNAPSHOT.jar"]