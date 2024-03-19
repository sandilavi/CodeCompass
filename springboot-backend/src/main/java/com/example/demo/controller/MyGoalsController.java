package com.example.demo.controller;

import com.example.demo.Entity.MyGoals;
import com.example.demo.Services.MyGoalsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/myGoals")
public class MyGoalsController {

    @Autowired
    private MyGoalsService myGoalsService;
    @GetMapping("/getMyGoals/{userId}")
    public ResponseEntity<List<MyGoals>> getMyGoals(@PathVariable long userId) {
        List<MyGoals> myGoals = myGoalsService.getMyGoals(userId);
        return ResponseEntity.ok(myGoals);
    }


    @PostMapping("/saveMyGoals")
    public ResponseEntity<?> saveUserGoals(@RequestBody MyGoals myGoals) {
        myGoalsService.saveUserGoals(myGoals);
       return ResponseEntity.ok("Saved");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGoal(@PathVariable Long id) {
        ResponseEntity<String> responseEntity = myGoalsService.deleteGoal(id);
        if (responseEntity.getStatusCode() == HttpStatus.OK) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
