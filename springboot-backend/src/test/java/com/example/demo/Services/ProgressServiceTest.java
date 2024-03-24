package com.example.demo.Services;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import com.example.demo.Entity.Progress;
import com.example.demo.repository.ProgressRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

@SpringBootTest
public class ProgressServiceTest {

    @Mock
    private ProgressRepo progressRepo;

    @InjectMocks
    private ProgressService progressService;

    private Progress progress;
    private List<Progress> progressList;

    @BeforeEach
    public void setUp() {
        progress = new Progress(); // Initialize with test data
        progressList = new ArrayList<>(); // Initialize with test data
        progressList.add(progress);
    }

    @Test
    public void testAddProgress_Success() {
        when(progressRepo.save(any(Progress.class))).thenReturn(progress);
        ResponseEntity<String> response = progressService.addProgress(progress);
        assertEquals("saved", response.getBody());
    }

    @Test
    public void testAddProgress_Exception() {
        when(progressRepo.save(any(Progress.class))).thenThrow(new RuntimeException());
        assertThrows(RuntimeException.class, () -> progressService.addProgress(progress));
    }

    @Test
    public void testGet_Success() {
        when(progressRepo.getAllByCourseidAndUserid(anyLong(), anyString())).thenReturn(progressList);
        List<Progress> result = progressService.get(1L, "user123");
        assertEquals(progressList, result);
    }

    @Test
    public void testGet_Exception() {
        when(progressRepo.getAllByCourseidAndUserid(anyLong(), anyString())).thenThrow(new RuntimeException());
        assertThrows(RuntimeException.class, () -> progressService.get(1L, "user123"));
    }
}

