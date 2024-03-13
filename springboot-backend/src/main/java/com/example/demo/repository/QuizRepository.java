package com.example.demo.repository;

import com.example.demo.Entity.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuizRepository extends JpaRepository<Quiz, Long> {
    // Custom methods for quiz-related operations
}
