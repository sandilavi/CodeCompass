package com.example.demo.dto;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

class LoginDtoTest {

    @Test
    void testAllArgsConstructor() {
        // Arrange
        String email = "test@example.com";
        String password = "password123";

        // Act
        LoginDto loginDto = new LoginDto(email, password);

        // Assert
        assertEquals(email, loginDto.getEmail());
        assertEquals(password, loginDto.getPassword());
    }

    @Test
    void testGettersAndSetters() {
        // Arrange
        String email = "test@example.com";
        String password = "password123";
        LoginDto loginDto = new LoginDto();

        // Act
        loginDto.setEmail(email);
        loginDto.setPassword(password);

        // Assert
        assertEquals(email, loginDto.getEmail());
        assertEquals(password, loginDto.getPassword());
    }

    @Test
    void testDefaultConstructor() {
        // Arrange & Act
        LoginDto loginDto = new LoginDto();

        // Assert
        assertEquals(null, loginDto.getEmail());
        assertEquals(null, loginDto.getPassword());
    }
}
