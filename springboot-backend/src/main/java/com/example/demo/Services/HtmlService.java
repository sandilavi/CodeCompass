package com.example.demo.Services;

import com.example.demo.Entity.HtmlEntity;
import com.example.demo.repository.HtmlRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HtmlService {
    @Autowired
    private HtmlRepository htmlRepository;

    public String saveHtml(String htmlContent) {
        HtmlEntity entity = new HtmlEntity();
        // Decode HTML content if needed
        entity.setHtmlContent(htmlContent);
        htmlRepository.save(entity);
        return "ok";
    }

    public String retrieveHtml(Long id) {
        HtmlEntity entity = htmlRepository.findById(id).orElse(null);
        if (entity != null) {
            // Decode HTML content if needed
            return entity.getHtmlContent();
        }
        return null;
    }
}

