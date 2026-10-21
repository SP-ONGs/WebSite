package com.spongs.api.service;

import java.util.List;
import java.util.Locale;
import java.util.Optional;

import com.spongs.api.repository.OngRepository;
import com.spongs.api.model.Ong;
import com.spongs.api.model.OngStatus;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class OngService {
	private final OngRepository ongRepository;
	private final PasswordEncoder passwordEncoder;

	public OngService(OngRepository ongRepository, PasswordEncoder passwordEncoder) {
		this.ongRepository = ongRepository;
		this.passwordEncoder = passwordEncoder;
	}

	@Transactional
	public Ong registerOng(String email, String password, String name, String cep, String houseNumber, String cnpj,
			String imageUrl) {

		// Normalize and validate basic fields
		String normalizedEmail = normalizeEmail(email);

		if (password == null || password.isBlank()) {
			throw new IllegalArgumentException("Password is required.");
		}

		if (name == null || name.isBlank()) {
			throw new IllegalArgumentException("ONG name is required.");
		}

		if (cep == null || !cep.matches("\\d{8}")) {
			throw new IllegalArgumentException("Invalid CEP format.");
		}

		if (houseNumber == null || houseNumber.isBlank()) {
			throw new IllegalArgumentException("House number is required.");
		}

		// Check if the email is already registered
		boolean IS_ALREADY_REGISTERED = ongRepository.findByEmail(normalizedEmail).isPresent();

		if (IS_ALREADY_REGISTERED) {
			throw new IllegalArgumentException("An account with this email already exists.");
		}

		// Normal and validate optional CNPJ
		String normalizedCnpj = normalizeCnpj(cnpj);

		if (normalizedCnpj != null && ongRepository.existsByCnpj(normalizedCnpj)) {
			throw new IllegalArgumentException("An ONG with this CNPJ is already registered");
		}

		// Get password hash
		String passwordHash = passwordEncoder.encode(password);

		// Register ONG
		Ong ong = new Ong(normalizedEmail, passwordHash, name.trim(), cep, houseNumber.trim(), normalizedCnpj, imageUrl);

		ong.setStatus(OngStatus.IN_REVIEW);

		return ongRepository.save(ong);
	}

	@Transactional(readOnly = true)
	public List<Ong> getApprovedOngs() {
		return ongRepository.findAllByStatus(OngStatus.APPROVED);
	}

	@Transactional(readOnly = true)
	public Optional<Ong> getApprovedOngById(Long id) {
		return ongRepository.findById(id).filter(ong -> ong.getStatus() == OngStatus.APPROVED);
	}

	private String normalizeEmail(String email) {
		if (email == null || email.isBlank()) {
			throw new IllegalArgumentException("Email is required.");
		}

		return email.trim().toLowerCase(Locale.ROOT);
	}

	private String normalizeCnpj(String cnpj) {
		if (cnpj == null || cnpj.isBlank()) {
			return null;
		}

		// Allow only digits
		String digits = cnpj.replaceAll("\\D", "");

		if (digits.length() != 14) {
			throw new IllegalArgumentException("CNPJ must contain 14 digits when provided.");
		}

		return digits;
	}
}
