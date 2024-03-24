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
        progressRepo.save(progress);
        return ResponseEntity.ok("saved");
    }

    public List get(Long courseid, String userid) {
       return progressRepo.getAllByCourseidAndUserid(courseid,userid);
    }
}
