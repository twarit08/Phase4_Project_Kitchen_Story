package com.kitchenstory.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.kitchenstory.config.CustomUserDetails;
import com.kitchenstory.entities.AdminCred;
import com.kitchenstory.repo.AdminCredRepo;

@Service
public class CustomUserDetailService implements UserDetailsService{
	@Autowired
	private AdminCredRepo credRepo;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		AdminCred admin = this.credRepo.findByUsername(username);
		if(admin == null) {
			throw new UsernameNotFoundException("NO USER FOUND!");
		}
		return new CustomUserDetails(admin);
	}
	

}
