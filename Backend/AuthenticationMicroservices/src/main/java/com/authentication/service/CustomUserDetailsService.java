package com.authentication.service;

import java.io.IOException;
import java.io.NotActiveException;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.authentication.modals.CustomUserDetails;
import com.authentication.modals.RegisterData;
import com.authentication.repository.RegisterRepository;

@Service
public class CustomUserDetailsService  implements UserDetailsService{
	
	@Autowired
	private RegisterRepository registerRepository;

	@Override
	public UserDetails loadUserByUsername(String email) {
		// TODO Auto-generated method stub
//		email="deeputrivedi0409@gmail.com";
		RegisterData data=this.registerRepository.findByEmail(email);
		
		
		System.out.println("->"+data+" email "+email);
		
		if(data==null  || data.isActive()==false) {
			throw new UsernameNotFoundException("User not found");
		}
		
		
		return new CustomUserDetails(data);
		
	}

}
