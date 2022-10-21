package com.accountdata.modals;



import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class BookingData {
	
	private FlightData flightData;
	private UserData userData;
	private BookingDetails bookingDetails;

}
