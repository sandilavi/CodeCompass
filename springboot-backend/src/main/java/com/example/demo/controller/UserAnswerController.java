package com.example.demo.controller;

import com.example.demo.Entity.Questions;
import com.example.demo.Entity.User;
import com.example.demo.Entity.UserAnswers;
import com.example.demo.Entity.UserAnswersDto;
import com.example.demo.Services.UserAnswerService;
import com.example.demo.repository.QuestionRepository;
import com.example.demo.repository.UserAnswerRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user-answers")
@CrossOrigin(origins = "http://localhost:3000")
public class UserAnswerController {
    private final UserAnswerService userAnswerService;

    @Autowired
    private UserRepository userRepository;


    @Autowired
    private QuestionRepository questionRepository;


    @Autowired
    private UserAnswerRepository userAnswerRepository;


    public UserAnswerController(UserAnswerService userAnswerService) {
        this.userAnswerService = userAnswerService;
    }

//    @PostMapping
//    public UserAnswers createUserAnswer(@RequestBody UserAnswers userAnswer) {
//    	System.out.println("Got Request to Submit answer");
//    	System.out.println("user"+userAnswer.getUsers());
//    	System.out.println("user"+userAnswer.getQuestions());
//    	System.out.println("user"+userAnswer.getSelectedOption());
//        return userAnswerService.createUserAnswer(userAnswer);
//    }

    @PostMapping
    public UserAnswers createUserAnswer(@RequestBody UserAnswersDto userAnswerDto) {
        User user = userRepository.findById(userAnswerDto.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        Questions question = questionRepository.findById(userAnswerDto.getQuestionId())
                .orElseThrow(() -> new IllegalArgumentException("Question not found"));

        UserAnswers userAnswer = new UserAnswers();
        userAnswer.setUsers(user);
        userAnswer.setQuestions(question);
        userAnswer.setSelectedOption(userAnswerDto.getSelectedOption());

        return userAnswerRepository.save(userAnswer);
    }


    @GetMapping("/{id}")
    public UserAnswers getUserAnswerById(@PathVariable Long id) {
        return userAnswerService.getUserAnswerById(id);
    }

    @PutMapping("/{id}")
    public UserAnswers updateUserAnswer(@PathVariable Long id, @RequestBody UserAnswers userAnswer) {
        return userAnswerService.updateUserAnswer(id, userAnswer);
    }

    @DeleteMapping("/{id}")
    public void deleteUserAnswer(@PathVariable Long id) {
        userAnswerService.deleteUserAnswer(id);
    }

    @GetMapping
    public List<UserAnswers> getAllUserAnswers() {
        return userAnswerService.getAllUserAnswers();
    }
}
