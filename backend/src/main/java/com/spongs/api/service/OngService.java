package com.spongs.api.service;

// Framework
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

// Repositorys
import com.spongs.api.repository.OngRepository;
import com.spongs.api.repository.SocialMediaRepository;
import com.spongs.api.repository.TagRepository;
import com.spongs.api.repository.OngSocialMediaRepository;
import com.spongs.api.repository.OngTagRepository;

// Models
import com.spongs.api.model.Ong;
import com.spongs.api.model.OngStatus;
import com.spongs.api.model.SocialMedia;
import com.spongs.api.model.OngSocialMedia;
import com.spongs.api.model.Tag;
import com.spongs.api.model.OngTag;

// DTOs
import com.spongs.api.dto.OngRegistrationRequest;

// Utils
import java.util.HashSet;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class OngService {
	private final OngRepository ongRepository;
	private final SocialMediaRepository socialMediaRepository;
	private final TagRepository tagRepository;
	private final OngSocialMediaRepository ongSocialMediaRepository;
	private final OngTagRepository ongTagRepository;

	private final PasswordEncoder passwordEncoder;

	public OngService(
			OngRepository ongRepository,
			SocialMediaRepository socialMediaRepository,
			TagRepository tagRepository,
			OngSocialMediaRepository ongSocialMediaRepository,
			OngTagRepository ongTagRepository,
			PasswordEncoder passwordEncoder) {
		this.ongRepository = ongRepository;
		this.socialMediaRepository = socialMediaRepository;
		this.tagRepository = tagRepository;
		this.ongSocialMediaRepository = ongSocialMediaRepository;
		this.ongTagRepository = ongTagRepository;
		this.passwordEncoder = passwordEncoder;
	}

	@Transactional
	public Ong registerOng(OngRegistrationRequest request) {

		// Normalize and validate basic fields
		String normalizedEmail = normalizeEmail(request.email());

		if (request.password() == null || request.password().isBlank()) {
			throw new IllegalArgumentException("Password is required.");
		}

		if (request.name() == null || request.name().isBlank()) {
			throw new IllegalArgumentException("ONG name is required.");
		}

		if (request.cep() == null || !request.cep().matches("\\d{8}")) {
			throw new IllegalArgumentException("Invalid CEP format.");
		}

		if (request.houseNumber() == null || request.houseNumber().isBlank()) {
			throw new IllegalArgumentException("House number is required.");
		}

		// Check if the email is already registered
		boolean IS_ALREADY_REGISTERED = ongRepository.findByEmail(normalizedEmail).isPresent();

		if (IS_ALREADY_REGISTERED) {
			throw new IllegalArgumentException("An account with this email already exists.");
		}

		// Normal and validate optional CNPJ
		String normalizedCnpj = normalizeCnpj(request.cnpj());

		if (normalizedCnpj != null && ongRepository.existsByCnpj(normalizedCnpj)) {
			throw new IllegalArgumentException("An ONG with this CNPJ is already registered");
		}

		// Validate catalogue IDs before creating the ONG.
		List<Long> socialMediaIds = request.socialMedia().stream()
				.map(OngRegistrationRequest.SocialMediaEntry::socialMediaId).toList();
		List<Long> tagIds = request.tagIds();

		ensureNoDuplicates(socialMediaIds, "social media");
		ensureNoDuplicates(tagIds, "tag");

		Map<Long, SocialMedia> socialMediaById = socialMediaRepository.findAllById(socialMediaIds).stream()
				.collect(Collectors.toMap(SocialMedia::getId, Function.identity()));

		boolean SOCIAL_MEDIA_ARE_VALID = socialMediaById.size() == socialMediaIds.size();

		if (!SOCIAL_MEDIA_ARE_VALID) {
			throw new IllegalArgumentException("One or more social media types do not exist.");
		}

		Map<Long, Tag> tagsById = tagRepository.findAllById(tagIds).stream()
				.collect(Collectors.toMap(Tag::getId, Function.identity()));

		boolean TAGS_ARE_VALID = tagsById.size() == tagIds.size();

		if (!TAGS_ARE_VALID) {
			throw new IllegalArgumentException("One or more tags do not exist.");
		}

		// Get password hash
		String passwordHash = passwordEncoder.encode(request.password());

		// Save ONG
		Ong ong = new Ong(
				normalizedEmail,
				passwordHash,
				request.name().trim(),
				request.cep(),
				request.houseNumber().trim(),
				normalizedCnpj,
				request.imageUrl());

		ong.setStatus(OngStatus.IN_REVIEW);

		Ong savedOng = ongRepository.save(ong);

		// Save social media connections
		List<OngSocialMedia> socialMediaEntries = request.socialMedia().stream()
				.map(entry -> new OngSocialMedia(savedOng, socialMediaById.get(entry.socialMediaId()),
						entry.description().trim()))
				.toList();

		ongSocialMediaRepository.saveAll(socialMediaEntries);

		// Save tags connections
		List<OngTag> tagEntries = tagIds.stream().map(tagId -> new OngTag(savedOng, tagsById.get(tagId))).toList();

		ongTagRepository.saveAll(tagEntries);

		return savedOng;
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

	private void ensureNoDuplicates(List<Long> ids, String fieldName) {
		Set<Long> uniqueIds = new HashSet<>(ids);

		if (uniqueIds.size() != ids.size()) {
			throw new IllegalArgumentException("Duplicate " + fieldName + " IDs are not allowed.");
		}
	}
}
