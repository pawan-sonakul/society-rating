package com.society.rating.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Data
@AllArgsConstructor
@Getter
@Setter
public class RatingResponseDTO {
    private UUID id;
    private Double averageRating;
    private Integer month;
    private Integer year;
}