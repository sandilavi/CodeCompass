package com.example.demo.Services;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class LoginMesageTest {

    private LoginMesage loginMesage;

    @BeforeEach
    public void setUp() {
        loginMesage = new LoginMesage("Test Message", true);
    }

    @Test
    public void testGetMessage() {
        assertEquals("Test Message", loginMesage.getMessage());
    }

    @Test
    public void testSetMessage() {
        loginMesage.setMessage("New Message");
        assertEquals("New Message", loginMesage.getMessage());
    }

    @Test
    public void testGetStatus() {
        assertTrue(loginMesage.getStatus());
    }

    @Test
    public void testSetStatus() {
        loginMesage.setStatus(false);
        assertFalse(loginMesage.getStatus());
    }

}
