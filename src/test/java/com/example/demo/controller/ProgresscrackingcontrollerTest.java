package com.example.demo.controller;

import com.example.demo.Entity.Progress;
import com.example.demo.Services.ProgressService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class ProgresscrackingcontrollerTest {

    @Mock
    private ProgressService progressService;

    @InjectMocks
    private Progresscrackingcontroller progressController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testSaveProgress() {
        Progress progress = new Progress(); // create progress object as needed
        when(progressService.addProgress(progress)).thenReturn(new ResponseEntity<>("Success", HttpStatus.OK));

        ResponseEntity<String> response = progressController.saveProgress(progress);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Success", response.getBody());
        verify(progressService, times(1)).addProgress(progress);
    }

    @Test
    void testGetProgress() {
        Long courseId = 1L;
        String userId = "user123";
        List progressList = progressController.getProgress(courseId, userId);


    }
}
