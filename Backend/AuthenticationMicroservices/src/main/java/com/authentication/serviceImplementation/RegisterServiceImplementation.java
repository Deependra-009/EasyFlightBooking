package com.authentication.serviceImplementation;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.authentication.modals.RegisterData;
import com.authentication.repository.RegisterRepository;
import com.authentication.service.RegisterService;

@Service
public class RegisterServiceImplementation implements RegisterService {
	
	@Autowired
	private JavaMailSender javaMailSender;
	
	@Autowired
	private RegisterRepository registerRepository;
	

	@Override
	public RegisterData addData(RegisterData data) {
		// TODO Auto-generated method stub
		return this.registerRepository.save(data);
	}

	@Override
	public List<RegisterData> getAllData() {
		// TODO Auto-generated method stub
		return this.registerRepository.findAll();
	}

	@Override
	public RegisterData updateUser(int id) {
		
		RegisterData data=this.registerRepository.getById(id);
		data.setActive(data.isActive()?false:true);
		return this.registerRepository.save(data);
	}
	
	@Override
	public void updatePassword(RegisterData data) {
		
		this.registerRepository.save(data);
	}

	@Override
	public RegisterData getForgetPassword(String email) {
		RegisterData data=this.registerRepository.findByEmail(email);
		
		return data;
	}

	@Override
	public void setOTP(String to, String otp) {
		// TODO Auto-generated method stub
		
		String message=""
				+ "OTP is "+otp+"\n"
				+ "This otp is valid only for 10 minutes";
		
		SimpleMailMessage m=new SimpleMailMessage();
		m.setFrom("flightbookkaro@gmail.com");
		m.setTo(to);
		m.setText(message);
		m.setSubject("Forget Password OTP");
		javaMailSender.send(m);
		System.out.println("mail-sent-successfully");
		
	}
	
	

}
