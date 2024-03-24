package com.example.demo.repository;

import com.example.demo.Entity.TaskWithDays;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface TaskWithDaysRepository extends JpaRepository<TaskWithDays, Long> {

    List<TaskWithDays> findByUserid(Long userId);

    // Custom method to find all tasks
    List<TaskWithDays> findAll();

    @Query("SELECT t FROM TaskWithDays t WHERE t.userid = :userId AND t.day = 'Monday'")
    List<TaskWithDays> getmonday(Long userId);

    @Query("SELECT t FROM TaskWithDays t WHERE t.userid = :userId AND t.day = 'Tuesday'")
    List<TaskWithDays> gettuesday(Long userId);

    @Query("SELECT t FROM TaskWithDays t WHERE t.userid = :userId AND t.day = 'Wednesday'")
    List<TaskWithDays> getwednesday(Long userId);

    @Query("SELECT t FROM TaskWithDays t WHERE t.userid = :userId AND t.day = 'Thursday'")
    List<TaskWithDays> getthursday(Long userId);

    @Query("SELECT t FROM TaskWithDays t WHERE t.userid = :userId AND t.day = 'Friday'")
    List<TaskWithDays> getfriday(Long userId);

    @Query("SELECT t FROM TaskWithDays t WHERE t.userid = :userId AND t.day = 'Saturday'")
    List<TaskWithDays> getsaturday(Long userId);

    @Query("SELECT t FROM TaskWithDays t WHERE t.userid = :userId AND t.day = 'Sunday'")
    List<TaskWithDays> getsunday(Long userId);


}
