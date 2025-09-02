package com.society.rating.service.impl;

import com.society.rating.dto.ContactRequestDTO;
import com.society.rating.dto.ContactResponseDTO;

import java.util.List;

public interface ContactServiceImpl {
    ContactResponseDTO createContact(ContactRequestDTO contactRequestDTO);

    List<ContactResponseDTO> getAllContactDetails();
}
