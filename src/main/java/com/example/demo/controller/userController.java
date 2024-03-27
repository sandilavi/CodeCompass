package com.example.demo.controller;

import com.example.demo.Entity.User;
import com.example.demo.Services.LoginMesage;
import com.example.demo.Services.UserService;
import com.example.demo.dto.Changepassword;
import com.example.demo.dto.LoginDto;
import com.example.demo.dto.UserDetailsDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class userController {
    @Autowired
    private UserService userService;

    @PostMapping(path = "/signUp")
    public String saveUser(@RequestBody User user) {
        String UserName = String.valueOf(userService.addUser(user));
        return UserName;
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDto loginDto) {
        LoginMesage loginMesage = userService.loginUser(loginDto);
        return ResponseEntity.ok(loginMesage);
    }

    @GetMapping("/verifyEmail")
    public ResponseEntity<?> verifyEmail(@RequestParam("token") String token) {
        userService.verifyEmail(token);
        return ResponseEntity.ok("Email verified successfully.");
    }

    @PutMapping("/userUpdate_id/{id}")
    public ResponseEntity<String> updateUser_from_id(@PathVariable Long id, @RequestBody User user) {
        return userService.updateUser_from_id(id, user);

    }

    @PutMapping("/userUpdate_email/{email}")
    public ResponseEntity<String> updateUser_From_email(@PathVariable String email, @RequestBody Changepassword changepassword) {
        return userService.updateUser_from_email(email, changepassword);

    }

    @GetMapping("/getAllUsers")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @DeleteMapping("/delete/{email}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("email") String email) {
        return userService.deleteEmployeeByEmail(email);
    }

    @GetMapping("/{email}")
    public UserDetailsDto getUserbyEmail(@PathVariable String email) {
        return userService.getUserbyEmail(email);
    }
}
