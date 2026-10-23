package com.spongs.api.model;

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
@Table(name = "ong_tag", uniqueConstraints = @UniqueConstraint(name = "uq_ong_tag", columnNames = { "ong_id",
		"tag_id" }))
public class OngTag {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "ong_id", nullable = false)
	private Ong ong;

	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "tag_id", nullable = false)
	private Tag tag;

	protected OngTag() {
	}

	public OngTag(Ong ong, Tag tag) {
		this.ong = ong;
		this.tag = tag;
	}

	public Long getId() {
		return id;
	}

	public Ong getOng() {
		return ong;
	}

	public Tag getTag() {
		return tag;
	}
}
