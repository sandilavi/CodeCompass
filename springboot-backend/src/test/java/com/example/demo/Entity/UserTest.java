package com.example.demo.Entity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class UserTest {

    private User user;

    @BeforeEach
    public void setUp() {
        user = new User();
    }

    @Test
    public void testConstructorWithParameters() {
        Long userId = 1L;
        String name = "John Doe";
        String email = "john@example.com";
        String password = "password123";
        String verificationToken = "token123";
        boolean verified = false;

        User user = new User(userId, name, email, password, verificationToken, verified);

        assertEquals(userId, user.getUserId());
        assertEquals(name, user.getName());
        assertEquals(email, user.getEmail());
        assertEquals(password, user.getPassword());
        assertEquals(verificationToken, user.getVerificationToken());
        assertEquals(verified, user.isVerified());
    }

    @Test
    public void testNoArgsConstructor() {
        assertNotNull(user);
    }

    @Test
    public void testSetterAndGetterForUserId() {
        Long userId = 1L;
        user.setUserId(userId);
        assertEquals(userId, user.getUserId());
    }

    @Test
    public void testSetterAndGetterForName() {
        String name = "Jane Smith";
        user.setName(name);
        assertEquals(name, user.getName());
    }

    @Test
    public void testSetterAndGetterForEmail() {
        String email = "jane@example.com";
        user.setEmail(email);
        assertEquals(email, user.getEmail());
    }

    @Test
    public void testSetterAndGetterForPassword() {
        String password = "newpassword456";
        user.setPassword(password);
        assertEquals(password, user.getPassword());
    }

    @Test
    public void testSetterAndGetterForVerificationToken() {
        String verificationToken = "newtoken456";
        user.setVerificationToken(verificationToken);
        assertEquals(verificationToken, user.getVerificationToken());
    }

    @Test
    public void testSetterAndGetterForVerified() {
        boolean verified = true;
        user.setVerified(verified);
        assertEquals(verified, user.isVerified());
    }
}
