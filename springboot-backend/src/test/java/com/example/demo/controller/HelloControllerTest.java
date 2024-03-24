package com.example.demo.controller;



import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class HelloControllerTest {

    @Test
    void index() {
        HelloController controller = new HelloController();
        String response = controller.index();
        assertEquals("Hey SDGP!", response);
    }
}
