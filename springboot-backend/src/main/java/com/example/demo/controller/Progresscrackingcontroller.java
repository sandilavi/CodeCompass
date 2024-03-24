package com.example.demo.controller;

import com.example.demo.Entity.Progress;
import com.example.demo.Services.ProgressService;
import com.example.demo.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;
import java.util.List;

@RestController
@RequestMapping("/progress")
public class Progresscrackingcontroller {
    @Autowired
    private ProgressService progressService;

    @PostMapping(path = "/save")
    public ResponseEntity<String> saveProgress(@RequestBody Progress progress) {
        return progressService.addProgress(progress);
    }

    @GetMapping("/getProgress/{courseid}/{userid}")
    public List getProgress(@PathVariable Long courseid, @PathVariable String userid) {
       return progressService.get(courseid,userid);

    }
}
