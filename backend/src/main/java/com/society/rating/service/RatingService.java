package com.society.rating.service;

import com.society.rating.dto.RatingRequestDTO;
import com.society.rating.dto.RatingResponseDTO;

import java.util.List;

public interface RatingService {
    RatingResponseDTO submitRating(RatingRequestDTO ratingRequestDTO);

    List<RatingResponseDTO> getAllRatings();
}
