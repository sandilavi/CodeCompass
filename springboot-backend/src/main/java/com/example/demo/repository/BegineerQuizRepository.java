package com.example.demo.repository;

import com.example.demo.Entity.Begineer_quiz;
import com.example.demo.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BegineerQuizRepository extends JpaRepository<Begineer_quiz, Long> {
    Optional<Begineer_quiz> findById(Long id);
}
