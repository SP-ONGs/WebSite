package com.spongs.api.dto;

import com.spongs.api.model.OngStatus;

import java.time.Instant;
import java.util.List;

public record OngAdminResponse(
		Long id,
		String email,
		String name,
		String cep,
		String houseNumber,
		String cnpj,
		String imageUrl,
		OngStatus status,
		Instant createdAt,
		List<OngSocialMediaResponse> socialMedia,
		List<TagResponse> tags) {
}
