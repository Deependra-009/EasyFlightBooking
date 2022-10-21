package com.flightdata.modals;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class SearchFlightData {
	
	private String arrival;
	private String destination;
	private String journeyDate;
	private String returnDate;
	private String noOfAdult;
	private String noOfChildern;
	private String noOfInfant;

}
