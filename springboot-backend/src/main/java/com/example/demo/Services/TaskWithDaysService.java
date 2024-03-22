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


    public List<TaskWithDays> getmondayTaskWithDays(Long userId) {
        return taskWithDaysRepository.getmonday(userId);
    }

    public List<TaskWithDays> gettuesdayTaskWithDays(Long userId) {
        return taskWithDaysRepository.gettuesday(userId);
    }

    public List<TaskWithDays> getwednesdayTaskWithDays(Long userId) {
        return taskWithDaysRepository.getwednesday(userId);
    }

    public List<TaskWithDays> getthursdayTaskWithDays(Long userId) {
        return taskWithDaysRepository.getthursday(userId);
    }

    public List<TaskWithDays> getfridayTaskWithDays(Long userId) {
        return taskWithDaysRepository.getfriday(userId);
    }

    public List<TaskWithDays> getsaturdayTaskWithDays(Long userId) {
        return taskWithDaysRepository.getsaturday(userId);
    }

    public List<TaskWithDays> getsundayTaskWithDays(Long userId) {
        return taskWithDaysRepository.getsunday(userId);
    }


}
