package com.example.demo.Entity;

import jakarta.persistence.*;


@Entity
@Table(name="HtmlEntity")
public class HtmlEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(length = 9000)
    private String htmlContent;
    @Column(name = "level", length = 255)
    private String level;
    @Column(name = "language", length = 255)
    private String language;

    @Column(name = "topic", length = 255)
    private String topic;

    public HtmlEntity() {
    }

    public HtmlEntity(Long id, String htmlContent, String level, String language, String topic) {
        this.id = id;
        this.htmlContent = htmlContent;
        this.level = level;
        this.language = language;
        this.topic = topic;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getHtmlContent() {
        return htmlContent;
    }

    public void setHtmlContent(String htmlContent) {
        this.htmlContent = htmlContent;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }
}