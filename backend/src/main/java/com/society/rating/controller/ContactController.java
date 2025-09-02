package com.society.rating.controller;

import com.society.rating.dto.ContactRequestDTO;
import com.society.rating.dto.ContactResponseDTO;
import com.society.rating.service.impl.ContactServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/contact")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ContactController {
    private final ContactServiceImpl contactService;

    @PostMapping
    public ResponseEntity<ContactResponseDTO> submitRating(@RequestBody ContactRequestDTO contactRequestDTO) {
        ContactResponseDTO response = contactService.createContact(contactRequestDTO);
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<List<ContactResponseDTO>> getRatingsByMonthAndYear() {
        List<ContactResponseDTO> ratingResponseDTOS = contactService.getAllContactDetails();
        return ResponseEntity.ok(ratingResponseDTOS);
    }
}

