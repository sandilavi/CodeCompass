package com.example.demo.repository;

import com.example.demo.Entity.HtmlEntity;
import com.example.demo.Entity.Resourseswithlinks;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HtmlRepository extends JpaRepository<HtmlEntity, Long> {
    List<HtmlEntity> getAllByLanguageAndLevel(String language, String level);
}

