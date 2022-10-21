package com.authentication.modals;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class ForgetPasswordDTO {
	
	private String otp;
	private String email;

}
