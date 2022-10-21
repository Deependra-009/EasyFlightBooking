package com.authentication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.authentication.modals.RegisterData;

@Repository
public interface RegisterRepository extends JpaRepository<RegisterData, Integer> {
	
	public RegisterData findByEmail(String email);

}
