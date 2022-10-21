package com.accountdata.modals;



import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class UserData {
	
	private int userDataId;
	private String firstName;
	private String lastname;
	private String street;
	private String city;
	private String state;
	private String pinCode;
	private String phoneNumber;
	private String email;
	private String bookingReferenceNumber;

}
