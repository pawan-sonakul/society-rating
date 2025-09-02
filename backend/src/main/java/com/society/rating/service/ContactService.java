package com.society.rating.service;

import com.society.rating.dto.ContactRequestDTO;
import com.society.rating.dto.ContactResponseDTO;
import com.society.rating.entity.Contact;
import com.society.rating.repository.ContactRepository;
import com.society.rating.service.impl.ContactServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ContactService implements ContactServiceImpl {
    private final ContactRepository contactRepository;

    @Override
    public ContactResponseDTO createContact(ContactRequestDTO contactRequestDTO) {
        Contact contact = new Contact();
        contact.setName(contactRequestDTO.getName());
        contact.setEmail(contactRequestDTO.getEmail());
        contact.setMessage(contactRequestDTO.getMessage());
        contact.setSubject(contactRequestDTO.getSubject());
        contact.setCreatedAt(LocalDateTime.now());
        contactRepository.save(contact);

        return new ContactResponseDTO(contactRequestDTO.getName(), contactRequestDTO.getEmail(), contactRequestDTO.getSubject(), contactRequestDTO.getMessage(), contact.getCreatedAt());
    }

    @Override
    public List<ContactResponseDTO> getAllContactDetails() {
        return contactRepository.findAll()
                .stream()
                .map(contact -> new ContactResponseDTO(
                        contact.getName(),
                        contact.getEmail(),
                        contact.getSubject(),
                        contact.getMessage(),
                        contact.getCreatedAt()
                ))
                .toList();
    }
}
