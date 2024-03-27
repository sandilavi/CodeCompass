package com.example.demo.config;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Repository;

import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
@ComponentScan("com.example.demo.config")
public class SecurityConfigTest {

    @Test
    public void testRepositoryAnnotation() {
        assertTrue(SecurityConfig.class.isAnnotationPresent(Repository.class));
    }

    @Test
    public void testConfigurationAnnotation() {
        assertTrue(SecurityConfig.class.isAnnotationPresent(Configuration.class));
    }
}
