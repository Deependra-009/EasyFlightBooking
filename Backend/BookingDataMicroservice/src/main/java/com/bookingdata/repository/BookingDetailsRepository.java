package com.bookingdata.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bookingdata.modals.BookingDetails;

@Repository
public interface BookingDetailsRepository extends JpaRepository<BookingDetails, Integer> {
	
	public BookingDetails getByBookingReferenceNumber(String referenceID);

}
