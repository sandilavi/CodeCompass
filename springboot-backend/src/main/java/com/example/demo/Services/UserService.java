package com.example.demo.Services;

import com.example.demo.Entity.User;
import com.example.demo.dto.LoginDto;
import com.example.demo.dto.UserDto;
import com.example.demo.repository.ConfirmationTokenRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Repository
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    ConfirmationTokenRepository confirmationTokenRepository;

    UserDto userDto;

    public String addUser(UserDto userDto){
        User user=new User(
                userDto.getUserId(),
                userDto.getUserName(),
                userDto.getEmail(),
                this.passwordEncoder.encode(userDto.getPassword())
        );
        if (userRepository.existsByUserEmail(user.getEmail())) {
            return "Error: Email is already in use!";
        }else{
            userRepository.save(user);
            return user.getUserName();
        }
    }

    public LoginMesage loginUser(LoginDto loginDto) {
        String msg = "";
        User user = userRepository.findByEmail(loginDto.getEmail());
        if (user != null) {
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
        }else {
            return new LoginMesage("Email not exits", false);
        }
    }

}
