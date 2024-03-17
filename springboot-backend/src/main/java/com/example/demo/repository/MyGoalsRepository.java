package com.example.demo.repository;

import com.example.demo.Entity.Begineer_quiz;
import com.example.demo.Entity.MyGoals;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MyGoalsRepository extends JpaRepository<MyGoals, Long> {
}
