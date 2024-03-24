package com.example.demo.controller;

import com.example.demo.Entity.TaskWithDays;
import com.example.demo.Services.TaskWithDaysService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class TaskWithDaysControllerTest {

    @Mock
    private TaskWithDaysService taskWithDaysService;

    @InjectMocks
    private TaskWithDaysController taskWithDaysController;

    @BeforeEach
    void setUp() {
        taskWithDaysService = mock(TaskWithDaysService.class);
        taskWithDaysController = new TaskWithDaysController();
        taskWithDaysController.taskWithDaysService = taskWithDaysService;
    }

    @Test
    void saveTask() {
        TaskWithDays task = new TaskWithDays();
        ResponseEntity<String> expectedResponse = ResponseEntity.ok("Saved");
        when(taskWithDaysService.save(any(TaskWithDays.class))).thenReturn(expectedResponse);

        ResponseEntity<String> response = taskWithDaysController.saveTask(task);

        assertEquals(expectedResponse, response);
    }

    @Test
    void getList() {
        Long userId = 1L;
        List<TaskWithDays> expectedTasks = new ArrayList<>();
        when(taskWithDaysService.getList(userId)).thenReturn(expectedTasks);

        List<TaskWithDays> tasks = taskWithDaysController.getList(userId);

        assertEquals(expectedTasks, tasks);
    }

    @Test
    void getAllTaskWithDays() {
        List<TaskWithDays> expectedTasks = new ArrayList<>();
        when(taskWithDaysService.getAllTaskWithDays()).thenReturn(expectedTasks);

        List<TaskWithDays> tasks = taskWithDaysController.getAllTaskWithDays();

        assertEquals(expectedTasks, tasks);
    }

    @Test
    void getMondayTaskWithDays() {
        Long userId = 1L;
        List<TaskWithDays> expectedTasks = new ArrayList<>();
        when(taskWithDaysService.getmondayTaskWithDays(userId)).thenReturn(expectedTasks);

        List<TaskWithDays> tasks = taskWithDaysController.getmondayTaskWithDays(userId);

        assertEquals(expectedTasks, tasks);
    }

    @Test
    void getTuesdayTaskWithDays() {
        Long userId = 1L;
        List<TaskWithDays> expectedTasks = new ArrayList<>();
        when(taskWithDaysService.gettuesdayTaskWithDays(userId)).thenReturn(expectedTasks);

        List<TaskWithDays> tasks = taskWithDaysController.gettuesdayTaskWithDays(userId);

        assertEquals(expectedTasks, tasks);
    }

    @Test
    void getWednesdayTaskWithDays() {
        Long userId = 1L;
        List<TaskWithDays> expectedTasks = new ArrayList<>();
        when(taskWithDaysService.getwednesdayTaskWithDays(userId)).thenReturn(expectedTasks);

        List<TaskWithDays> tasks = taskWithDaysController.getwednesdayTaskWithDays(userId);

        assertEquals(expectedTasks, tasks);
    }

    @Test
    void getThursdayTaskWithDays() {
        Long userId = 1L;
        List<TaskWithDays> expectedTasks = new ArrayList<>();
        when(taskWithDaysService.getthursdayTaskWithDays(userId)).thenReturn(expectedTasks);

        List<TaskWithDays> tasks = taskWithDaysController.getthursdayTaskWithDays(userId);

        assertEquals(expectedTasks, tasks);
    }

    @Test
    void getFridayTaskWithDays() {
        Long userId = 1L;
        List<TaskWithDays> expectedTasks = new ArrayList<>();
        when(taskWithDaysService.getfridayTaskWithDays(userId)).thenReturn(expectedTasks);

        List<TaskWithDays> tasks = taskWithDaysController.getfridayTaskWithDays(userId);

        assertEquals(expectedTasks, tasks);
    }

    @Test
    void getSaturdayTaskWithDays() {
        Long userId = 1L;
        List<TaskWithDays> expectedTasks = new ArrayList<>();
        when(taskWithDaysService.getsaturdayTaskWithDays(userId)).thenReturn(expectedTasks);

        List<TaskWithDays> tasks = taskWithDaysController.getsaturdayTaskWithDays(userId);

        assertEquals(expectedTasks, tasks);
    }

    @Test
    void getSundayTaskWithDays() {
        Long userId = 1L;
        List<TaskWithDays> expectedTasks = new ArrayList<>();
        when(taskWithDaysService.getsundayTaskWithDays(userId)).thenReturn(expectedTasks);

        List<TaskWithDays> tasks = taskWithDaysController.getsundayTaskWithDays(userId);

        assertEquals(expectedTasks, tasks);
    }

    @Test
    void deleteEmployee() {
        Long id = 1L; // Example id
        ResponseEntity<String> expectedResponse = ResponseEntity.ok("Deleted");
        when(taskWithDaysService.deleteTaskByEmail(id)).thenReturn(expectedResponse);

        ResponseEntity<String> response = taskWithDaysController.deleteEmployee(id);

        assertEquals(expectedResponse, response);
        verify(taskWithDaysService).deleteTaskByEmail(id);
    }

}

