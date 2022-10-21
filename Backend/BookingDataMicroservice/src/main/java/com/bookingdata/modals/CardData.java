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

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="card_detail")
@ToString
public class CardData {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int cardDataId;
	private String cardHolderName;
	private String accountNumber;
	private String cvvNumber;
	private String expiryDate;
	private String phoneNumber;
	

}
