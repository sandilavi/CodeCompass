package com.example.demo.controller;

import com.example.demo.Entity.User;
import com.example.demo.Services.LoginMesage;
import com.example.demo.Services.UserService;
import com.example.demo.dto.Changepassword;
import com.example.demo.dto.LoginDto;
import com.example.demo.dto.UserDetailsDto;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import java.util.ArrayList;
import java.util.List;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@SpringBootTest
public class userControllerTest {

    @Mock
    private UserService userService;

    @InjectMocks
    private userController userController;

   /*@Test
    public void testSaveUser() {
        User user = new User();
        when(userService.addUser(user)).thenReturn("UserName");
        String response = userController.saveUser(user);
        assertEquals("UserName", response);
    }

    */






    @Test
    public void testLoginUser() {
        LoginDto loginDto = new LoginDto();
        LoginMesage loginMessage = new LoginMesage();
        when(userService.loginUser(loginDto)).thenReturn(loginMessage);
        ResponseEntity<?> responseEntity = userController.loginUser(loginDto);
        assertEquals(loginMessage, responseEntity.getBody());
    }

    @Test
    public void testVerifyEmail() {
        String token = "token";
        doNothing().when(userService).verifyEmail(token);
        ResponseEntity<?> responseEntity = userController.verifyEmail(token);
        assertEquals("Email verified successfully.", responseEntity.getBody());
    }

    @Test
    public void testUpdateUserFromId() {
        Long id = 1L;
        User user = new User();
        when(userService.updateUser_from_id(id, user)).thenReturn(ResponseEntity.ok("Updated"));
        ResponseEntity<String> responseEntity = userController.updateUser_from_id(id, user);
        assertEquals("Updated", responseEntity.getBody());
    }

    @Test
    public void testUpdateUserFromEmail() {
        String email = "example@example.com";
        Changepassword changepassword = new Changepassword();
        when(userService.updateUser_from_email(email, changepassword)).thenReturn(ResponseEntity.ok("Updated"));
        ResponseEntity<String> responseEntity = userController.updateUser_From_email(email, changepassword);
        assertEquals("Updated", responseEntity.getBody());
    }

    @Test
    public void testGetAllUsers() {
        List<User> userList = new ArrayList<>();
        when(userService.getAllUsers()).thenReturn(userList);
        List<User> response = userController.getAllUsers();
        assertEquals(userList, response);
    }

    @Test
    public void testDeleteEmployee() {
        String email = "example@example.com";
        when(userService.deleteEmployeeByEmail(email)).thenReturn(ResponseEntity.ok("Deleted"));
        ResponseEntity<String> responseEntity = userController.deleteEmployee(email);
        assertEquals("Deleted", responseEntity.getBody());
    }

    @Test
    public void testGetUserByEmail() {
        String email = "example@example.com";
        UserDetailsDto userDetailsDto = new UserDetailsDto();
        when(userService.getUserbyEmail(email)).thenReturn(userDetailsDto);
        UserDetailsDto response = userController.getUserbyEmail(email);
        assertEquals(userDetailsDto, response);
    }
}
