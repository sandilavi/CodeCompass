package com.example.demo.controller;

import com.example.demo.Entity.Resourseswithlinks;
import com.example.demo.Services.RlinksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/resourses")
public class RLinkController {
    @Autowired
    private RlinksService resoursesWithLinksService;

    @PostMapping(path = "/save")
    public ResponseEntity<String> saveResourses(@RequestBody Resourseswithlinks resourseswithlinks) {
       return resoursesWithLinksService.saveResourses(resourseswithlinks);
    }

    @GetMapping("/{language}/{levels}")
    public List<Resourseswithlinks> getLinks(@PathVariable String language,@PathVariable String levels) {
       return resoursesWithLinksService.getLinks(language,levels);
    }

    @GetMapping("/getLinks/{levels}")
    public List<Resourseswithlinks> getLinks(@PathVariable String levels) {
        return resoursesWithLinksService.getAllByLevels(levels);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long id) {
        return resoursesWithLinksService.deleteById(id);
    }
}
