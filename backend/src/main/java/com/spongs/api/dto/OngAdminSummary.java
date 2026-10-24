package com.spongs.api.dto;

import com.spongs.api.model.OngStatus;

import java.time.Instant;

public record OngAdminSummary(
		Long id,
		String email,
		String name,
		String cep,
		String cnpj,
		OngStatus status,
		Instant createdAt) {
}
