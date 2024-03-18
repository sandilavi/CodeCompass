package com.example.demo.controller;

import com.example.demo.Entity.Questions;
import com.example.demo.Entity.Quiz;
import com.example.demo.Entity.QuizQuestion;
import com.example.demo.Services.QuizService;
import com.example.demo.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/quizzes")
@CrossOrigin(origins = "http://localhost:3000")
public class QuizController {
    private final QuizService quizService;
    @Autowired
    private QuestionRepository questRepository;

    public QuizController(QuizService quizService) {
        this.quizService = quizService;
    }

    @PostMapping
    public Quiz createQuiz(@RequestBody Quiz quiz) {
        List<QuizQuestion> quizQuestions = quiz.getQuizQuestions();
        for (QuizQuestion quizQuestion : quizQuestions) {
            quizQuestion.setQuiz(quiz); // Set the quiz for each quiz question

            Questions question = quizQuestion.getQuestion();
            if (question.getId() == null) {
                // If the question is not persisted yet, persist it
                questRepository.save(question);
            }
        }
        return quizService.createQuiz(quiz);
    }

    @GetMapping("/{id}")
    public Quiz getQuizById(@PathVariable Long id) {
        return quizService.getQuizById(id);
    }

    @PutMapping("/{id}")
    public Quiz updateQuiz(@PathVariable Long id, @RequestBody Quiz quiz) {
        return quizService.updateQuiz(id, quiz);
    }

    @DeleteMapping("/{id}")
    public void deleteQuiz(@PathVariable Long id) {
        quizService.deleteQuiz(id);
    }

    @GetMapping
    public List<Quiz> getAllQuizzes() {
        return quizService.getAllQuizzes();
    }

    @GetMapping("/getQuizQuestById/{id}")
    public List<Questions> getQuizQuestById(@PathVariable Long id){
        System.out.println("Inside Get Quiz quest by Id");
        return quizService.getQuizQuestById(id);
    }

}
