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
public class RatingRequestDTO {

    private String residentName;

    private Integer managementRating;

    private Integer amenitiesRating;

    private Integer securityRating;

    private Integer cleanlinessRating;

    private Boolean anonymous;

    public Boolean isAnonymous() {
        return anonymous;
    }
}
