package com.flightdata.serviceImplementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flightdata.modals.FlightData;
import com.flightdata.repository.FlightDataRepository;
import com.flightdata.service.FlightDataService;

@Service
public class ServiceImplementation implements FlightDataService {
	
	@Autowired
	private FlightDataRepository repository;

	@Override
	public FlightData addFlightData(FlightData data) {
		// TODO Auto-generated method stub
		
		this.repository.save(data);
		return data;
	}

	@Override
	public List<FlightData> getAllFlight(String from, String to) {
		// TODO Auto-generated method stub
		
		
		return this.repository.getFlightData(from, to);
//		return null;
	}

	@Override
	public FlightData getFlightData(String id) {
		// TODO Auto-generated method stub
		
		return this.repository.getByFlightId(id);
	}

	@Override
	public void deleteFlightData(int id) {
		
		FlightData entity=this.repository.getOne(id);
		this.repository.delete(entity);
		
	}

}
