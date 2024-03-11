package com.example.demo.repository;

import com.example.demo.Entity.Quiz;
import com.example.demo.Entity.QuizQuestion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuizQuestionRepository extends JpaRepository<QuizQuestion, Long> {
    // Custom methods for quiz question-related operations
    public List<QuizQuestion> findByQuiz(Quiz quiz);
}
