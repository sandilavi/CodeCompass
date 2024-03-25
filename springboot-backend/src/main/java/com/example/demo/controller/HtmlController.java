package com.example.demo.controller;

import com.example.demo.Entity.HtmlEntity;
import com.example.demo.Services.HtmlService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/html")
public class HtmlController {
    @Autowired
    private HtmlService htmlService;

    @PostMapping("/save")
    public String saveHtml(@RequestBody HtmlEntity htmlEntity) {
        return htmlService.saveHtml(htmlEntity);

    }

    @GetMapping("/{language}/{level}")
    public List<HtmlEntity> retrieveHtml(@PathVariable String language, @PathVariable String level) {
        return htmlService.getLinks(language,level);
    }
}
