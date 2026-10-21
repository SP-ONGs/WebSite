package com.spongs.api.repository;

import com.spongs.api.model.Ong;
import com.spongs.api.model.OngStatus;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OngRepository extends JpaRepository<Ong, Long> {
	Optional<Ong> findByEmail(String email);

	List<Ong> findAllByStatus(OngStatus status);

	boolean existsByCnpj(String cnpj);
}
