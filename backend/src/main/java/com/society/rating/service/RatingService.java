package com.society.rating.service;

import com.society.rating.dto.RatingRequestDTO;
import com.society.rating.dto.RatingResponseDTO;
import com.society.rating.entity.Rating;
import com.society.rating.repository.RatingRepository;
import com.society.rating.service.impl.RatingServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RatingService implements RatingServiceImpl {

    private final RatingRepository ratingRepository;

    @Override
    public RatingResponseDTO submitRating(RatingRequestDTO ratingRequestDTO) {
        LocalDate now = LocalDate.now();
        int month = now.getMonthValue();
        int year = now.getYear();

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
        rating.setMonth(month);
        rating.setYear(year);
        rating.setMessage(ratingRequestDTO.getMessage());

        ratingRepository.save(rating);

        return new RatingResponseDTO(
                rating.getResidentName(),
                rating.getManagementRating(),
                rating.getAmenitiesRating(),
                rating.getSecurityRating(),
                rating.getCleanlinessRating(),
                rating.getAverageRating(),
                rating.getMonth(),
                rating.getYear(),
                rating.getAnonymous(),
                rating.getMessage(),
                rating.getCreatedAt()
        );
    }

    @Override
    public List<RatingResponseDTO> getAllRatings() {
        return ratingRepository.findAll()
                .stream()
                .map(rating -> new RatingResponseDTO(
                        rating.getResidentName(),
                        rating.getManagementRating(),
                        rating.getAmenitiesRating(),
                        rating.getSecurityRating(),
                        rating.getCleanlinessRating(),
                        rating.getAverageRating(),
                        rating.getMonth(),
                        rating.getYear(),
                        rating.getAnonymous(),
                        rating.getMessage(),
                        rating.getCreatedAt()
                ))
                .toList();
    }

}
