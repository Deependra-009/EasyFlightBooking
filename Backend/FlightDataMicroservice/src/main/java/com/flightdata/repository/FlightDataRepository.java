package com.flightdata.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.flightdata.modals.FlightData;

@Repository
public interface FlightDataRepository extends JpaRepository<FlightData,Integer>  {
	
	@Query("select fd from FlightData fd where fd.arrival LIKE %?1%  and fd.destination LIKE %?2%  ")
	public List<FlightData> getFlightData(String from,String to);
	
	
	public FlightData getByFlightId(String id);
	

}
