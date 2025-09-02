package com.society.rating.dto;


import lombok.*;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class ContactResponseDTO {
    private String name;

    private String email;

    private String subject;

    private String message;

    private LocalDateTime createdAt;
}
