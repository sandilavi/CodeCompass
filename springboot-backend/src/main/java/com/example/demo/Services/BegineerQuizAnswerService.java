package com.example.demo.Services;

import com.example.demo.Entity.BegineerQuizAnswer;
import com.example.demo.Entity.Begineer_quiz;
import com.example.demo.repository.BegineerQuizAnswerRepositiory;
import com.example.demo.repository.BegineerQuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class BegineerQuizAnswerService {
    @Autowired
    private BegineerQuizAnswerRepositiory begineerQuizAnswerRepositiory;

    @Autowired
    private BegineerQuizRepository begineerQuizRepository;

    public void save(BegineerQuizAnswer begineerQuizAnswer) {
        begineerQuizAnswerRepositiory.save(begineerQuizAnswer);
    }

    public List<BegineerQuizAnswer> getAllAnswers() {
       return begineerQuizAnswerRepositiory.findAll();
    }


    public int getCorrectAnswer(Long questionId) {
       Optional<Begineer_quiz> begineerQuiz=begineerQuizRepository.findById(questionId);
      return begineerQuiz.get().getCorrectOption();

    }
}
