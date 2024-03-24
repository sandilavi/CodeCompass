package com.example.demo.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.*;

import java.util.ArrayList;
import java.util.List;

import com.example.demo.Entity.ResoursewithvedioLinks;
import com.example.demo.Services.RvedioService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class RVedioControllerTest {

    @InjectMocks
    private RVedioController rVedioController;

    @Mock
    private RvedioService rvedioService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testSaveResourses() {
        ResoursewithvedioLinks resource = new ResoursewithvedioLinks();
        when(rvedioService.saveResourses(any(ResoursewithvedioLinks.class))).thenReturn(new ResponseEntity<>("Resource saved successfully", HttpStatus.CREATED));

        ResponseEntity<String> responseEntity = rVedioController.saveResourses(resource);

        assertNotNull(responseEntity);
        assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());
        assertEquals("Resource saved successfully", responseEntity.getBody());
    }

    @Test
    public void testGetLinks() {
        String topic = "topic";
        String levels = "levels";
        List<ResoursewithvedioLinks> links = new ArrayList<>();
        when(rvedioService.getLinks(topic, levels)).thenReturn(links);

        List<ResoursewithvedioLinks> result = rVedioController.getLinks(topic, levels);

        assertNotNull(result);
        assertEquals(links, result);
    }

    @Test
    public void testDeleteEmployee() {
        Long id = 1L;
        when(rvedioService.deleteById(id)).thenReturn(new ResponseEntity<>("Resource deleted successfully", HttpStatus.OK));

        ResponseEntity<String> responseEntity = rVedioController.deleteEmployee(id);

        assertNotNull(responseEntity);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals("Resource deleted successfully", responseEntity.getBody());
    }
}
