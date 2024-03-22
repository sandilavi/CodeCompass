/*
package com.example.demo.Entity;

import com.example.demo.dto.User;
import jakarta.persistence.*;

@Entity
@Table(name="testing")
public class testing {
    @Id
    @Column(name = "user_id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long userId;

    @Column(name = "user_name", length = 255)
    private String userName;

    @Column(name = "email", length = 255)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    @Column(name = "password", length = 255)
    private String password;
}
*/
