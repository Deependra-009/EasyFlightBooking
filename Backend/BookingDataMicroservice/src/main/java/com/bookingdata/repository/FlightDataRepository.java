package com.bookingdata.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bookingdata.modals.BookingDetails;
import com.bookingdata.modals.FlightData;

@Repository
public interface FlightDataRepository extends JpaRepository<FlightData, Integer> {
	public FlightData getByBookingReferenceNumber(String referenceID);
}
