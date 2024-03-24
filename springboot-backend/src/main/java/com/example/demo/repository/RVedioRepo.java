package com.example.demo.repository;

import com.example.demo.Entity.ResoursewithvedioLinks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RVedioRepo extends JpaRepository<ResoursewithvedioLinks,Long> {

    List<ResoursewithvedioLinks> getAllByLanguageAndLevel(String language, String levels);
}
