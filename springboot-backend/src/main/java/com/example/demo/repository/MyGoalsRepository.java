package com.example.demo.repository;

import com.example.demo.Entity.MyGoals;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface MyGoalsRepository extends JpaRepository<MyGoals, Long> {

    Optional<MyGoals> findById(Long id);

    List<MyGoals> findByUserId(Long id);
}
