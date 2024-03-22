package com.example.demo.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
@AllArgsConstructor
public class Changepassword {
    String email;
    String currentPassword;
    String newPassword;

    public Changepassword() {
    }
}
