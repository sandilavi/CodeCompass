# Use an official OpenJDK runtime as a parent image
FROM eclipse-temurin:17-jdk-alpine

# Set the working directory in the container
WORKDIR /app

# Copy all the files from the root directory to /app in the container
COPY . /app

# Install Maven (if needed, otherwise remove this line)
RUN apk add --no-cache maven

# Package the application
RUN mvn -f /app/springboot-backend/pom.xml clean package

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run the jar file
CMD ["java", "-jar", "/app/springboot-backend/target/demo-0.0.1-SNAPSHOT.jar"]