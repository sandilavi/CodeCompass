package com.example.demo.dto;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

class UserTest {

    @Test
    void testGettersAndSetters() {
        // Arrange
        String username = "testuser";
        String pwd = "password123";
        String token = "token123";
        String user = "John Doe";
        User userObj = new User();

        // Act
        userObj.setUsername(username);
        userObj.setPwd(pwd);
        userObj.setToken(token);
        userObj.setUser(user);

        // Assert
        assertEquals(username, userObj.getUsername());
        assertEquals(pwd, userObj.getPwd());
        assertEquals(token, userObj.getToken());
        assertEquals(user, userObj.getUser());
    }

    @Test
    void testDefaultConstructor() {
        // Arrange & Act
        User userObj = new User();

        // Assert
        assertEquals(null, userObj.getUsername());
        assertEquals(null, userObj.getPwd());
        assertEquals(null, userObj.getToken());
        assertEquals(null, userObj.getUser());
    }
}
