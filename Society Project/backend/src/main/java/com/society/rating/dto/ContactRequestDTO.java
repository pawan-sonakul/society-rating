package com.society.rating.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ContactRequestDTO {
    private String name;

    private String email;

    private String subject;

    private String message;
}
