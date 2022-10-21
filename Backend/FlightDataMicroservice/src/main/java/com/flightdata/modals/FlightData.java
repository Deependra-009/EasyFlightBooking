package com.flightdata.modals;

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
@ToString
@Table(name="FlightData")
public class FlightData {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
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
	
	
}
