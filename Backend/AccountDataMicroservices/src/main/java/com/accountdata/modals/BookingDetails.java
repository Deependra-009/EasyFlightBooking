package com.accountdata.modals;



import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@NoArgsConstructor
@ToString
public class BookingDetails {
	

	private int bookingDetailsId;
	private String PNR;
	private String bookingReferenceNumber;
	private String transactionId;
	private String amount;
	private String status;
	private boolean cancelled=false;
	private String email;

}
