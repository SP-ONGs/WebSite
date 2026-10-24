package com.spongs.api.service;

// Framework
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

// Models
import com.spongs.api.model.UserAccount;

// Repositorys
import com.spongs.api.repository.UserAccountRepository;

@Service
public class AccountUserDetailsService implements UserDetailsService {
	private final UserAccountRepository userAccountRepository;

	public AccountUserDetailsService(UserAccountRepository userAccountRepository) {
		this.userAccountRepository = userAccountRepository;
	}

	@Override
	public UserDetails loadUserByUsername(String email) {
		String normalizedEmail = email.trim().toLowerCase(java.util.Locale.ROOT);

		UserAccount account = userAccountRepository.findByEmail(normalizedEmail)
				.orElseThrow(() -> new UsernameNotFoundException("Invalid email or password"));

		return User.withUsername(account.getEmail()).password(account.getPasswordHash()).roles(account.getRole().name())
				.build();
	}
}
