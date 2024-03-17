package com.example.demo.Services;

import com.example.demo.Entity.Begineer_quiz;
import com.example.demo.repository.BegineerQuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Repository
@Service
public class BegineerService {

    @Autowired
    private BegineerQuizRepository begineerQuizRepository;
    public void save(Begineer_quiz begineerQuiz) {
        begineerQuizRepository.save(begineerQuiz);
    }

    public List<Begineer_quiz> getAllQuestions() {
        return begineerQuizRepository.findAll();

    }
}
