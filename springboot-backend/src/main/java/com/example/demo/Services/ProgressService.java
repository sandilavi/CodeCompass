package com.example.demo.Services;

import com.example.demo.Entity.Progress;
import com.example.demo.repository.ProgressRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Repository
@Service
public class ProgressService {
    @Autowired
    ProgressRepo progressRepo;
    public ResponseEntity<String> addProgress(Progress progress) {
        try {
            progressRepo.save(progress);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return ResponseEntity.ok("saved");
    }

    public List get(Long courseid, String userid) {
        try {
            return progressRepo.getAllByCourseidAndUserid(courseid,userid);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
