package com.spongs.api.service;

import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.spongs.api.repository.UserAccountRepository;

import com.spongs.api.model.UserAccount;
import com.spongs.api.model.UserRole;

@Service
public class AccountAccessService {
	private final UserAccountRepository userAccountRepository;

	public AccountAccessService(UserAccountRepository userAccountRepository) {
		this.userAccountRepository = userAccountRepository;
	}

	@Transactional(readOnly = true)
	public UserAccount requireCurrentOwner(Authentication authentication) {
		UserAccount account = requireCurrentAccount(authentication);

		if (account.getRole() != UserRole.ONG_OWNER || account.getOng() == null) {
			throw new AccessDeniedException("An ONG owner account is required.");
		}

		return account;
	}

	@Transactional(readOnly = true)
	public UserAccount requireOwnerOfOng(Authentication authentication, Long ongId) {
		UserAccount account = requireCurrentOwner(authentication);

		if (!account.getOng().getId().equals(ongId)) {
			throw new AccessDeniedException("You cannot manage another ONG.");
		}

		return account;
	}

	@Transactional(readOnly = true)
	public UserAccount requireCurrentAdmin(Authentication authentication) {
		UserAccount account = requireCurrentAccount(authentication);

		if (account.getRole() != UserRole.ADMIN) {
			throw new AccessDeniedException("An administrator account is required.");
		}

		return account;
	}

	private UserAccount requireCurrentAccount(Authentication authentication) {
		if (authentication == null || !authentication.isAuthenticated() || authentication.getName() == null) {
			throw new AccessDeniedException("Authenticated is required.");
		}

		return userAccountRepository.findByEmail(authentication.getName())
				.orElseThrow(() -> new AccessDeniedException("The authenticated account no longer exists."));
	}
}
