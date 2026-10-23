package com.spongs.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spongs.api.model.Tag;

public interface TagRepository extends JpaRepository<Tag, Long> {
}
