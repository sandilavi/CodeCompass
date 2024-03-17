package com.example.demo.controller;

import com.example.demo.Entity.BegineerQuizAnswer;
import com.example.demo.Entity.Begineer_quiz;
import com.example.demo.Services.BegineerQuizAnswerService;
import com.example.demo.Services.BegineerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/begineerAnswer")
public class BegineerAnswerController {
    @Autowired
    private BegineerQuizAnswerService begineerQuizAnswerService;

    @PostMapping(path = "/saveAnswer")
    public ResponseEntity<?> saveAnswer(@RequestBody BegineerQuizAnswer begineerQuizAnswer) {
        BegineerQuizAnswer begineerQuizAnswer1=new BegineerQuizAnswer();
        Long questionId=begineerQuizAnswer.getQ_id();

        begineerQuizAnswer1.setId(begineerQuizAnswer.getId());
        begineerQuizAnswer1.setCorrect_answer(begineerQuizAnswerService.getCorrectAnswer(questionId));
        if (begineerQuizAnswerService.getCorrectAnswer(questionId)==begineerQuizAnswer.getUser_answer()){
            begineerQuizAnswer1.setCorrect(true);
        }else{
            begineerQuizAnswer1.setCorrect(false);
        }
        begineerQuizAnswer1.setUser_answer(begineerQuizAnswer.getUser_answer());
        begineerQuizAnswer1.setUser_id(begineerQuizAnswer.getUser_id());
        begineerQuizAnswer1.setQ_id(begineerQuizAnswer.getQ_id());

        begineerQuizAnswerService.save(begineerQuizAnswer1);
        return ResponseEntity.status(HttpStatus.CREATED).body("Answer saved successfully");
    }

    @GetMapping
    public List<BegineerQuizAnswer> getAllAnswer() {
        return begineerQuizAnswerService.getAllAnswers();
    }


}
