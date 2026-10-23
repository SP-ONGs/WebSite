package com.spongs.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spongs.api.model.SocialMedia;

import java.util.List;

public interface SocialMediaRepository extends JpaRepository<SocialMedia, Long> {
	List<SocialMedia> findAllByOrderByNameAsc();
}
