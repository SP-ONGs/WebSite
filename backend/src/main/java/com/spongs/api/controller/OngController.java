package com.spongs.api.controller;

import com.spongs.api.service.OngService;
import com.spongs.api.model.Ong;

import com.spongs.api.dto.OngRegistrationRequest;
import com.spongs.api.dto.OngRegistrationResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/ongs")
public class OngController {
	private final OngService ongService;

	public OngController(OngService ongService) {
		this.ongService = ongService;
	}

	@PostMapping
	public ResponseEntity<OngRegistrationResponse> registerOng(@Valid @RequestBody OngRegistrationRequest request) {
		Ong ong = ongService.registerOng(request);

		OngRegistrationResponse response = OngRegistrationResponse.from(ong);

		return ResponseEntity.status(HttpStatus.CREATED).body(response);
	}
}
