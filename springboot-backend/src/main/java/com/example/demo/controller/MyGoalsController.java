package com.example.demo.controller;

import com.example.demo.Entity.MyGoals;
import com.example.demo.Entity.User;
import com.example.demo.Services.MyGoalsService;
import com.example.demo.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/myGoals")
public class MyGoalsController {

    @Autowired
    private MyGoalsService myGoalsService;
    @PostMapping("/saveMyGoals")
    public ResponseEntity<?> saveUserGoals(@RequestBody MyGoals myGoals) {
        myGoalsService.saveUserGoals(myGoals);
       return ResponseEntity.ok("Saved");
    }

}
