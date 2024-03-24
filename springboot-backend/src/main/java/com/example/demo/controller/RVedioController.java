package com.example.demo.controller;

import com.example.demo.Entity.ResoursewithvedioLinks;
import com.example.demo.Services.RvedioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/vedio")
public class RVedioController {
    @Autowired
    private RvedioService resoursewithvedioLinksServices;

    @PostMapping(path = "/save")
    public ResponseEntity<String> saveResourses(@RequestBody ResoursewithvedioLinks resoursewithvedioLinks) {
        return resoursewithvedioLinksServices.saveResourses(resoursewithvedioLinks);
    }

    @GetMapping("/{language}/{levels}")
    public List<ResoursewithvedioLinks> getLinks(@PathVariable String language, @PathVariable String levels) {
        return resoursewithvedioLinksServices.getLinks(language,levels);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long id) {
        return resoursewithvedioLinksServices.deleteById(id);
    }
}
