package com.example.demo.repository;

import com.example.demo.Entity.Progress;
import com.example.demo.Entity.Resourseswithlinks;
import com.example.demo.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ProgressRepo  extends JpaRepository<Progress,Long> {
    List<Progress> getAllByCourseidAndUserid(Long courseid, String userid);
}
