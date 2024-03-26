package com.example.demo.Services;

import com.example.demo.Entity.TaskWithDays;
import com.example.demo.repository.TaskWithDaysRepository;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@SpringBootTest
public class TaskWithDaysServiceTest {

    @Mock
    private TaskWithDaysRepository taskWithDaysRepository;

    @InjectMocks
    private TaskWithDaysService taskWithDaysService;

    @Test
    public void testSave() {
        TaskWithDays taskWithDays = new TaskWithDays();
        ResponseEntity<String> expectedResponse = ResponseEntity.ok("Savedz");
        when(taskWithDaysRepository.save(taskWithDays)).thenReturn(taskWithDays);
        ResponseEntity<String> response = taskWithDaysService.save(taskWithDays);
        assertEquals(expectedResponse, response);
    }

    @Test
    public void testGetList() {
        Long userId = 1L;
        List<TaskWithDays> taskWithDaysList = new ArrayList<>();
        when(taskWithDaysRepository.findByUserid(userId)).thenReturn(taskWithDaysList);
        List<TaskWithDays> response = taskWithDaysService.getList(userId);
        assertEquals(taskWithDaysList, response);
    }

    @Test
    public void testGetAllTaskWithDays() {
        List<TaskWithDays> taskWithDaysList = new ArrayList<>();
        when(taskWithDaysRepository.findAll()).thenReturn(taskWithDaysList);
        List<TaskWithDays> response = taskWithDaysService.getAllTaskWithDays();
        assertEquals(taskWithDaysList, response);
    }

    @Test
    public void testGetMondayTaskWithDays() {
        Long userId = 1L;
        List<TaskWithDays> taskWithDaysList = new ArrayList<>();
        when(taskWithDaysRepository.getmonday(userId)).thenReturn(taskWithDaysList);
        List<TaskWithDays> response = taskWithDaysService.getmondayTaskWithDays(userId);
        assertEquals(taskWithDaysList, response);
    }

    @Test
    public void testGetTuesdayTaskWithDays() {
        Long userId = 1L;
        List<TaskWithDays> taskWithDaysList = new ArrayList<>();
        when(taskWithDaysRepository.gettuesday(userId)).thenReturn(taskWithDaysList);
        List<TaskWithDays> response = taskWithDaysService.gettuesdayTaskWithDays(userId);
        assertEquals(taskWithDaysList, response);
    }

    @Test
    public void testGetWednesdayTaskWithDays() {
        Long userId = 1L;
        List<TaskWithDays> taskWithDaysList = new ArrayList<>();
        when(taskWithDaysRepository.getwednesday(userId)).thenReturn(taskWithDaysList);
        List<TaskWithDays> response = taskWithDaysService.getwednesdayTaskWithDays(userId);
        assertEquals(taskWithDaysList, response);
    }

    @Test
    public void testGetThursdayTaskWithDays() {
        Long userId = 1L;
        List<TaskWithDays> taskWithDaysList = new ArrayList<>();
        when(taskWithDaysRepository.getthursday(userId)).thenReturn(taskWithDaysList);
        List<TaskWithDays> response = taskWithDaysService.getthursdayTaskWithDays(userId);
        assertEquals(taskWithDaysList, response);
    }

    @Test
    public void testGetFridayTaskWithDays() {
        Long userId = 1L;
        List<TaskWithDays> taskWithDaysList = new ArrayList<>();
        when(taskWithDaysRepository.getfriday(userId)).thenReturn(taskWithDaysList);
        List<TaskWithDays> response = taskWithDaysService.getfridayTaskWithDays(userId);
        assertEquals(taskWithDaysList, response);
    }

    @Test
    public void testGetSaturdayTaskWithDays() {
        Long userId = 1L;
        List<TaskWithDays> taskWithDaysList = new ArrayList<>();
        when(taskWithDaysRepository.getsaturday(userId)).thenReturn(taskWithDaysList);
        List<TaskWithDays> response = taskWithDaysService.getsaturdayTaskWithDays(userId);
        assertEquals(taskWithDaysList, response);
    }

    @Test
    public void testGetSundayTaskWithDays() {
        Long userId = 1L;
        List<TaskWithDays> taskWithDaysList = new ArrayList<>();
        when(taskWithDaysRepository.getsunday(userId)).thenReturn(taskWithDaysList);
        List<TaskWithDays> response = taskWithDaysService.getsundayTaskWithDays(userId);
        assertEquals(taskWithDaysList, response);
    }

    @Test
    public void testDeleteTaskByEmail() {
        Long id = 1L;
        ResponseEntity<String> expectedResponse = ResponseEntity.ok("deleted");
        doNothing().when(taskWithDaysRepository).deleteById(id);
        ResponseEntity<String> response = taskWithDaysService.deleteTaskByEmail(id);
        assertEquals(expectedResponse, response);
    }
}
