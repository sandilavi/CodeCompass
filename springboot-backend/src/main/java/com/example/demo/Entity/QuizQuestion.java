package com.example.demo.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "quiz_questions")
public class QuizQuestion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "quiz_id")
    private Quiz quiz;

    @ManyToOne
    @JoinColumn(name = "question_id", nullable = false)
    private Questions question;

    public QuizQuestion(Long id, Quiz quiz, Questions question) {
        super();
        this.id = id;
        this.quiz = quiz;
        this.question = question;
    }


    public QuizQuestion(Quiz quiz, Questions question) {
        super();
        this.quiz = quiz;
        this.question = question;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Quiz getQuiz() {
        return quiz;
    }

    public void setQuiz(Quiz quiz) {
        this.quiz = quiz;
    }

    public Questions getQuestion() {
        return question;
    }

    public void setQuestion(Questions question) {
        this.question = question;
    }

    public QuizQuestion() {
        super();
    }

    // Constructors, getters, setters
}