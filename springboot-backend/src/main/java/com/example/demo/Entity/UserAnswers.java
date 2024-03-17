package com.example.demo.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "user_answers")
public class UserAnswers {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User users;

    @ManyToOne
    
    @JoinColumn(name = "question_id")
    private Questions questions;

    @Column(nullable = false)
    private int selectedOption;

    public UserAnswers(Long id, User users, Questions questions, int selectedOption) {
        super();
        this.id = id;
        this.users = users;
        this.questions = questions;
        this.selectedOption = selectedOption;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUsers() {
        return users;
    }

    public void setUsers(User users) {
        this.users = users;
    }

    public Questions getQuestions() {
        return questions;
    }

    public void setQuestions(Questions questions) {
        this.questions = questions;
    }

    public int getSelectedOption() {
        return selectedOption;
    }

    public void setSelectedOption(int selectedOption) {
        this.selectedOption = selectedOption;
    }

    public UserAnswers() {
        super();
    }

    // Constructors, getters, setters
}
