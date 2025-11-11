package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.entity.CodeSnippet;
import com.example.backend.service.CodeSnippetService;

@RestController
@RequestMapping("/api/code")
@CrossOrigin(origins = {"https://codesnippetfrontend.onrender.com",
						"http://localhost:5173"})
public class CodeSnippetController {

	@Autowired
	private CodeSnippetService codeSnippetService;

	@PostMapping
	public CodeSnippet addSnippet(@RequestBody CodeSnippet codeSnippet, Authentication authentication) {
		return codeSnippetService.addSnippet(codeSnippet, authentication.getName());
	}

	@GetMapping("/my")
	public List<CodeSnippet> getMySnippets(Authentication auth) {
		return codeSnippetService.getMySnippets(auth.getName());
	}

	@DeleteMapping("/delete/{id}")
	public String deleteSnippet(@PathVariable Long id, Authentication auth) {
		boolean deleted = codeSnippetService.deleteSnippet(id, auth.getName());
		return deleted ? "Deleted successfully." : "Unauthorized or not found.";
	}

	// Search by language
	@GetMapping("/language/{lang}")
	public List<CodeSnippet> getByLanguage(@PathVariable String lang) {
		return codeSnippetService.getSnippetsByLanguage(lang);
	}

	// Search by title or description
	@GetMapping("/search")
	public List<CodeSnippet> search(@RequestParam String keyword) {
		return codeSnippetService.searchByTitleOrDescription(keyword);
	}
	@GetMapping("/{id}")
	public ResponseEntity<?> getSnippetById(@PathVariable Long id, Authentication auth) {
	    CodeSnippet snippet = codeSnippetService.getSnippetById(id, auth.getName());
	    if (snippet == null) {
	        return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Snippet not found or unauthorized");
	    }
	    return ResponseEntity.ok(snippet);
	}

	@PutMapping("/{id}")
	public ResponseEntity<?> updateSnippet(@PathVariable Long id, @RequestBody CodeSnippet updatedSnippet,
	        Authentication auth) {
	    CodeSnippet updated = codeSnippetService.updateSnippet(id, updatedSnippet, auth.getName());

	    if (updated == null) {
	        return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Unauthorized or snippet not found");
	    }
	    return ResponseEntity.ok(updated);
	}

}
