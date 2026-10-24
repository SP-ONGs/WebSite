package com.spongs.api.repository;

import com.spongs.api.model.Ong;
import com.spongs.api.model.OngStatus;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OngRepository extends JpaRepository<Ong, Long> {
	List<Ong> findAllByStatus(OngStatus status);

	List<Ong> findAllByStatusOrderByNameAsc(OngStatus status);

	boolean existsByCnpj(String cnpj);
}
