package com.example.demo.Entity;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class HtmlEntityTest {

    @Test
    public void testEmptyConstructor() {
        HtmlEntity htmlEntity = new HtmlEntity();
        assertNotNull(htmlEntity);
        assertNull(htmlEntity.getId());
        assertNull(htmlEntity.getHtmlContent());
        assertNull(htmlEntity.getLevel());
        assertNull(htmlEntity.getLanguage());
        assertNull(htmlEntity.getTopic());
    }

    @Test
    public void testParameterizedConstructor() {
        Long id = 1L;
        String htmlContent = "<html><body><h1>Hello World</h1></body></html>";
        String level = "Beginner";
        String language = "Java";
        String topic = "HTML";

        HtmlEntity htmlEntity = new HtmlEntity(id, htmlContent, level, language, topic);

        assertEquals(id, htmlEntity.getId());
        assertEquals(htmlContent, htmlEntity.getHtmlContent());
        assertEquals(level, htmlEntity.getLevel());
        assertEquals(language, htmlEntity.getLanguage());
        assertEquals(topic, htmlEntity.getTopic());
    }

    @Test
    public void testGettersAndSetters() {
        HtmlEntity htmlEntity = new HtmlEntity();

        Long id = 2L;
        String htmlContent = "<html><body><p>Lorem Ipsum</p></body></html>";
        String level = "Intermediate";
        String language = "Python";
        String topic = "CSS";

        htmlEntity.setId(id);
        htmlEntity.setHtmlContent(htmlContent);
        htmlEntity.setLevel(level);
        htmlEntity.setLanguage(language);
        htmlEntity.setTopic(topic);

        assertEquals(id, htmlEntity.getId());
        assertEquals(htmlContent, htmlEntity.getHtmlContent());
        assertEquals(level, htmlEntity.getLevel());
        assertEquals(language, htmlEntity.getLanguage());
        assertEquals(topic, htmlEntity.getTopic());
    }
}
