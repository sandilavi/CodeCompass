package com.example.demo.Services;

import com.example.demo.Entity.HtmlEntity;
import com.example.demo.Entity.Resourseswithlinks;
import com.example.demo.repository.HtmlRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HtmlService {
    @Autowired
    private HtmlRepository htmlRepository;

    public String saveHtml(HtmlEntity htmlContent) {
        try {
            htmlRepository.save(htmlContent);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return "ok";
    }
    public List<HtmlEntity> getLinks(String language, String level) {
        try {
            return htmlRepository.getAllByLanguageAndLevel(language, level);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}

