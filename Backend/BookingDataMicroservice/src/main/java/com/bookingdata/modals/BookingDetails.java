package com.bookingdata.modals;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="bookingDetails")
@Getter
@Setter
@NoArgsConstructor
@ToString
public class BookingDetails {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int bookingDetailsId;
	private String PNR;
	private String bookingReferenceNumber;
	private String transactionId;
	private String amount;
	private String status;
	private boolean cancelled=false;
	private String email;

}
