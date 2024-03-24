package com.example.demo.Services;


import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import com.example.demo.Entity.Resourseswithlinks;
import com.example.demo.repository.RlinkRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

@SpringBootTest
public class RlinksServiceTest {

    @Mock
    private RlinkRepo resourseswithlinksRepository;

    @InjectMocks
    private RlinksService rlinksService;

    private Resourseswithlinks resourseswithlinks;
    private List<Resourseswithlinks> resourseswithlinksList;

    @BeforeEach
    public void setUp() {
        resourseswithlinks = new Resourseswithlinks(); // Initialize with test data
        resourseswithlinksList = new ArrayList<>(); // Initialize with test data
        resourseswithlinksList.add(resourseswithlinks);
    }

    @Test
    public void testSaveResourses_Success() {
        when(resourseswithlinksRepository.save(any(Resourseswithlinks.class))).thenReturn(resourseswithlinks);
        ResponseEntity<String> response = rlinksService.saveResourses(resourseswithlinks);
        assertEquals("Saved", response.getBody());
    }

    @Test
    public void testSaveResourses_Exception() {
        when(resourseswithlinksRepository.save(any(Resourseswithlinks.class))).thenThrow(new RuntimeException());
        ResponseEntity<String> response = rlinksService.saveResourses(resourseswithlinks);
        assertEquals("Error", response.getBody());
    }

    @Test
    public void testGetLinks_Success() {
        when(resourseswithlinksRepository.getAllByLanguageAndLevel(anyString(), anyString())).thenReturn(resourseswithlinksList);
        List<Resourseswithlinks> result = rlinksService.getLinks("English", "Beginner");
        assertEquals(resourseswithlinksList, result);
    }

    @Test
    public void testDeleteById_Success() {
        doNothing().when(resourseswithlinksRepository).deleteById(anyLong());
        ResponseEntity<String> response = rlinksService.deleteById(1L);
        assertEquals("Deleted", response.getBody());
    }

    @Test
    public void testDeleteById_Exception() {
        doThrow(new RuntimeException()).when(resourseswithlinksRepository).deleteById(anyLong());
        ResponseEntity<String> response = rlinksService.deleteById(1L);
        assertEquals("Error", response.getBody());
    }

    @Test
    public void testGetAllByLevels_Success() {
        when(resourseswithlinksRepository.getAllByLevel(anyString())).thenReturn(resourseswithlinksList);
        List<Resourseswithlinks> result = rlinksService.getAllByLevels("Beginner");
        assertEquals(resourseswithlinksList, result);
    }

    @Test
    public void testGetAllByLevels_Exception() {
        when(resourseswithlinksRepository.getAllByLevel(anyString())).thenThrow(new RuntimeException());
        assertThrows(RuntimeException.class, () -> rlinksService.getAllByLevels("Beginner"));
    }
}
