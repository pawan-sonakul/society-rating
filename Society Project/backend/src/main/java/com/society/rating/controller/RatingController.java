package com.society.rating.controller;

import com.society.rating.dto.RatingRequestDTO;
import com.society.rating.dto.RatingResponseDTO;
import com.society.rating.entity.Rating;
import com.society.rating.service.RatingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ratings")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class RatingController {

    private final RatingService ratingService;

    @PostMapping
    public ResponseEntity<RatingResponseDTO> submitRating(@RequestBody RatingRequestDTO ratingRequestDTO) {
        RatingResponseDTO response = ratingService.submitRating(ratingRequestDTO);
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<List<Rating>> getRatingsByMonthAndYear() {
        List<Rating> ratings = ratingService.getAllRatings();
        return ResponseEntity.ok(ratings);
    }
}
