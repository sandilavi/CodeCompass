package com.example.demo.Entity;

import jakarta.persistence.*;
@Entity
@Table(name="vediolink")
public class ResoursewithvedioLinks {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String level;

    @Column
    private String vedioid;

    @Column
    private String topic;

    @Column
    private String language;

    public ResoursewithvedioLinks(Long id, String level, String vedioid, String topic, String language) {
        this.id = id;
        this.level = level;
        this.vedioid = vedioid;
        this.topic = topic;
        this.language = language;
    }

    public ResoursewithvedioLinks() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public String getVedioid() {
        return vedioid;
    }

    public void setVedioid(String vedioid) {
        this.vedioid = vedioid;
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
