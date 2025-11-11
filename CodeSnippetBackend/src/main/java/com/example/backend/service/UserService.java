package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.backend.entity.User;
import com.example.backend.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private PasswordEncoder encoder;

	// Register a new user
	public String registerUser(User user) {
		if (userRepo.findByEmail(user.getEmail()) != null) {
			return "Email already registered!";
		}
		user.setPassword(encoder.encode(user.getPassword()));
		userRepo.save(user);
		return "Signup successful!";
	}

	// login
	public String loginUser(String email, String password) {
		User existingUser = userRepo.findByEmail(email);

		if (existingUser == null) {
			return "User not found!";
		}

		if (!encoder.matches(password, existingUser.getPassword())) {
			return "Invalid password!";
		}

		return "Login successful!";
	}

	public User findByEmail(String email) {
		return userRepo.findByEmail(email);
	}
}
