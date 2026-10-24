package com.spongs.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spongs.api.model.UserAccount;
import com.spongs.api.model.UserRole;

public interface UserAccountRepository extends JpaRepository<UserAccount, Long> {
	Optional<UserAccount> findByEmail(String email);

	Optional<UserAccount> findByOng_Id(Long ongId);

	boolean existsByEmail(String email);

	boolean existsByRole(UserRole role);
}
