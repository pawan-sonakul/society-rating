package com.society.rating.service;

import com.society.rating.dto.ContactRequestDTO;
import com.society.rating.dto.ContactResponseDTO;

import java.util.List;

public interface ContactService {
    ContactResponseDTO createContact(ContactRequestDTO contactRequestDTO);

    List<ContactResponseDTO> getAllContactDetails();
}
