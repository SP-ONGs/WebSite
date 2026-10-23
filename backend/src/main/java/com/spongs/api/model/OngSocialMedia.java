package com.spongs.api.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;

@Entity
@Table(name = "ong_social_media", uniqueConstraints = @UniqueConstraint(name = "uq_ong_social_media_type", columnNames = {
		"ong_id", "social_media_id" }))
public class OngSocialMedia {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "ong_id", nullable = false)
	private Ong ong;

	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "social_media_id", nullable = false)
	private SocialMedia socialMedia;

	@Column(nullable = false, length = 500)
	private String description;

	protected OngSocialMedia() {
	}

	public OngSocialMedia(Ong ong, SocialMedia socialMedia, String description) {
		this.ong = ong;
		this.socialMedia = socialMedia;
		this.description = description;
	}

	public Long getId() {
		return id;
	}

	public Ong getOng() {
		return ong;
	}

	public SocialMedia getSocialMedia() {
		return socialMedia;
	}

	public String getDescription() {
		return description;
	}
}
