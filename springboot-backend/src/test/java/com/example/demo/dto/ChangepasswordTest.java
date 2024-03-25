package com.example.demo.dto;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import org.junit.Before;
import org.junit.Test;

public class ChangepasswordTest {

    private Changepassword changePassword;

    @Before
    public void setUp() {
        changePassword = new Changepassword();
    }

    @Test
    public void testConstructorWithParameters() {
        String email = "test@example.com";
        String currentPassword = "oldPassword";
        String newPassword = "newPassword";

        Changepassword changePassword = new Changepassword(email, currentPassword, newPassword);

        assertEquals(email, changePassword.getEmail());
        assertEquals(currentPassword, changePassword.getCurrentPassword());
        assertEquals(newPassword, changePassword.getNewPassword());
    }

    @Test
    public void testNoArgsConstructor() {
        assertNotNull(changePassword);
    }

    @Test
    public void testSetterAndGetterForEmail() {
        String email = "test@example.com";
        changePassword.setEmail(email);
        assertEquals(email, changePassword.getEmail());
    }

    @Test
    public void testSetterAndGetterForCurrentPassword() {
        String currentPassword = "oldPassword";
        changePassword.setCurrentPassword(currentPassword);
        assertEquals(currentPassword, changePassword.getCurrentPassword());
    }

    @Test
    public void testSetterAndGetterForNewPassword() {
        String newPassword = "newPassword";
        changePassword.setNewPassword(newPassword);
        assertEquals(newPassword, changePassword.getNewPassword());
    }
}
