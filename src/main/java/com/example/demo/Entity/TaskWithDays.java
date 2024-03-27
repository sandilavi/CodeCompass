package com.example.demo.Entity;

import jakarta.persistence.*;

@Entity
@Table(name="taskWithDays")
public class TaskWithDays{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private Long userid;

    @Column(length = 1000)
    private String task;

    @Column
    private String day;

    public TaskWithDays() {
    }

    public TaskWithDays(Long id, Long userId, String task, String day) {
        this.id = id;
        this.userid = userId;
        this.task = task;
        this.day = day;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userid;
    }

    public void setUserId(Long userId) {
        this.userid = userId;
    }

    public String getTask() {
        return task;
    }

    public void setTask(String task) {
        this.task = task;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }
}
