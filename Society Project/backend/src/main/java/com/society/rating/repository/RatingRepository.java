package com.society.rating.repository;

import com.society.rating.entity.Rating;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface RatingRepository extends JpaRepository<Rating, UUID> {
    Boolean existsByResidentNameAndMonthAndYear(String residentName, int month, int year);

    List<Rating> findByMonthAndYear(int month, int year);
}