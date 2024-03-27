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
        try {
            taskWithDaysRepository.save(taskWithDays);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return ResponseEntity.ok("Savedz");
    }

    public List<TaskWithDays> getList(Long userId) {
        try {
            return taskWithDaysRepository.findByUserid(userId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public List<TaskWithDays> getAllTaskWithDays() {
        try {
            return taskWithDaysRepository.findAll();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }


    public List<TaskWithDays> getmondayTaskWithDays(Long userId) {
        try {
            return taskWithDaysRepository.getmonday(userId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public List<TaskWithDays> gettuesdayTaskWithDays(Long userId) {
        try {
            return taskWithDaysRepository.gettuesday(userId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public List<TaskWithDays> getwednesdayTaskWithDays(Long userId) {
        try {
            return taskWithDaysRepository.getwednesday(userId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public List<TaskWithDays> getthursdayTaskWithDays(Long userId) {
        try {
            return taskWithDaysRepository.getthursday(userId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public List<TaskWithDays> getfridayTaskWithDays(Long userId) {
        try {
            return taskWithDaysRepository.getfriday(userId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public List<TaskWithDays> getsaturdayTaskWithDays(Long userId) {
        try {
            return taskWithDaysRepository.getsaturday(userId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public List<TaskWithDays> getsundayTaskWithDays(Long userId) {
        try {
            return taskWithDaysRepository.getsunday(userId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }


    public ResponseEntity<String> deleteTaskByEmail(Long id) {
        try {
            taskWithDaysRepository.deleteById(id);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return ResponseEntity.ok("deleted");
    }
}
