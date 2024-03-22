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
            logger.info(resoursewithvedioLinks.getVediolink());
            logger.info(resoursewithvedioLinks.getLevels());
            return ResponseEntity.ok("Saved");
        } catch (Exception e) {
            return ResponseEntity.ok("Error");
        }
    }

    public List<ResoursewithvedioLinks> getLinks(String topic, String levels) {
        return resoursewithvedioLinksRepository.getLinks(topic, levels);
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
