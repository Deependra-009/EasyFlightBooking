package com.authentication.controller;

import java.io.IOException;
import java.io.NotActiveException;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Random;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.authentication.DTO.ValidatingDTO;
import com.authentication.helper.JwtRequest;
import com.authentication.helper.JwtResponse;
import com.authentication.helper.JwtUtil;
import com.authentication.modals.Authority;
import com.authentication.modals.ForgetPasswordDTO;
import com.authentication.modals.RegisterData;
import com.authentication.service.CustomUserDetailsService;
import com.authentication.serviceImplementation.RegisterServiceImplementation;

@RestController
@CrossOrigin("*")
public class AuthController {
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private JwtUtil jwtUtil;
	
	
	@Autowired
	private CustomUserDetailsService customUserDetailsService;
	
	@Autowired
	private RegisterServiceImplementation registerService;
	
	@Autowired
	private ValidatingDTO validatingDTO;

	@GetMapping("/test")
	public String test() {
		return "test";
	}
	
	@GetMapping("/ADMIN/getAllData")
	public List<RegisterData> getAllData(){
		List<RegisterData> data=registerService.getAllData();
		data=data.stream().filter(d->(d.getAuthority().equals("USER"))).collect(Collectors.toList());
		
		System.out.println(data.get(0).getAuthority());
		
		return data;
		
	}
	
	@PostMapping("/register")
	public RegisterData register(@RequestBody RegisterData data) {
		data.setAuthority("USER");
		data.setActive(true);
		return this.registerService.addData(data);
	}
	
	@GetMapping("/ADMIN/disableUser/{id}")
	public RegisterData updateData(@PathVariable("id") int id) {
		
		
		return this.registerService.updateUser(id);
		
	}
	
	@PostMapping("/token")
	public ResponseEntity<JwtResponse> login(@RequestBody JwtRequest jwtRequest) throws Exception {
		
		System.out.println("jwt"+jwtRequest);
		
		try {
			
			this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(jwtRequest.getEmail(), jwtRequest.getPassword()));
			
			
		}catch(UsernameNotFoundException e) {
			e.printStackTrace();
			throw new Exception("User Not Found");
		}catch(BadCredentialsException e) {
			e.printStackTrace();
			throw new Exception("Bad Credentials!!!");
		}
		
		UserDetails userDetails = this.customUserDetailsService.loadUserByUsername(jwtRequest.getEmail());
		
		String token = this.jwtUtil.generateToken(userDetails);
		String username=userDetails.getUsername();
		String password=userDetails.getPassword();
		Collection<? extends GrantedAuthority> authority=userDetails.getAuthorities();
		
	
		
		
		return ResponseEntity.ok(new JwtResponse(token,username,password,authority,true));
//		return null;
		
		
	}
	
	@GetMapping("/validate")
	public ResponseEntity<ValidatingDTO> validate(@RequestHeader(name="Authorization") String check){
		String token=check.substring(7);
		System.out.println("validate"+token);
		try {
			
			UserDetails user=this.customUserDetailsService.loadUserByUsername(jwtUtil.getUsernameFromToken(token));
			if(Boolean.TRUE.equals(jwtUtil.validateToken(token, user))) {
				System.out.println("Token matched");
				System.out.println("---->>>"+user.getUsername());
				validatingDTO.setStatus(true);
				validatingDTO.setEmail(user.getUsername());
				return new ResponseEntity<ValidatingDTO>(validatingDTO,HttpStatus.OK);
			}
			else {
				System.out.println("token invalid");
				return new ResponseEntity<>(validatingDTO, HttpStatus.UNAUTHORIZED);
			}
		}catch(Exception e) {
			validatingDTO.setStatus(false);
			return new ResponseEntity<ValidatingDTO>(validatingDTO,HttpStatus.UNAUTHORIZED);
		}
		
	}
	
	@PostMapping("/forget-password")
	public ResponseEntity<RegisterData> getForgetPasswordData(@RequestBody RegisterData data) throws Exception{
		System.out.println("forget password");
		System.out.println("---->"+data);
		RegisterData userdata=this.registerService.getForgetPassword(data.getEmail());
		System.out.println("=>"+userdata);
		if(userdata==null) throw new Exception("User Not Found");
		return new ResponseEntity<RegisterData>(userdata,HttpStatus.OK);
	}
	
	@GetMapping("/send-otp/{email}")
	public ResponseEntity<ForgetPasswordDTO> sendOTP(@PathVariable("email") String email) {
		System.out.println("email"+email);
		Random random=new Random();
		int otp=random.nextInt(999999);
		System.out.println("otp"+otp);
		
		registerService.setOTP(email, String.valueOf(otp));
		
		return new ResponseEntity<ForgetPasswordDTO>(new ForgetPasswordDTO(String.valueOf(otp), email),HttpStatus.OK);
	}
	
	@PutMapping("/update-password")
	public void updatePassword(@RequestBody RegisterData data) {
		this.registerService.updatePassword(data);
		System.out.println("password update successfully");
	}
	
	
	
	
	
}
