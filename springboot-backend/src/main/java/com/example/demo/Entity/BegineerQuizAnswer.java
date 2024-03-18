/*
package com.example.demo.Entity;

import jakarta.persistence.*;

@Entity
@Table(name ="begineerQuizAnswer")
public class BegineerQuizAnswer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private Long q_id;
    @Column(nullable = false)
    private String user_id;
    @Column(nullable = false)
    private int user_answer;

    @Column(nullable = false)
    private int correct_answer;

    @Column(nullable = false)
    private boolean isCorrect;

    public BegineerQuizAnswer(Long id, Long q_id, String user_id, int user_answer, int correct_answer, boolean isCorrect) {
        this.id = id;
        this.q_id = q_id;
        this.user_id = user_id;
        this.user_answer = user_answer;
        this.correct_answer = correct_answer;
        this.isCorrect = isCorrect;
    }

    public int getUser_answer() {
        return user_answer;
    }

    public void setUser_answer(int user_answer) {
        this.user_answer = user_answer;
    }

    public Long getQ_id() {
        return q_id;
    }

    public void setQ_id(Long q_id) {
        this.q_id = q_id;
    }

    public BegineerQuizAnswer() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }



    public int getCorrect_answer() {
        return correct_answer;
    }

    public void setCorrect_answer(int correct_answer) {
        this.correct_answer = correct_answer;
    }

    public boolean isCorrect() {
        return isCorrect;
    }

    public void setCorrect(boolean correct) {
        isCorrect = correct;
    }
}
*/
