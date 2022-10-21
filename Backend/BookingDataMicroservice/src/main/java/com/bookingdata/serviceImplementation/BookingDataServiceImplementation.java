package com.bookingdata.serviceImplementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookingdata.modals.BookingData;
import com.bookingdata.modals.BookingDetails;
import com.bookingdata.modals.FlightData;
import com.bookingdata.modals.UserData;
import com.bookingdata.repository.BookingDetailsRepository;
import com.bookingdata.repository.CardDataRepository;
import com.bookingdata.repository.FlightDataRepository;
import com.bookingdata.repository.UserDataRepository;
import com.bookingdata.services.BookingDataService;

@Service
public class BookingDataServiceImplementation implements BookingDataService {
	
	@Autowired
	private FlightDataRepository flightDataRepository;
	
	@Autowired
	private UserDataRepository userDataRepository;
	
	@Autowired
	private CardDataRepository cardDataRepository;
	
	@Autowired
	private BookingDetailsRepository bookingDetailsRepository;

	@Override
	public void addBookingData(BookingData bookingData) {
		
		this.flightDataRepository.save(bookingData.getFlightData());
		this.userDataRepository.save(bookingData.getUserData());
		this.cardDataRepository.save(bookingData.getCardData());
		this.bookingDetailsRepository.save(bookingData.getBookingDetails());
		
		
	}

	@Override
	public List<BookingDetails> getAllBookingDetails() {
		// TODO Auto-generated method stub
		
		return this.bookingDetailsRepository.findAll();
	}

	@Override
	public BookingDetails getParticularBookingDetails(String referenceID) {
		
		return this.bookingDetailsRepository.getByBookingReferenceNumber(referenceID);
	}

	@Override
	public UserData getParticularUserDetails(String referenceID) {
		// TODO Auto-generated method stub
		return this.userDataRepository.getByBookingReferenceNumber(referenceID);
	}

	@Override
	public FlightData getParticularFlightDetails(String referenceID) {
		// TODO Auto-generated method stub
		return this.flightDataRepository.getByBookingReferenceNumber(referenceID);
	}

	@Override
	public void cancelTicket(BookingData bookingData) {
		// TODO Auto-generated method stub
		this.bookingDetailsRepository.save(bookingData.getBookingDetails());
		return;
	}
	
	 

}
