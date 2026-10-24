package com.spongs.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spongs.api.model.OngTag;

import java.util.List;

public interface OngTagRepository extends JpaRepository<OngTag, Long> {
	List<OngTag> findAllByOng_Id(Long ongId);

	void deleteAllByOng_Id(Long ongId);
}
