package com.example.demo.repository;

import com.example.demo.Entity.TaskWithDays;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface TaskWithDaysRepository extends JpaRepository<TaskWithDays, Long> {

    List<TaskWithDays> findByUserid(Long userId);

    // Custom method to find all tasks
    List<TaskWithDays> findAll();



}
