package com.bookingdata;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class BookingDataMicroserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookingDataMicroserviceApplication.class, args);
	}

}
