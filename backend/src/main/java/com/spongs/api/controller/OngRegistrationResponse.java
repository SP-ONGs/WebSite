package com.spongs.api.controller;

import com.spongs.api.model.Ong;

public record OngRegistrationResponse(
		Long id,
		String email,
		String name,
		String cep,
		String houseNumber,
		String cnpj,
		String imageUrl) {
	public static OngRegistrationResponse from(Ong ong) {
		return new OngRegistrationResponse(
				ong.getId(),
				ong.getEmail(),
				ong.getName(),
				ong.getCep(),
				ong.getHouseNumber(),
				ong.getCnpj(),
				ong.getImageUrl());
	}
}
