package com.example.demo.Services;

import com.example.demo.Entity.User;
import com.example.demo.dto.LoginDto;
import com.example.demo.dto.UserDto;
import com.example.demo.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JavaMailSender javaMailSender;
    private static final Logger logger = LoggerFactory.getLogger(UserService.class);
    UserDto userDto;
    public ResponseEntity<String> addUser(User user){
        String token = UUID.randomUUID().toString();
        user.setVerificationToken(token);
        if (userRepository.existsByemail(user.getEmail())) {
            return ResponseEntity.badRequest().body("Error: Email is already in use!");
        } else {
           user.setPassword(passwordEncoder.encode(user.getPassword()));
            userRepository.save(user);
            sendVerificationEmail(user.getEmail(), token);
            return ResponseEntity.ok("Verify email by the link sent on your email address");
        }
    }
    private void sendVerificationEmail(String email, String token) {
      SimpleMailMessage message = new SimpleMailMessage();
      message.setTo(email);
      message.setSubject("Email Verification");
      message.setText("Click the following link to verify your email: http://localhost:8080/user/verifyEmail?token=" + token);
      javaMailSender.send(message);
  }
    public void verifyEmail(String token) {
        User user = userRepository.findByVerificationToken(token);
        if (user != null) {
            user.setVerified(true);
            user.setVerificationToken(null);
            userRepository.save(user);
        } else {
            throw new IllegalArgumentException("Invalid verification token.");
        }
    }
    public LoginMesage loginUser(LoginDto loginDto) {
        String msg = "";
        User user = userRepository.findByEmail(loginDto.getEmail());
        boolean verified=user.isVerified();
        if (user != null) {
            if(!verified){
                return new LoginMesage("Please verify your email first", false);
            }else{
                String password = loginDto.getPassword();
                String encodedPassword = user.getPassword();
                Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
                if (isPwdRight) {
                    Optional<User> user1 = userRepository.findOneByEmailAndPassword(loginDto.getEmail(), encodedPassword);
                    if (user1.isPresent()) {
                        return new LoginMesage("Login Success", true);
                    } else {
                        return new LoginMesage("Login Failed", false);
                    }
                } else {
                    return new LoginMesage("password Not Match", false);
                }
            }
        }else {
            return new LoginMesage("Email not exits", false);
        }
    }
    public ResponseEntity<String> updateUser_from_id(Long id, User user) {
        User existingUser = userRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: "));
        if (existingUser != null) {
            existingUser.setUserName(user.getUserName());
            existingUser.setPassword(passwordEncoder.encode(user.getPassword()));
            userRepository.save(existingUser);
            return ResponseEntity.ok("updated");
        } else {
            // Handle user not found scenario
            return ResponseEntity.badRequest().body("Error");
        }
    }

    public ResponseEntity<String> updateUser_from_email(String email, User user) {

        User existingUser = userRepository.findByEmail(email);


        if (existingUser != null) {
            existingUser.setUserName(user.getUserName());
            existingUser.setPassword(passwordEncoder.encode(user.getPassword()));
            userRepository.save(existingUser);
            return ResponseEntity.ok("updated");
        } else {
            // Handle user not found scenario
            return ResponseEntity.badRequest().body("Error");
        }
    }
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public ResponseEntity<String> deleteEmployeeByEmail(String email) {
        User existingUser= userRepository.findByEmail(email);
        if (existingUser != null) {
            userRepository.delete(existingUser);
            return ResponseEntity.ok("deleted");
        } else {
            // Handle user not found scenario
            return ResponseEntity.badRequest().body("Error");
        }
    }
}
