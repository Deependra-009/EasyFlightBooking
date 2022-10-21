package com.accountdata.feignclient;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;

import com.accountdata.DTO.ValidatingDTO;
import com.accountdata.modals.BookingData;


@FeignClient(url="http://localhost:8086/bookingdata",name="bookingdata-service")
public interface AccountFeignClient {
	
	@PostMapping("/getParticularBookingDetails")
	public ResponseEntity<BookingData> getParticularBookingDetails(@RequestHeader("Authorization") String token,@RequestBody String referenceID);
	
	@PutMapping("/deleteTicket")
	public ResponseEntity<BookingData> deleteTicket(@RequestHeader("Authorization") String token,@RequestBody BookingData data);
	
	

}
