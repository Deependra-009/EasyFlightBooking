package com.flightdata.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.flightdata.feignclient.AuthFeignClient;
import com.flightdata.modals.FlightData;
import com.flightdata.modals.SearchFlightData;
import com.flightdata.serviceImplementation.ServiceImplementation;

@RestController
@CrossOrigin
public class DataController {
	
	@Autowired
	private ServiceImplementation serviceImplementation;
	
	@Autowired
	private AuthFeignClient authFeignClient;
	
	@PostMapping("/addFlightData")
	public ResponseEntity<FlightData> addData(@RequestHeader("Authorization")  String token,@RequestBody FlightData data) {
		
		if(this.authFeignClient.validate(token).isStatus()==false) return new ResponseEntity<FlightData>(data,HttpStatus.UNAUTHORIZED);
		
		System.out.println(data);
		this.serviceImplementation.addFlightData(data);
		
		return new ResponseEntity<FlightData>(data,HttpStatus.OK);
	}
	
	@PostMapping("/getAllData")
	public ResponseEntity<List<FlightData>> getAllFlightData(@RequestHeader("Authorization") String token,@RequestBody SearchFlightData data){
		
		if(this.authFeignClient.validate(token).isStatus()==false) return new ResponseEntity<List<FlightData>>(new ArrayList<>(),HttpStatus.UNAUTHORIZED);
		
		System.out.println("->"+data);
		List<FlightData> flightData=this.serviceImplementation.getAllFlight(data.getArrival(), data.getDestination());
		
		if(data.getJourneyDate().equals("")) {
			return new ResponseEntity<List<FlightData>>(flightData,HttpStatus.OK);
		}
		
		flightData=flightData.stream()
		.filter(d->Integer.parseInt(d.getTotalSeat())>0)
		.collect(Collectors.toList());
		
		updateData(flightData,data);
		
		
		return new ResponseEntity<List<FlightData>>(flightData,HttpStatus.OK);
	}

	private void updateData(List<FlightData> flightData, SearchFlightData data) {
		// TODO Auto-generated method stub
		
		String date[]=data.getJourneyDate().split("/");
		int _date=Integer.parseInt(date[0]);
		int _month=Integer.parseInt(date[1]);
		int _year=Integer.parseInt(date[2]);
		
		int total=(((_date*_month)+_year)*50)/100;
		int total_adults=Integer.parseInt(data.getNoOfAdult());
		
		for(FlightData i:flightData) {
			String amount=i.getAmount();
			if(amount.contains(",")) {
				amount=amount.substring(0,1)+amount.substring(2);
			}
			String new_amount=String.valueOf((Integer.parseInt(amount)+total)*total_adults);
			new_amount=new_amount.substring(0,1)+","+new_amount.substring(1);
			System.out.println(new_amount);
			i.setAmount(new_amount);
		}
		
		
	}
	
	@PostMapping("/updateFlightData/{id}")
	public ResponseEntity<HttpStatus> UpdateFlightData(@RequestHeader("Authorization") String token,@PathVariable("id") String id) {
		
		if(this.authFeignClient.validate(token).isStatus()==false) return new ResponseEntity<HttpStatus>(HttpStatus.UNAUTHORIZED);
		
		FlightData new_data=this.serviceImplementation.getFlightData(id);
		
		int currseat=Integer.parseInt(new_data.getTotalSeat());
		
		new_data.setTotalSeat(String.valueOf(currseat-1));
		
		this.serviceImplementation.addFlightData(new_data);
//		
		
		System.out.println(id);
		
		return new ResponseEntity<HttpStatus>(HttpStatus.OK);
	}
	
	@PostMapping("/updateFlightData/ADMIN")
	public ResponseEntity<FlightData> UpdateFlightDataAdmin(@RequestHeader("Authorization") String token,@RequestBody FlightData data) {
		
		if(this.authFeignClient.validate(token).isStatus()==false) return new ResponseEntity<FlightData>(new FlightData(),HttpStatus.UNAUTHORIZED);
		
		return new ResponseEntity<FlightData>(this.serviceImplementation.addFlightData(data),HttpStatus.OK);

	}
	
	@DeleteMapping("/deletFlightData/ADMIN/{id}")
	public ResponseEntity<HttpStatus> deletFlightData(@RequestHeader("Authorization") String token,@PathVariable("id") int id) {
		
		if(this.authFeignClient.validate(token).isStatus()==false) return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		try {
//			System.out.println(id+" ");
			this.serviceImplementation.deleteFlightData(id);
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
	

}
