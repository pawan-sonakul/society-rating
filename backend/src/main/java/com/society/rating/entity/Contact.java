package com.society.rating.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "contacts") // Mongo collection
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Contact {

    @Id
    private String contactId;  // Mongo IDs are usually String/ObjectId

    private String name;
    private String email;
    private String subject;
    private String message;

    @CreatedDate
    private LocalDateTime createdAt;
}
