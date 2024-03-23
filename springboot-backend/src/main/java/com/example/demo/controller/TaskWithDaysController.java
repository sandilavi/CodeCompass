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
    @GetMapping("/getAll")
    public List<TaskWithDays> getAllTaskWithDays() {
        return taskWithDaysService.getAllTaskWithDays();
    }

    @GetMapping("/monday/{userId}")
    public List<TaskWithDays> getmondayTaskWithDays(@PathVariable Long userId) {
        return taskWithDaysService.getmondayTaskWithDays(userId);
    }

    @GetMapping("/tuesday/{userId}")
    public List<TaskWithDays> gettuesdayTaskWithDays(@PathVariable Long userId) {
        return taskWithDaysService.gettuesdayTaskWithDays(userId);
    }

    @GetMapping("/wednesday/{userId}")
    public List<TaskWithDays> getwednesdayTaskWithDays(@PathVariable Long userId) {
        return taskWithDaysService.getwednesdayTaskWithDays(userId);
    }

    @GetMapping("/thursday/{userId}")
    public List<TaskWithDays> getthursdayTaskWithDays(@PathVariable Long userId) {
        return taskWithDaysService.getthursdayTaskWithDays(userId);
    }

    @GetMapping("/friday/{userId}")
    public List<TaskWithDays> getfridayTaskWithDays(@PathVariable Long userId) {
        return taskWithDaysService.getfridayTaskWithDays(userId);
    }

    @GetMapping("/saturday/{userId}")
    public List<TaskWithDays> getsaturdayTaskWithDays(@PathVariable Long userId) {
        return taskWithDaysService.getsaturdayTaskWithDays(userId);
    }

    @GetMapping("/sunday/{userId}")
    public List<TaskWithDays> getsundayTaskWithDays(@PathVariable Long userId) {
        return taskWithDaysService.getsundayTaskWithDays(userId);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long id) {
        return taskWithDaysService.deleteTaskByEmail(id);
    }
}
