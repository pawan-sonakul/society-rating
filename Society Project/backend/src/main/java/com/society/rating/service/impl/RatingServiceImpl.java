package com.society.rating.service.impl;

import com.society.rating.dto.RatingRequestDTO;
import com.society.rating.dto.RatingResponseDTO;

import java.util.List;

public interface RatingServiceImpl {
    RatingResponseDTO submitRating(RatingRequestDTO ratingRequestDTO);

    List<RatingResponseDTO> getAllRatings();
}
