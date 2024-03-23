package com.example.demo.controller;

import com.example.demo.Services.HtmlService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/html")
public class HtmlController {
    @Autowired
    private HtmlService htmlService;

    @PostMapping("/save")
    public String saveHtml(@RequestBody String htmlContent) {
        return htmlService.saveHtml(htmlContent);

    }

    @GetMapping("/retrieve/{id}")
    public String retrieveHtml(@PathVariable Long id) {
        return htmlService.retrieveHtml(id);
    }
}
