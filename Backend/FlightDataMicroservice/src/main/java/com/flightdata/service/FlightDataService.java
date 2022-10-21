package com.flightdata.service;

import java.util.List;

import com.flightdata.modals.FlightData;


public interface FlightDataService {
	
	public FlightData addFlightData(FlightData data);
	public List<FlightData> getAllFlight(String from,String to);
	public FlightData getFlightData(String id);
	public void deleteFlightData(int id);
	

}
