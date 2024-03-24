package com.example.demo.repository;



import com.example.demo.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findOneByEmailAndPassword(String email, String password);
    User findByEmail(String email);
    User findByVerificationToken(String verificationToken);
    boolean existsByemail(String userEmail);
    List<User> findAll();
    Optional<User> findById(Long id);


}
