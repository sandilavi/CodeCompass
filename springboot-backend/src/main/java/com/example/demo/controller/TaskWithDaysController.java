package com.example.demo.controller;

import com.example.demo.Entity.TaskWithDays;
import com.example.demo.Services.TaskWithDaysService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/task")
public class TaskWithDaysController {

    @Autowired
    TaskWithDaysService taskWithDaysService;

    @PostMapping(path = "/save")
    public ResponseEntity<String> saveTask(@RequestBody TaskWithDays taskWithDays) {
       return taskWithDaysService.save(taskWithDays);
    }

    @GetMapping("/get/{userId}")
    public List<TaskWithDays> getList(@PathVariable Long userId) {
        return taskWithDaysService.getList(userId);

    }
}
