package com.example.backend.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.entity.User;
import com.example.backend.service.UserService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

	@Autowired
	private UserService userService;

	@PostMapping("/signup")
	public String signup(@RequestBody User user) {
		return userService.registerUser(user);
	}

	@PostMapping("/login")
	public String login(@RequestBody Map<String, String> credentials) {
		String email = credentials.get("email");
		String password = credentials.get("password");
		return userService.loginUser(email, password);
	}

	@GetMapping("/check")
	public String check() {
		return "Authenticated user is logged in.";
	}

}
