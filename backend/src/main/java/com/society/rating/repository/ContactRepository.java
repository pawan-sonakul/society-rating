package com.society.rating.repository;

import com.society.rating.entity.Contact;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface ContactRepository extends MongoRepository<Contact, UUID> {
}