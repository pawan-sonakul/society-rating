package com.society.rating.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Rating {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String residentName;

    private Integer managementRating;

    private Integer amenitiesRating;

    private Integer securityRating;

    private Integer cleanlinessRating;

    private Double averageRating;

    private Integer month;

    private Integer year;

    private Boolean anonymous;

    @CreationTimestamp
    private LocalDateTime createdAt;
}