package com.example.demo.repository;

import com.example.demo.Entity.Resourseswithlinks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RlinkRepo extends JpaRepository<Resourseswithlinks,Long> {

    @Query("SELECT t FROM Resourseswithlinks t WHERE t.topic = :topic AND t.levels = :levels")
    List<Resourseswithlinks> getLinks(String topic,String levels);


    List<Resourseswithlinks> getAllByLevels(String levels);


    List<Resourseswithlinks> getAllByTopicAndLevels(String topic,String levels);
}
