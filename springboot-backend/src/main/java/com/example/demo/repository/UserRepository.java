package com.example.demo.repository;



import com.example.demo.Entity.User;
import com.example.demo.Services.LoginMesage;
import com.example.demo.dto.LoginDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findOneByEmailAndPassword(String email, String password);
    User findByEmail(String email);
    User findByVerificationToken(String verificationToken);
}
