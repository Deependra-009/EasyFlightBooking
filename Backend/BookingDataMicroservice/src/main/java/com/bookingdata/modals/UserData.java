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
@Getter
@Setter
@NoArgsConstructor
@Table(name="userData")
@ToString
public class UserData {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
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
