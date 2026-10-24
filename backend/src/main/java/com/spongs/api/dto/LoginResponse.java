package com.spongs.api.dto;

import com.spongs.api.model.UserRole;

public record LoginResponse(
		String email,
		UserRole role,
		Long ongId) {
}
