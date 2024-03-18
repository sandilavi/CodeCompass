package com.example.demo.repository;

import com.example.demo.Entity.UserAnswers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAnswerRepository extends JpaRepository<UserAnswers, Long> {
    // Custom methods for user answer-related operations
}
