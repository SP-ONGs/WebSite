package com.spongs.api.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.spongs.api.repository.UserAccountRepository;

import com.spongs.api.model.UserAccount;
import com.spongs.api.model.UserRole;

import java.util.Locale;

@Configuration
public class AdminBootstrapConfig {
	@Bean
	public CommandLineRunner bootstrapAdmin(UserAccountRepository userAccountRepository,
			PasswordEncoder passwordEncoder) {
		return args -> {
			String email = System.getenv("SPONGS_BOOTSTRAP_ADMIN_EMAIL");
			String password = System.getenv("SPONGS_BOOTSTRAP_ADMIN_PASSWORD");

			// Stop if no bootstrap credentials
			if (email == null || email.isBlank() || password == null || password.isBlank()) {
				return;
			}

			// Do not duplicate bootstrap admin
			if (userAccountRepository.existsByRole(UserRole.ADMIN)) {
				return;
			}

			email = email.trim().toLowerCase(Locale.ROOT);

			if (password.length() < 8 || password.length() > 72) {
				throw new IllegalStateException("Bootstrap admin password must be 8-72 characters");
			}

			if (userAccountRepository.existsByEmail(email)) {
				throw new IllegalStateException("Bootstrap admin email already belongs to an account.");
			}

			String passwordHash = passwordEncoder.encode(password);

			UserAccount admin = UserAccount.createAdmin(email, passwordHash);

			userAccountRepository.save(admin);

			System.out.println("Initial SP ONGS admin account created.");
		};
	}
}
