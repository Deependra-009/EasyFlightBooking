package com.authentication.service;

import java.util.List;

import com.authentication.modals.RegisterData;

public interface RegisterService  {

	public RegisterData addData(RegisterData data);
	public List<RegisterData> getAllData();
	public RegisterData updateUser(int id);
	public RegisterData getForgetPassword(String email);
	public void setOTP(String to,String body);
	public void updatePassword(RegisterData data);
	
}
