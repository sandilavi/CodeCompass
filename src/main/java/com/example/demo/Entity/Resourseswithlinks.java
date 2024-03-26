package com.example.demo.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Resourseswithlinks")
public class Resourseswithlinks {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String image;

    @Column
    private String title;

    @Column
    private String description;

    @Column
    private String href;

    @Column
    private String level;
    @Column
    private String topic;

    @Column
    private String language;

    public Resourseswithlinks(Long id, String image, String title, String description, String href, String level, String topic, String language) {
        this.id = id;
        this.image = image;
        this.title = title;
        this.description = description;
        this.href = href;
        this.level = level;
        this.topic = topic;
        this.language = language;
    }

    public Resourseswithlinks() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getHref() {
        return href;
    }

    public void setHref(String href) {
        this.href = href;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }
}