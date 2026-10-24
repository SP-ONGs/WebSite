package com.spongs.api.model;

import java.time.Instant;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name = "user_account")
public class UserAccount {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false, unique = true, length = 254)
	private String email;

	@Column(name = "password_hash", nullable = false, length = 255)
	private String passwordHash;

	@Enumerated(EnumType.STRING)
	@Column(nullable = false, length = 20)
	private UserRole role;

	@OneToOne
	@JoinColumn(name = "ong_id", unique = true)
	private Ong ong;

	@CreationTimestamp
	@Column(name = "created_at", nullable = false, updatable = false)
	private Instant createdAt;

	protected UserAccount() {
	}

	private UserAccount(String email, String passwordHash, UserRole role, Ong ong) {
		this.email = email;
		this.passwordHash = passwordHash;
		this.role = role;
		this.ong = ong;
	}

	public static UserAccount createOwner(String email, String passwordHash, Ong ong) {
		if (ong == null) {
			throw new IllegalArgumentException("An owner account must be linked to an ONG");
		}

		return new UserAccount(email, passwordHash, UserRole.ONG_OWNER, ong);
	}

	public static UserAccount createAdmin(String email, String passwordHash) {
		return new UserAccount(email, passwordHash, UserRole.ADMIN, null);
	}

	public Long getId() {
		return id;
	}

	public String getEmail() {
		return email;
	}

	public String getPasswordHash() {
		return passwordHash;
	}

	public UserRole getRole() {
		return role;
	}

	public Ong getOng() {
		return ong;
	}

	public Instant getCreatedAt() {
		return createdAt;
	}
}
