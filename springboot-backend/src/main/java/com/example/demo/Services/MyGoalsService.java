package com.example.demo.Services;

import com.example.demo.Entity.MyGoals;
import com.example.demo.repository.MyGoalsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class MyGoalsService {

    @Autowired
    private MyGoalsRepository myGoalsRepository;
    public ResponseEntity<String> saveUserGoals(MyGoals myGoals) {
        myGoalsRepository.save(myGoals);
        return ResponseEntity.ok("Verify email by the link sent on your email address");
    }

    public List<MyGoals> getMyGoals(long userId) {
        List<MyGoals> myGoals = myGoalsRepository.findByUserId(userId);
        return myGoals;
    }

}