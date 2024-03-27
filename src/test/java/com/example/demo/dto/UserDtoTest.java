package com.example.demo.dto;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

class UserDtoTest {

    @Test
    void testAllArgsConstructor() {
        // Arrange
        int userId = 123;
        String userName = "testUser";
        String email = "test@example.com";
        String password = "password123";

        // Act
        UserDto userDto = new UserDto(userId, userName, email, password);

        // Assert
        assertEquals(userId, userDto.getUserId());
        assertEquals(userName, userDto.getUserName());
        assertEquals(email, userDto.getEmail());
        assertEquals(password, userDto.getPassword());
    }

    @Test
    void testGettersAndSetters() {
        // Arrange
        int userId = 123;
        String userName = "testUser";
        String email = "test@example.com";
        String password = "password123";
        UserDto userDto = new UserDto();

        // Act
        userDto.setUserId(userId);
        userDto.setUserName(userName);
        userDto.setEmail(email);
        userDto.setPassword(password);

        // Assert
        assertEquals(userId, userDto.getUserId());
        assertEquals(userName, userDto.getUserName());
        assertEquals(email, userDto.getEmail());
        assertEquals(password, userDto.getPassword());
    }

    @Test
    void testDefaultConstructor() {
        // Arrange & Act
        UserDto userDto = new UserDto();

        // Assert
        assertEquals(0, userDto.getUserId());
        assertEquals(null, userDto.getUserName());
        assertEquals(null, userDto.getEmail());
        assertEquals(null, userDto.getPassword());
    }
}
