package com.spongs.api.controller;

import com.spongs.api.service.OngService;

import com.spongs.api.dto.TagResponse;
import com.spongs.api.dto.SocialMediaTypeResponse;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PublicCatalogController {
	private final OngService ongService;

	public PublicCatalogController(OngService ongService) {
		this.ongService = ongService;
	}

	@GetMapping("/tags")
	public List<TagResponse> getTags() {
		return ongService.getAvailableTags();
	}

	@GetMapping("/social-media")
	public List<SocialMediaTypeResponse> getSocialMediaTypes() {
		return ongService.getAvailableSocialMedia();
	}
}
