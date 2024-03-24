package com.example.demo.Services;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import com.example.demo.Entity.ResoursewithvedioLinks;
import com.example.demo.repository.RVedioRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

@SpringBootTest
public class RvedioServiceTest {

    @Mock
    private RVedioRepo resoursewithvedioLinksRepository;

    @InjectMocks
    private RvedioService rvedioService;

    private ResoursewithvedioLinks resoursewithvedioLinks;
    private List<ResoursewithvedioLinks> resoursewithvedioLinksList;

    @BeforeEach
    public void setUp() {
        resoursewithvedioLinks = new ResoursewithvedioLinks(); // Initialize with test data
        resoursewithvedioLinksList = new ArrayList<>(); // Initialize with test data
        resoursewithvedioLinksList.add(resoursewithvedioLinks);
    }

    @Test
    public void testSaveResourses_Success() {
        when(resoursewithvedioLinksRepository.save(any(ResoursewithvedioLinks.class))).thenReturn(resoursewithvedioLinks);
        ResponseEntity<String> response = rvedioService.saveResourses(resoursewithvedioLinks);
        assertEquals("Saved", response.getBody());
    }

    @Test
    public void testSaveResourses_Exception() {
        when(resoursewithvedioLinksRepository.save(any(ResoursewithvedioLinks.class))).thenThrow(new RuntimeException());
        ResponseEntity<String> response = rvedioService.saveResourses(resoursewithvedioLinks);
        assertEquals("Error", response.getBody());
    }

    @Test
    public void testGetLinks_Success() {
        when(resoursewithvedioLinksRepository.getAllByLanguageAndLevel(anyString(), anyString())).thenReturn(resoursewithvedioLinksList);
        List<ResoursewithvedioLinks> result = rvedioService.getLinks("English", "Beginner");
        assertEquals(resoursewithvedioLinksList, result);
    }

    @Test
    public void testDeleteById_Success() {
        doNothing().when(resoursewithvedioLinksRepository).deleteById(anyLong());
        ResponseEntity<String> response = rvedioService.deleteById(1L);
        assertEquals("Deleted", response.getBody());
    }

    @Test
    public void testDeleteById_Exception() {
        doThrow(new RuntimeException()).when(resoursewithvedioLinksRepository).deleteById(anyLong());
        ResponseEntity<String> response = rvedioService.deleteById(1L);
        assertEquals("Error", response.getBody());
    }
}
