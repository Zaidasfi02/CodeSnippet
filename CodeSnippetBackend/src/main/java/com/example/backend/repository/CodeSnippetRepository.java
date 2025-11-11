package com.example.backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.entity.CodeSnippet;
import com.example.backend.entity.User;

public interface CodeSnippetRepository extends JpaRepository<CodeSnippet, Long>{
	
	List<CodeSnippet> findByUser(User user);
    List<CodeSnippet> findByLanguageIgnoreCase(String language);
    List<CodeSnippet> findByTitleContainingIgnoreCaseOrDescriptionContainingIgnoreCase(String title, String description);
    Optional<CodeSnippet> findByIdAndUser(Long id, User user);

}
