package com.example.demo.controller;

import com.example.demo.Entity.HtmlEntity;
import com.example.demo.Services.HtmlService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import java.util.Arrays;
import java.util.List;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@SpringJUnitConfig
public class HtmlControllerTest {

    @Mock
    private HtmlService htmlService;

    @InjectMocks
    private HtmlController htmlController;

    private MockMvc mockMvc;

    @Test
    public void testSaveHtml() throws Exception {
        HtmlEntity htmlEntity = new HtmlEntity(); // Create  HtmlEntity object

        when(htmlService.saveHtml(any(HtmlEntity.class))).thenReturn("Saved"); // Mock the service method call

        mockMvc = MockMvcBuilders.standaloneSetup(htmlController).build();

        mockMvc.perform(post("/html/save")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"example\":\"value\"}")) // Pass JSON payload here
                .andExpect(status().isOk())
                .andExpect(content().string("Saved"));
    }

    @Test
    public void testRetrieveHtml() throws Exception {
        List<HtmlEntity> htmlEntities = Arrays.asList(new HtmlEntity(), new HtmlEntity()); // Create a list of HtmlEntity objects

        when(htmlService.getLinks("java", "beginner")).thenReturn(htmlEntities); // Mock the service method call

        mockMvc = MockMvcBuilders.standaloneSetup(htmlController).build();

        mockMvc.perform(get("/html/java/beginner"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray());
    }
}

