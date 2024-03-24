package com.example.demo.config;

import org.junit.jupiter.api.Test;
import org.springframework.web.servlet.config.annotation.CorsRegistration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import static org.mockito.Mockito.*;

class CorsConfigTest {

    @Test
    void testCorsConfiguration() {
        // Create an instance of CorsConfig
        CorsConfig corsConfig = new CorsConfig();

        // Initialize mock CorsRegistry
        CorsRegistry corsRegistry = mock(CorsRegistry.class);
        // Mock CorsRegistration
        CorsRegistration corsRegistration = mock(CorsRegistration.class);

        // Mock CorsRegistry behavior
        when(corsRegistry.addMapping("/**")).thenReturn(corsRegistration);
        when(corsRegistration.allowedOrigins("http://localhost:3000")).thenReturn(corsRegistration);
        when(corsRegistration.allowedMethods("GET", "POST", "PUT", "DELETE")).thenReturn(corsRegistration);
        when(corsRegistration.allowedHeaders("*")).thenReturn(corsRegistration);

        // Call the addCorsMappings method
        corsConfig.addCorsMappings(corsRegistry);

        // Verify that addMapping was called with "/**"
        verify(corsRegistry, times(1)).addMapping("/**");

        // Verify that allowedOrigins was called with "http://localhost:3000"
        verify(corsRegistration, times(1)).allowedOrigins("http://localhost:3000");

        // Verify that allowedMethods was called with the specified methods
        verify(corsRegistration, times(1)).allowedMethods("GET", "POST", "PUT", "DELETE");

        // Verify that allowedHeaders was called with "*"
        verify(corsRegistration, times(1)).allowedHeaders("*");
    }
}
