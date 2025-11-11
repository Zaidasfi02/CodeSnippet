package com.example.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.entity.CodeSnippet;
import com.example.backend.entity.User;
import com.example.backend.repository.CodeSnippetRepository;
import com.example.backend.repository.UserRepository;

@Service
public class CodeSnippetService {

	@Autowired
	private CodeSnippetRepository codeSnippetRepository;

	@Autowired
	private UserRepository userRepository;

	public CodeSnippet addSnippet(CodeSnippet codeSnippet, String email) {
		User user = userRepository.findByEmail(email);
		codeSnippet.setUser(user);
		return codeSnippetRepository.save(codeSnippet);
	}

	public List<CodeSnippet> getMySnippets(String userEmail) {
		User user = userRepository.findByEmail(userEmail);
		return codeSnippetRepository.findByUser(user);
	}

	public List<CodeSnippet> getSnippetsByLanguage(String language) {
		return codeSnippetRepository.findByLanguageIgnoreCase(language);
	}

	public List<CodeSnippet> searchByTitleOrDescription(String keyword) {
		return codeSnippetRepository.findByTitleContainingIgnoreCaseOrDescriptionContainingIgnoreCase(keyword, keyword);
	}

	public List<CodeSnippet> getAllSnippets() {
		return codeSnippetRepository.findAll();
	}

	public boolean deleteSnippet(Long id, String email) {
		User user = userRepository.findByEmail(email);
		Optional<CodeSnippet> snippet = codeSnippetRepository.findById(id);
		if (snippet.isPresent() && snippet.get().getUser().getId().equals(user.getId())) {
			codeSnippetRepository.delete(snippet.get());
			return true;
		}
		return false;
	}

	public CodeSnippet getSnippetById(Long id, String email) {
		User user = userRepository.findByEmail(email);
		if (user == null)
			return null;

		Optional<CodeSnippet> snippet = codeSnippetRepository.findById(id);
		if (snippet.isEmpty())
			return null;

		CodeSnippet existing = snippet.get();
		if (!existing.getUser().getId().equals(user.getId())) {
			return null; // unauthorized
		}

		return existing;
	}
	public CodeSnippet updateSnippet(Long id, CodeSnippet updatedSnippet, String email) {
		User user = userRepository.findByEmail(email);
		if (user == null)
			return null;

		Optional<CodeSnippet> snippetOpt = codeSnippetRepository.findByIdAndUser(id, user);
		if (snippetOpt.isEmpty())
			return null;

		CodeSnippet existing = snippetOpt.get();
		existing.setTitle(updatedSnippet.getTitle());
		existing.setLanguage(updatedSnippet.getLanguage());
		existing.setCode(updatedSnippet.getCode());
		existing.setDescription(updatedSnippet.getDescription());

		return codeSnippetRepository.save(existing);
	}

}
