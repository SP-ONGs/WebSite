package com.spongs.api.dto;

import java.time.Instant;

import com.spongs.api.model.Ong;
import com.spongs.api.model.OngStatus;

public record OngRegistrationResponse(
		Long id,
		String email,
		String name,
		String cep,
		String houseNumber,
		String cnpj,
		String imageUrl,
		OngStatus status,
		Instant createdAt) {
	public static OngRegistrationResponse from(Ong ong) {
		return new OngRegistrationResponse(
				ong.getId(),
				ong.getEmail(),
				ong.getName(),
				ong.getCep(),
				ong.getHouseNumber(),
				ong.getCnpj(),
				ong.getImageUrl(),
				ong.getStatus(),
				ong.getCreatedAt());
	}
}
