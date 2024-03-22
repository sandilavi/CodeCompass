package com.example.demo.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="vediolink")
public class ResoursewithvedioLinks {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String levels;

    @Column
    private String vediolink;

    @Column
    private String topic;

    public ResoursewithvedioLinks() {
    }

    public ResoursewithvedioLinks(Long id, String levels, String vediolink, String topic) {
        this.id = id;
        this.levels = levels;
        this.vediolink = vediolink;
        this.topic = topic;
    }
}
