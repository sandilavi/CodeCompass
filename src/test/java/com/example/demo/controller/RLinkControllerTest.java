package com.example.demo.controller;


import com.example.demo.Entity.Resourseswithlinks;
import com.example.demo.Services.RlinksService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class RLinkControllerTest {

    @Mock
    private RlinksService resoursesWithLinksService;

    @InjectMocks
    private RLinkController rLinkController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void saveResourses() {
        Resourseswithlinks resourseswithlinks = new Resourseswithlinks();
        ResponseEntity<String> expectedResponse = ResponseEntity.ok("Resource Saved");
        when(resoursesWithLinksService.saveResourses(any(Resourseswithlinks.class))).thenReturn(expectedResponse);

        ResponseEntity<String> response = rLinkController.saveResourses(resourseswithlinks);

        assertEquals(expectedResponse, response);
        verify(resoursesWithLinksService).saveResourses(resourseswithlinks);
    }

    @Test
    void getLinksByTopicAndLevel() {
        String topic = "Math";
        String levels = "Easy";
        List<Resourseswithlinks> expectedLinks = new ArrayList<>();
        when(resoursesWithLinksService.getLinks(topic, levels)).thenReturn(expectedLinks);

        List<Resourseswithlinks> response = rLinkController.getLinks(topic, levels);

        assertEquals(expectedLinks, response);
        verify(resoursesWithLinksService).getLinks(topic, levels);
    }

    @Test
    void getLinksByLevel() {
        String levels = "Easy";
        List<Resourseswithlinks> expectedLinks = new ArrayList<>();
        when(resoursesWithLinksService.getAllByLevels(levels)).thenReturn(expectedLinks);

        List<Resourseswithlinks> response = rLinkController.getLinks(levels);

        assertEquals(expectedLinks, response);
        verify(resoursesWithLinksService).getAllByLevels(levels);
    }

    @Test
    void deleteEmployee() {
        Long id = 1L;
        ResponseEntity<String> expectedResponse = ResponseEntity.ok("Resource Deleted");
        when(resoursesWithLinksService.deleteById(id)).thenReturn(expectedResponse);

        ResponseEntity<String> response = rLinkController.deleteEmployee(id);

        assertEquals(expectedResponse, response);
        verify(resoursesWithLinksService).deleteById(id);
    }
}
