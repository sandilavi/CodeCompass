package com.example.demo.Entity;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class ProgressTest {

    private Progress progress;

    @BeforeEach
    void setUp() {
        progress = new Progress(1L, 101L, "user123", "Java Basics", "Beginner");
    }

    @Test
    void testGetId() {
        assertEquals(1L, progress.getId());
    }

    @Test
    void testSetId() {
        progress.setId(2L);
        assertEquals(2L, progress.getId());
    }

    @Test
    void testGetCourseid() {
        assertEquals(101L, progress.getCourseid());
    }

    @Test
    void testSetCourseid() {
        progress.setCourseid(202L);
        assertEquals(202L, progress.getCourseid());
    }

    @Test
    void testGetUserid() {
        assertEquals("user123", progress.getUserid());
    }

    @Test
    void testSetUserid() {
        progress.setUserid("user456");
        assertEquals("user456", progress.getUserid());
    }

    @Test
    void testGetTopic() {
        assertEquals("Java Basics", progress.getTopic());
    }

    @Test
    void testSetTopic() {
        progress.setTopic("Advanced Java");
        assertEquals("Advanced Java", progress.getTopic());
    }

    @Test
    void testGetLevel() {
        assertEquals("Beginner", progress.getLevel());
    }

    @Test
    void testSetLevel() {
        progress.setLevel("Intermediate");
        assertEquals("Intermediate", progress.getLevel());
    }
}

