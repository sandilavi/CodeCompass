package com.example.demo.Services;

import com.example.demo.Entity.Resourseswithlinks;
import com.example.demo.repository.RlinkRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Repository
@Service
public class RlinksService {
    @Autowired
    private RlinkRepo resourseswithlinksRepository;


    public ResponseEntity<String> saveResourses(Resourseswithlinks resourseswithlinks) {
        try {
            resourseswithlinksRepository.save(resourseswithlinks);
            return ResponseEntity.ok("Saved");
        } catch (Exception e) {
            return ResponseEntity.ok("Error");
        }
    }

    public List<Resourseswithlinks> getLinks(String language, String levels) {
        return resourseswithlinksRepository.getAllByLanguageAndLevel(language, levels);
    }

    public ResponseEntity<String> deleteById(Long id) {

        try {
            resourseswithlinksRepository.deleteById(id);
            return ResponseEntity.ok("Deleted");
        } catch (Exception e) {
            return ResponseEntity.ok("Error");
        }
    }

    public List<Resourseswithlinks> getAllByLevels(String levels) {
        try {
            return  resourseswithlinksRepository.getAllByLevel(levels);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

    }
}