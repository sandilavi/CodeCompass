package com.example.demo.Services;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import com.example.demo.Entity.HtmlEntity;
import com.example.demo.repository.HtmlRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;
import java.util.List;

@SpringBootTest
public class HtmlServiceTest {

    @Mock
    private HtmlRepository htmlRepository;

    @InjectMocks
    private HtmlService htmlService;

    private HtmlEntity htmlEntity;
    private List<HtmlEntity> htmlEntityList;

    @BeforeEach
    public void setUp() {
        htmlEntity = new HtmlEntity(); // Initialize with test data
        htmlEntityList = Arrays.asList(htmlEntity); // Initialize with test data
    }

    @Test
    public void testSaveHtml_Success() {
        when(htmlRepository.save(any(HtmlEntity.class))).thenReturn(htmlEntity);
        String result = htmlService.saveHtml(htmlEntity);
        assertEquals("ok", result);
    }

    @Test
    public void testSaveHtml_Exception() {
        when(htmlRepository.save(any(HtmlEntity.class))).thenThrow(new RuntimeException());
        assertThrows(RuntimeException.class, () -> htmlService.saveHtml(htmlEntity));
    }

    @Test
    public void testGetLinks_Success() {
        when(htmlRepository.getAllByLanguageAndLevel(anyString(), anyString())).thenReturn(htmlEntityList);
        List<HtmlEntity> result = htmlService.getLinks("English", "Beginner");
        assertEquals(htmlEntityList, result);
    }

    @Test
    public void testGetLinks_Exception() {
        when(htmlRepository.getAllByLanguageAndLevel(anyString(), anyString())).thenThrow(new RuntimeException());
        assertThrows(RuntimeException.class, () -> htmlService.getLinks("English", "Beginner"));
    }
}
