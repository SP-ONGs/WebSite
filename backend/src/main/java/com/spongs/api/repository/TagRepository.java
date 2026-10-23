package com.spongs.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spongs.api.model.Tag;

import java.util.List;

public interface TagRepository extends JpaRepository<Tag, Long> {
	List<Tag> findAllByOrderByDescriptionAsc();
}
