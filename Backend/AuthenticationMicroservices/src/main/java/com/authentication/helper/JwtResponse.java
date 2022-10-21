package com.authentication.helper;

import java.util.Collection;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class JwtResponse {
	
	private String token;
	private String email;
	private String password;
	Collection<? extends GrantedAuthority> authority;
	private boolean active;

}
