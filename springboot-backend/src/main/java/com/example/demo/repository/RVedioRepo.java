package com.example.demo.repository;

import com.example.demo.Entity.ResoursewithvedioLinks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RVedioRepo extends JpaRepository<ResoursewithvedioLinks,Long> {
    @Query("SELECT t FROM ResoursewithvedioLinks t WHERE t.topic = :topic AND t.levels = :levels")
    List<ResoursewithvedioLinks> getLinks(String topic, String levels);
}
