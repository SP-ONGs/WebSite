package com.spongs.api.controller;

import com.spongs.api.service.OngService;
import com.spongs.api.model.Ong;

import com.spongs.api.dto.OngPublicSummary;
import com.spongs.api.dto.OngPublicResponse;
import com.spongs.api.dto.OngRegistrationRequest;
import com.spongs.api.dto.OngRegistrationResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

import java.util.List;

@RestController
@RequestMapping("/api/ongs")
public class OngController {
	private final OngService ongService;

	public OngController(OngService ongService) {
		this.ongService = ongService;
	}

	@GetMapping
	public List<OngPublicSummary> getPublicOngs() {
		return ongService.getPublicOngs();
	}

	@GetMapping("/{id}")
	public OngPublicResponse getPublicOngById(@PathVariable Long id) {
		return ongService.getPublicOngById(id);
	}

	@PostMapping
	public ResponseEntity<OngRegistrationResponse> registerOng(@Valid @RequestBody OngRegistrationRequest request) {
		Ong ong = ongService.registerOng(request);

		String email = request.email().trim().toLowerCase(java.util.Locale.ROOT);

		OngRegistrationResponse response = OngRegistrationResponse.from(ong, email);

		return ResponseEntity.status(HttpStatus.CREATED).body(response);
	}
}
