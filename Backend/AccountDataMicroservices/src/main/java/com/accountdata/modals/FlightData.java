package com.accountdata.modals;



import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class FlightData {

	private int bookingFlightDataId;
	private String arrival;
	private String destination;
	private String flightName;
	private String flightId;
	private String arrivalTime;
	private String destinationTime;
	private String totalTime;
	private String flightType;
	private String amount;
	private String image;
	private String totalSeat;
	private String date;
	private String bookingReferenceNumber;
	
	
}
