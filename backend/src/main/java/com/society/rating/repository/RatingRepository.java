package com.society.rating.repository;

import com.society.rating.entity.Rating;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface RatingRepository extends MongoRepository<Rating, UUID> {
}