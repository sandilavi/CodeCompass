package com.example.demo.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter

@Entity
@Table(name="Resourseswithlinks")
public class Resourseswithlinks {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String levels;

    @Column
    private String links;

    @Column
    private String topic;

    public Resourseswithlinks() {
    }

    public Resourseswithlinks(Long id, String levels, String links, String topic) {
        this.id = id;
        this.levels = levels;
        this.links = links;
        this.topic = topic;
    }
}
