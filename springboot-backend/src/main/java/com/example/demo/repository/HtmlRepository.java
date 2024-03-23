package com.example.demo.repository;

import com.example.demo.Entity.HtmlEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HtmlRepository extends JpaRepository<HtmlEntity, Long> {
}

