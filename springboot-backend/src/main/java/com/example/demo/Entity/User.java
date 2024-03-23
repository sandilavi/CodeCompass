package com.example.demo.Entity;
import jakarta.persistence.*;

@Entity
@Table(name="user")
public class User {
    @Id
    @Column(name = "user_id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int userId;

    @Column(name = "user_name", length = 255)
    private String userName;

    @Column(name = "email", length = 255)
    private String email;
    @Column(name = "password", length = 255)
    private String password;
    @Column(name = "verificationToken", length = 255)
    private String verificationToken;
    @Column(name = "verified", length = 255)
    private boolean verified;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getVerificationToken() {
        return verificationToken;
    }

    public void setVerificationToken(String verificationToken) {
        this.verificationToken = verificationToken;
    }

    public boolean isVerified() {
        return verified;
    }

    public void setVerified(boolean verified) {
        this.verified = verified;
    }

    public User(int userId, String userName, String email, String password, String verificationToken, boolean verified) {
        this.userId = userId;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.verificationToken = verificationToken;
        this.verified = verified;
    }

    public User() {
    }






}

