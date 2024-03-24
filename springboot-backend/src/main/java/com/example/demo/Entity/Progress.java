package com.example.demo.Entity;

import jakarta.persistence.*;

@Entity
@Table(name="Progress")
public class Progress {
    @Id
    @Column(name = "id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "courseid", length = 255)
    private Long courseid;

    @Column(name = "userid", length = 255)
    private String userid;

    @Column(name = "topic", length = 255)
    private String topic;

    @Column(name = "level", length = 255)
    private String level;

    public Progress() {
    }

    public Progress(Long id, Long courseid, String userid, String topic, String level) {
        this.id = id;
        this.courseid = courseid;
        this.userid = userid;
        this.topic = topic;
        this.level = level;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getCourseid() {
        return courseid;
    }

    public void setCourseid(Long courseid) {
        this.courseid = courseid;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }
}
