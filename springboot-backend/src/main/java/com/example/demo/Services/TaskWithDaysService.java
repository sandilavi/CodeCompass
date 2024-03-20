package com.example.demo.Services;

import com.example.demo.Entity.TaskWithDays;
import com.example.demo.repository.TaskWithDaysRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskWithDaysService {
    @Autowired
    TaskWithDaysRepository taskWithDaysRepository;
    public ResponseEntity<String> save(TaskWithDays taskWithDays) {
        taskWithDaysRepository.save(taskWithDays);
        return ResponseEntity.ok("Savedz");
    }

    public List<TaskWithDays> getList(Long userId) {
       return taskWithDaysRepository.findByUserid(userId);
    }

    public List<TaskWithDays> getAllTaskWithDays() {
        return taskWithDaysRepository.findAll();
    }


}
