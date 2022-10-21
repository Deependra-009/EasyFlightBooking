package com.bookingdata.feignclient;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;

@FeignClient(url="http://localhost:8085/flightdata",name="flightdata-service")
public interface BookingDataFeignClient {

	
	@PostMapping("/updateFlightData/{id}")
	public void UpdateFlightData(@RequestHeader("Authorization") String token,@PathVariable("id") String id);
	
}
