package com.spongs.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spongs.api.model.OngSocialMedia;

import java.util.List;

public interface OngSocialMediaRepository extends JpaRepository<OngSocialMedia, Long> {
	List<OngSocialMedia> findAllByOng_Id(Long ongId);

	void deleteAllByOng_Id(Long ongId);
}
