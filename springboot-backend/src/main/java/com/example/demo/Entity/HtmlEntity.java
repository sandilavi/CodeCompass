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

    public HtmlEntity() {

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

    public HtmlEntity(Long id, String htmlContent) {
        this.id = id;
        this.htmlContent = htmlContent;
    }
}