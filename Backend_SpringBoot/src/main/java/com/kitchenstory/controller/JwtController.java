package com.kitchenstory.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.kitchenstory.entities.JwtRequest;
import com.kitchenstory.entities.JwtResponse;
import com.kitchenstory.jwthelper.JwtUtil;
import com.kitchenstory.services.CustomUserDetailService;

@RestController
@CrossOrigin(origins = "*")
public class JwtController {
	
	@Autowired
	AuthenticationManager authenticationManager;
	
	@Autowired
	CustomUserDetailService customUserDetailService;
	
	@Autowired
	JwtUtil jwtUtil;
	
	
	@RequestMapping(value="/token",method = RequestMethod.POST)
	public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtRequest){
		System.out.println(jwtRequest);
		
		try {
			this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(jwtRequest.getUsername(), jwtRequest.getPassword()));
		}catch(UsernameNotFoundException e) {
			e.printStackTrace();
		}
		UserDetails userDetails = this.customUserDetailService.loadUserByUsername(jwtRequest.getUsername());
		String token = this.jwtUtil.generateToken(userDetails);
		System.out.println("Token: "+token);
		return ResponseEntity.ok(new JwtResponse(token));
	}

}
