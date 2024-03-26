package com.example.demo.Entity;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class ResoursewithvedioLinksTest {

    @Test
    public void testEmptyConstructor() {
        ResoursewithvedioLinks resource = new ResoursewithvedioLinks();
        assertNotNull(resource);
        assertNull(resource.getId());
        assertNull(resource.getLevel());
        assertNull(resource.getVedioid());
        assertNull(resource.getTopic());
        assertNull(resource.getLanguage());
    }

    @Test
    public void testParameterizedConstructor() {
        Long id = 1L;
        String level = "Beginner";
        String vedioid = "abc123";
        String topic = "Java";
        String language = "English";

        ResoursewithvedioLinks resource = new ResoursewithvedioLinks(id, level, vedioid, topic, language);

        assertEquals(id, resource.getId());
        assertEquals(level, resource.getLevel());
        assertEquals(vedioid, resource.getVedioid());
        assertEquals(topic, resource.getTopic());
        assertEquals(language, resource.getLanguage());
    }

    @Test
    public void testGettersAndSetters() {
        ResoursewithvedioLinks resource = new ResoursewithvedioLinks();

        Long id = 2L;
        String level = "Intermediate";
        String vedioid = "xyz789";
        String topic = "Python";
        String language = "French";

        resource.setId(id);
        resource.setLevel(level);
        resource.setVedioid(vedioid);
        resource.setTopic(topic);
        resource.setLanguage(language);

        assertEquals(id, resource.getId());
        assertEquals(level, resource.getLevel());
        assertEquals(vedioid, resource.getVedioid());
        assertEquals(topic, resource.getTopic());
        assertEquals(language, resource.getLanguage());
    }
}


