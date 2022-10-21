package com.bookingdata.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bookingdata.modals.CardData;

@Repository
public interface CardDataRepository extends JpaRepository<CardData, Integer> {

}
