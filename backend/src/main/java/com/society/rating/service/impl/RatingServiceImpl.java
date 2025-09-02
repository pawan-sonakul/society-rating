package com.society.rating.service.impl;

import com.society.rating.dto.RatingRequestDTO;
import com.society.rating.dto.RatingResponseDTO;
import com.society.rating.entity.Rating;
import com.society.rating.repository.RatingRepository;
import com.society.rating.service.RatingService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RatingServiceImpl implements RatingService {

    private final RatingRepository ratingRepository;

    @Override
    public RatingResponseDTO submitRating(RatingRequestDTO ratingRequestDTO) {
        double average = (ratingRequestDTO.getManagementRating()
                + ratingRequestDTO.getAmenitiesRating()
                + ratingRequestDTO.getSecurityRating()
                + ratingRequestDTO.getCleanlinessRating()) / 4.0;

        Rating rating = new Rating();
        rating.setResidentName(ratingRequestDTO.getResidentName());
        rating.setManagementRating(ratingRequestDTO.getManagementRating());
        rating.setAmenitiesRating(ratingRequestDTO.getAmenitiesRating());
        rating.setSecurityRating(ratingRequestDTO.getSecurityRating());
        rating.setCleanlinessRating(ratingRequestDTO.getCleanlinessRating());
        rating.setAverageRating(average);
        rating.setAnonymous(ratingRequestDTO.isAnonymous());
        rating.setMessage(ratingRequestDTO.getMessage());
        
        rating.setCreatedAt(OffsetDateTime.now(ZoneOffset.UTC).toLocalDateTime());

        ratingRepository.save(rating);

        return mapToResponseDTO(rating);
    }

    @Override
    public List<RatingResponseDTO> getAllRatings() {
        return ratingRepository.findAll()
                .stream()
                .map(this::mapToResponseDTO)
                .toList();
    }

    private RatingResponseDTO mapToResponseDTO(Rating rating) {
        return new RatingResponseDTO(
                rating.getResidentName(),
                rating.getManagementRating(),
                rating.getAmenitiesRating(),
                rating.getSecurityRating(),
                rating.getCleanlinessRating(),
                rating.getAverageRating(),
                rating.getAnonymous(),
                rating.getMessage(),
                rating.getCreatedAt()
        );
    }
}
