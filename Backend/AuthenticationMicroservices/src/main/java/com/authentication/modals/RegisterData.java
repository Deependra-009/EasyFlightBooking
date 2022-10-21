package com.authentication.modals;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="registerData")
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class RegisterData {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int registerId;
	private String name;
	@Column(unique = true)
	private String email;
	private String phoneNumber;
	private String password;
	private String confirmPassword;
	private String authority;
	private boolean active;
	
	

}
