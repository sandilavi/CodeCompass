package com.example.demo.Entity;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class ResourseswithlinksTest {

    @Test
    public void testEmptyConstructor() {
        Resourseswithlinks resource = new Resourseswithlinks();
        assertNotNull(resource);
    }

    @Test
    public void testParameterizedConstructor() {
        Long id = 1L;
        String image = "image.jpg";
        String title = "Title";
        String description = "Description";
        String href = "http://example.com";
        String level = "Beginner";
        String topic = "Programming";
        String language = "Java";

        Resourseswithlinks resource = new Resourseswithlinks(id, image, title, description, href, level, topic, language);

        assertEquals(id, resource.getId());
        assertEquals(image, resource.getImage());
        assertEquals(title, resource.getTitle());
        assertEquals(description, resource.getDescription());
        assertEquals(href, resource.getHref());
        assertEquals(level, resource.getLevel());
        assertEquals(topic, resource.getTopic());
        assertEquals(language, resource.getLanguage());
    }

    @Test
    public void testGettersAndSetters() {
        Resourseswithlinks resource = new Resourseswithlinks();

        Long id = 2L;
        String image = "image2.jpg";
        String title = "Title 2";
        String description = "Description 2";
        String href = "http://example2.com";
        String level = "Intermediate";
        String topic = "Machine Learning";
        String language = "Python";

        resource.setId(id);
        resource.setImage(image);
        resource.setTitle(title);
        resource.setDescription(description);
        resource.setHref(href);
        resource.setLevel(level);
        resource.setTopic(topic);
        resource.setLanguage(language);

        assertEquals(id, resource.getId());
        assertEquals(image, resource.getImage());
        assertEquals(title, resource.getTitle());
        assertEquals(description, resource.getDescription());
        assertEquals(href, resource.getHref());
        assertEquals(level, resource.getLevel());
        assertEquals(topic, resource.getTopic());
        assertEquals(language, resource.getLanguage());
    }
}

