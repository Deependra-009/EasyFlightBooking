package com.bookingdata.services;

import java.util.List;

import com.bookingdata.modals.BookingData;
import com.bookingdata.modals.BookingDetails;
import com.bookingdata.modals.FlightData;
import com.bookingdata.modals.UserData;

public interface BookingDataService {
	
	public void addBookingData(BookingData bookingData);
	public List<BookingDetails> getAllBookingDetails();
	public BookingDetails getParticularBookingDetails(String referenceID);
	public UserData getParticularUserDetails(String referenceID);
	public FlightData getParticularFlightDetails(String referenceID);
	public void cancelTicket(BookingData bookingData);

}
