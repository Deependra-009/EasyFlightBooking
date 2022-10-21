package com.bookingdata.feignclient;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;

import com.bookingdata.DTO.ValidatingDTO;

@FeignClient(url="http://localhost:8088/authorization",name="authorization-service")
public interface AuthFeignClient {
	
	@GetMapping("/validate")
	public ValidatingDTO validate(@RequestHeader("Authorization") String token);

}
