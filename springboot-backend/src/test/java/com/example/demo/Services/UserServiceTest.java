package com.example.demo.Services;

import static org.junit.Assert.*;
import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.mockito.Mockito.*;

import com.example.demo.dto.Changepassword;
import com.example.demo.dto.LoginDto;
import com.example.demo.dto.User;
import com.example.demo.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import java.util.Optional;

public class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private JavaMailSender javaMailSender;

    @InjectMocks
    private UserService userService;

    private com.example.demo.Entity.User user;
    private LoginDto loginDto;
    private Changepassword changepassword;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        user = new com.example.demo.Entity.User(12L, "name", "test@email", "mail",
                "wegwrgwrg", true); // Initialize with test data
        loginDto = new LoginDto("test@email", "password"); // Initialize with test data
        changepassword = new Changepassword(); // Initialize with test data
    }

    @Test
    public void testAddUser_UserExists() {
        when(userRepository.existsByemail(anyString())).thenReturn(true);
        ResponseEntity<String> response = userService.addUser(user);
        assertEquals("Error: Email is already in use!", response.getBody());
    }

    @Test
    public void testAddUser_Success() {
        when(userRepository.existsByemail(anyString())).thenReturn(false);
        doNothing().when(javaMailSender).send(any(SimpleMailMessage.class));
        ResponseEntity<String> response = userService.addUser(user);
        assertEquals("Verify email by the link sent on your email address", response.getBody());
    }

    @Test
    public void testVerifyEmail_Success() {
        when(userRepository.findByVerificationToken(anyString())).thenReturn(user);
        assertDoesNotThrow(() -> userService.verifyEmail("validToken"));
    }

    @Test
    public void testVerifyEmail_Failure() {
        when(userRepository.findByVerificationToken(anyString())).thenReturn(null);
        assertThrows(IllegalArgumentException.class, () -> userService.verifyEmail("invalidToken"));
    }

    // @Test
    // public void testLoginUser_UserNotVerified() {
    // when(userRepository.findByEmail(anyString())).thenReturn(user);
    // when(user.isVerified()).thenReturn(false);
    // LoginMesage result = userService.loginUser(loginDto);
    // assertFalse(result.isSuccess());
    // assertEquals("Please verify your email first", result.getMessage());
    // }

    // @Test
    // public void testLoginUser_Success() {
    // when(userRepository.findByEmail(anyString())).thenReturn(user);
    // when(user.isVerified()).thenReturn(true);
    // when(user.getPassword()).thenReturn("encodedPassword");
    // when(userRepository.findOneByEmailAndPassword(anyString(),
    // anyString())).thenReturn(Optional.of(user));
    // LoginMesage result = userService.loginUser(loginDto);
    // assertTrue(result.isSuccess());
    // assertEquals("Login Success", result.getMessage());
    // }

    // @Test
    // public void testLoginUser_Failure() {
    // when(userRepository.findByEmail(anyString())).thenReturn(user);
    // when(user.isVerified()).thenReturn(true);
    // when(user.getPassword()).thenReturn("encodedPassword");
    // when(userRepository.findOneByEmailAndPassword(anyString(),
    // anyString())).thenReturn(Optional.empty());
    // LoginMesage result = userService.loginUser(loginDto);
    // assertFalse(result.isSuccess());
    // assertEquals("Login Failed", result.getMessage());
    // }

    @Test
    public void testUpdateUser_from_id_Success() {
        when(userRepository.findById(anyLong())).thenReturn(Optional.of(user));
        ResponseEntity<String> response = userService.updateUser_from_id(1L, user);
        assertEquals("updated", response.getBody());
    }

    @Test
    public void testUpdateUser_from_id_NotFound() {
        when(userRepository.findById(anyLong())).thenReturn(Optional.empty());
        assertThrows(EntityNotFoundException.class, () -> userService.updateUser_from_id(1L, user));
    }

}
