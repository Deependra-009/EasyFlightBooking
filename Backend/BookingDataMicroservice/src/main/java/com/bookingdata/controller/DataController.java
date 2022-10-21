package com.bookingdata.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.bookingdata.feignclient.AuthFeignClient;
import com.bookingdata.feignclient.BookingDataFeignClient;
import com.bookingdata.modals.BookingData;
import com.bookingdata.modals.BookingDetails;
import com.bookingdata.modals.FlightData;
import com.bookingdata.modals.UserData;
import com.bookingdata.serviceImplementation.BookingDataServiceImplementation;

@RestController
@CrossOrigin
public class DataController {
	
	@Autowired
	private BookingDataServiceImplementation service;

	@Autowired
	private BookingDataFeignClient bookingDataFeignClient;
	
	@Autowired
	private AuthFeignClient authFeignClient;
	

	

	@PostMapping("/addBookingData")
	public ResponseEntity<BookingData> addBookingData(@RequestHeader("Authorization") String token,@RequestBody BookingData bookingData) {
		
		if(authFeignClient.validate(token).isStatus()==false) return new ResponseEntity<BookingData>(bookingData,HttpStatus.UNAUTHORIZED);
		
		generateValue(bookingData);
		bookingData.getCardData().setPhoneNumber(bookingData.getUserData().getPhoneNumber());
		bookingData.getFlightData().setBookingReferenceNumber(bookingData.getBookingDetails().getBookingReferenceNumber());
		bookingData.getUserData().setBookingReferenceNumber(bookingData.getBookingDetails().getBookingReferenceNumber());
		bookingData.getBookingDetails().setAmount(bookingData.getFlightData().getAmount());
		bookingData.getBookingDetails().setStatus("Active");
		int currentSeat=Integer.parseInt(bookingData.getFlightData().getTotalSeat());
		bookingData.getFlightData().setTotalSeat(String.valueOf(currentSeat-1));
		System.out.println("----+++++++-----");
		String email=this.authFeignClient.validate(token).getEmail();
		System.out.println(email);
		bookingData.getBookingDetails().setEmail(email);
		
		this.bookingDataFeignClient.UpdateFlightData(token,bookingData.getFlightData().getFlightId());
		
		
		
		System.out.println(bookingData);

		this.service.addBookingData(bookingData);
		
		
		return new ResponseEntity<BookingData>(bookingData,HttpStatus.OK);

	}

	public void generateValue(BookingData bookingData) {

		String AlphaNumericString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "0123456789" + "abcdefghijklmnopqrstuvxyz";
		String Number = "0123456789";

		// ************************ PNR Value Generate *******************************************

		int n = 10;

		StringBuilder pnr = new StringBuilder(n);

		for (int i = 0; i < n; i++) {

			// generate a random number between
			// 0 to AlphaNumericString variable length
			int index = (int) (AlphaNumericString.length() * Math.random());

			// add Character one by one in end of sb
			pnr.append(AlphaNumericString.charAt(index));
		}

		bookingData.getBookingDetails().setPNR(String.valueOf(pnr));

		// ************************ Refrence Number Generate *******************************************

		n = 15;

		StringBuilder referenceNumber = new StringBuilder(n);

		for (int i = 0; i < n; i++) {

			// generate a random number between
			// 0 to AlphaNumericString variable length
			int index = (int) (Number.length() * Math.random());

			// add Character one by one in end of sb
			referenceNumber.append(Number.charAt(index));
		}

		bookingData.getBookingDetails().setBookingReferenceNumber(String.valueOf(referenceNumber));

		// ************************ Refrence Number Generate  *******************************************

		n = 15;

		StringBuilder transactionId = new StringBuilder(n);

		for (int i = 0; i < n; i++) {

			// generate a random number between
			// 0 to AlphaNumericString variable length
			int index = (int) (Number.length() * Math.random());

			// add Character one by one in end of sb
			transactionId.append(Number.charAt(index));
		}

		bookingData.getBookingDetails().setTransactionId(String.valueOf(transactionId));
		return;

	}
	
	@GetMapping("/getBookingDetails")
	public ResponseEntity<List<BookingDetails>> getBookingDetails(@RequestHeader("Authorization") String token) {
		
		
		if(this.authFeignClient.validate(token).isStatus()==false) return new ResponseEntity<List<BookingDetails>>(new ArrayList<>(),HttpStatus.UNAUTHORIZED);
		System.out.println("------------");
		List<BookingDetails> list=this.service.getAllBookingDetails();
//		list=list.stream().filter(d->(d.getEmail().equals(this.authFeignClient.validate(token).getEmail()).collect(Collectors.toList())));
		String email=this.authFeignClient.validate(token).getEmail();
		System.out.println(email);
		list=list.stream()
				.filter(d->(d.getEmail().equals(email)))
				.collect(Collectors.toList());
		return new ResponseEntity<List<BookingDetails>>(list,HttpStatus.OK);
		
	}
	
	@PostMapping("/getParticularBookingDetails")
	public ResponseEntity<BookingData> getParticularBookingDetails(@RequestHeader("Authorization") String token,@RequestBody String referenceID) {
		
		System.out.println("->"+token);
		
		if(this.authFeignClient.validate(token).isStatus()==false) return new ResponseEntity<BookingData>(new BookingData(),HttpStatus.UNAUTHORIZED);
		
		BookingDetails bookingDetails=this.service.getParticularBookingDetails(referenceID);
		FlightData flightData=this.service.getParticularFlightDetails(referenceID);
		UserData userData=this.service.getParticularUserDetails(referenceID);
		
		
		
		BookingData bd=new BookingData(flightData,userData,null,bookingDetails);
		
		System.out.println(bd);
		return new ResponseEntity<BookingData>(bd,HttpStatus.OK);
	}
	
	@PutMapping("/deleteTicket")
	public ResponseEntity<BookingData> deleteTicket(@RequestHeader("Authorization") String token,@RequestBody BookingData data){
		
		if(this.authFeignClient.validate(token).isStatus()==false) return new ResponseEntity<BookingData>(new BookingData(),HttpStatus.UNAUTHORIZED);
		
		this.service.cancelTicket(data);
		
		return new ResponseEntity<BookingData>(data,HttpStatus.OK);
		
		
	}
	
//	@GetMapping("/test")
//	public void test() {
//		System.out.println("test");
//		this.bookingDataFeignClient.UpdateFlightData("6E-2089");
//	}
//	
	
	
	

}
