package com.example.demo.Entity;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import org.junit.Before;
import org.junit.Test;

public class TaskWithDaysTest {

    private TaskWithDays task;

    @Before
    public void setUp() {
        task = new TaskWithDays();
    }

    @Test
    public void testIdSetterAndGetter() {
        Long id = 1L;
        task.setId(id);
        assertEquals(id, task.getId());
    }

    @Test
    public void testUserIdSetterAndGetter() {
        Long userId = 2L;
        task.setUserId(userId);
        assertEquals(userId, task.getUserId());
    }

    @Test
    public void testTaskSetterAndGetter() {
        String taskDescription = "Sample Task";
        task.setTask(taskDescription);
        assertEquals(taskDescription, task.getTask());
    }

    @Test
    public void testDaySetterAndGetter() {
        String day = "Monday";
        task.setDay(day);
        assertEquals(day, task.getDay());
    }

    @Test
    public void testConstructorWithParameters() {
        Long id = 1L;
        Long userId = 2L;
        String taskDescription = "Sample Task";
        String day = "Monday";

        TaskWithDays taskWithDays = new TaskWithDays(id, userId, taskDescription, day);

        assertEquals(id, taskWithDays.getId());
        assertEquals(userId, taskWithDays.getUserId());
        assertEquals(taskDescription, taskWithDays.getTask());
        assertEquals(day, taskWithDays.getDay());
    }

    @Test
    public void testNoArgsConstructor() {
        assertNotNull(task);
    }
}

