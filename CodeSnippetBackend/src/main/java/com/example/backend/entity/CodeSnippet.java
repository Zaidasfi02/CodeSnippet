package com.example.backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class CodeSnippet {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
    private String title;
    @Column(nullable = false)
	private String language;
	@Column(columnDefinition = "TEXT", nullable = false)
	private String code;
	@Column(nullable = true)
	private String description;
	
	 @ManyToOne
	    @JoinColumn(name = "user_id")
	    private User user;
	 
	 
	public User getUser() {
		return user;
	}
	 public void setUser(User user) {
		 this.user = user;
	 }
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	public CodeSnippet(Long id, String title, String language, String code, String description, User user) {
		super();
		this.id = id;
		this.title = title;
		this.language = language;
		this.code = code;
		this.description = description;
		this.user = user;
	}
	public CodeSnippet() {
		super();
	}
	
	

}
