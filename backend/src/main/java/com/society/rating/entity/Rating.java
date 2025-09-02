package com.society.rating.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.UUID;

@Document(collection = "ratings") // Mongo collection name
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Rating {

    @Id
    private String id; // Mongo IDs are strings (ObjectId). You can store UUID as string too.

    private String residentName;

    private Integer managementRating;
    private Integer amenitiesRating;
    private Integer securityRating;
    private Integer cleanlinessRating;

    private Double averageRating;

    private Integer month;
    private Integer year;

    private Boolean anonymous;
    private String message;

    @CreatedDate
    private LocalDateTime createdAt;
}
