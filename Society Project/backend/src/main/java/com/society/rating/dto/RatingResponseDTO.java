package com.society.rating.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@Getter
@Setter
public class RatingResponseDTO {
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

    private LocalDateTime createdAt;
}