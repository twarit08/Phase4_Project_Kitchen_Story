package com.kitchenstory.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "AdminCred")
public class AdminCred {
	
	@Id
	private String username;
	private String password;
	private String role;
	public AdminCred() {
		super();
		// TODO Auto-generated constructor stub
	}
	public AdminCred(String username, String password, String role) {
		super();
		this.username = username;
		this.password = password;
		this.role = role;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	

}
