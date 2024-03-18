/*
package com.example.demo.controller;

import com.example.demo.Entity.Begineer_quiz;
import com.example.demo.Services.BegineerService;
import com.example.demo.repository.BegineerQuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/begineer")
public class BegineerQuizController {
    @Autowired
    private BegineerQuizRepository begineerQuizRepository;

   */
/* @Autowired
    private BegineerService begineerService;*//*


    @PostMapping(path = "/saveQuestions")
    public ResponseEntity<?> saveQuestions(@RequestBody Begineer_quiz begineerQuiz) {
        begineerService.save(begineerQuiz);
        return ResponseEntity.status(HttpStatus.CREATED).body("Quiz saved successfully");
    }

    @GetMapping
    public List<Begineer_quiz> getAllQuestions() {
        return begineerService.getAllQuestions();
    }

}
*/
