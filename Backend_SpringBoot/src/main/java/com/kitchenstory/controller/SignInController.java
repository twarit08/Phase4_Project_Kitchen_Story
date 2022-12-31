package com.kitchenstory.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.kitchenstory.entities.AdminCred;
import com.kitchenstory.services.AdminService;


@RestController
@CrossOrigin(origins = "*")
public class SignInController {
	
	@Autowired
	private AdminService adminService;
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@PutMapping("/changePassword")
	public ResponseEntity<?> setPassword(@RequestBody AdminCred admin) {
		AdminCred adm = this.adminService.findAdmin(admin.getUsername());
		if(adm == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		else {
			adm.setPassword(this.passwordEncoder.encode(admin.getPassword()));
			this.adminService.saveCred(adm);
			return ResponseEntity.ok(adm);
		}
	}
	
}
