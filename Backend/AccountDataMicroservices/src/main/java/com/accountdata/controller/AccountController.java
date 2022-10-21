package com.accountdata.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.accountdata.feignclient.AccountFeignClient;
import com.accountdata.feignclient.AuthFeignClient;
import com.accountdata.modals.BookingData;

import feign.Response;

@RestController
@CrossOrigin
public class AccountController {
	
	@Autowired
	private AccountFeignClient accountFeignClient;
	
	@Autowired
	private AuthFeignClient authFeignClient;
	
	@GetMapping("/gethello")
	public String hello() {
		return "hello";
	}
	
	@GetMapping("/getParticularBookingDetails/{referenceID}")
	public ResponseEntity<BookingData> getParticularData(@RequestHeader("Authorization") String token,@PathVariable("referenceID") String id) {
		
		if(this.authFeignClient.validate(token).isStatus()==false) return new ResponseEntity<BookingData>(new BookingData(),HttpStatus.UNAUTHORIZED);
		
		System.out.println("----------"+id);
	
		return this.accountFeignClient.getParticularBookingDetails(token, id);
	}
	
	@PutMapping("/deleteTicket")
	public ResponseEntity<BookingData> deleteTicket(@RequestHeader("Authorization") String token,@RequestBody BookingData data){
		
		if(this.authFeignClient.validate(token).isStatus()==false) return new ResponseEntity<BookingData>(new BookingData(),HttpStatus.UNAUTHORIZED);
		System.out.println("delete ticket");
		data.getBookingDetails().setStatus("Cancelled");
		data.getBookingDetails().setCancelled(true);
		System.out.println(data);
		this.accountFeignClient.deleteTicket(token,data);
		return new ResponseEntity<BookingData>(data,HttpStatus.OK);
//		return null;
		
		
	}
	
	
	
	

}
