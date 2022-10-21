package com.bookingdata.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bookingdata.modals.BookingDetails;
import com.bookingdata.modals.UserData;

@Repository
public interface UserDataRepository extends JpaRepository<UserData, Integer> {
	public UserData getByBookingReferenceNumber(String referenceID);
}
