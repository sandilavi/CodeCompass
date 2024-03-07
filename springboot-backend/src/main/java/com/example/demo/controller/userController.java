package com.example.demo.controller;

import com.example.demo.Entity.User;
import com.example.demo.Services.LoginMesage;
import com.example.demo.Services.UserService;
import com.example.demo.dto.LoginDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    @GetMapping("/verify-email")
    public ResponseEntity<?> verifyEmail(@RequestParam("token") String token) {
        userService.verifyEmail(token);
        return ResponseEntity.ok("Email verified successfully.");
    }
}
