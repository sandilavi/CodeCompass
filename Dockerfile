# Use an official OpenJDK runtime as a parent image
FROM eclipse-temurin:17-jdk-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the pom.xml and source code into the container
COPY springboot-backend/pom.xml pom.xml
COPY springboot-backend/src src

# Build the application
RUN mvn -f pom.xml clean package

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run the jar file
CMD ["java", "-jar", "springboot-backend/target/demo-0.0.1-SNAPSHOT.jar"]