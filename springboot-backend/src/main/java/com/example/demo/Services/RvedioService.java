package com.example.demo.Services;

import com.example.demo.Entity.ResoursewithvedioLinks;
import com.example.demo.repository.RVedioRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Repository
@Service
public class RvedioService {
    @Autowired
    private RVedioRepo resoursewithvedioLinksRepository;

    private static final Logger logger = LoggerFactory.getLogger(UserService.class);
    public ResponseEntity<String> saveResourses(ResoursewithvedioLinks resoursewithvedioLinks) {
        try {
            resoursewithvedioLinksRepository.save(resoursewithvedioLinks);
            return ResponseEntity.ok("Saved");
        } catch (Exception e) {
            return ResponseEntity.ok("Error");
        }
    }

    public List<ResoursewithvedioLinks> getLinks(String language, String levels) {
        try {
            return resoursewithvedioLinksRepository.getAllByLanguageAndLevel(language, levels);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public ResponseEntity<String> deleteById(Long id) {
        try {
            resoursewithvedioLinksRepository.deleteById(id);
            return ResponseEntity.ok("Deleted");
        } catch (Exception e) {
            return ResponseEntity.ok("Error");
        }
    }
}
