package com.example.demo.repository;

import com.example.demo.Entity.Resourseswithlinks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RlinkRepo extends JpaRepository<Resourseswithlinks,Long> {


    List<Resourseswithlinks> getAllByLevel(String levels);


    List<Resourseswithlinks> getAllByLanguageAndLevel(String language,String level);
}