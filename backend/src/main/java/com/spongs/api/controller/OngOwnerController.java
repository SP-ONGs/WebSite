package com.spongs.api.controller;

import jakarta.validation.Valid;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import com.spongs.api.service.AccountAccessService;
import com.spongs.api.service.OngService;

import com.spongs.api.dto.OngOwnerResponse;
import com.spongs.api.dto.OngUpdateRequest;

@RestController
@RequestMapping("/api/owner")
@PreAuthorize("hasRole('ONG_OWNER')")
public class OngOwnerController {
	private final OngService ongService;
	private final AccountAccessService accountAccessService;

	public OngOwnerController(OngService ongService, AccountAccessService accountAccessService) {
		this.ongService = ongService;
		this.accountAccessService = accountAccessService;
	}

	@GetMapping
	public OngOwnerResponse getMyOng(Authentication authentication) {
		var account = accountAccessService.requireCurrentOwner(authentication);
		Long ongId = account.getOng().getId();

		return ongService.getOwnerOng(ongId);
	}

	@PutMapping
	public OngOwnerResponse updateMyOng(@Valid @RequestBody OngUpdateRequest request, Authentication authentication) {
		var account = accountAccessService.requireCurrentOwner(authentication);
		Long ongId = account.getOng().getId();

		return ongService.updateOwnerOng(ongId, request);
	}

	@PostMapping("/removal-request")
	public OngOwnerResponse requestRemoval(Authentication authentication) {
		var account = accountAccessService.requireCurrentOwner(authentication);

		Long ongId = account.getOng().getId();

		return ongService.requestOngRemoval(ongId);
	}
}
