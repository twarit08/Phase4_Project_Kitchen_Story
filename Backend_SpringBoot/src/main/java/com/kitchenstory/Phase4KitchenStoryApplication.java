package com.kitchenstory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.kitchenstory.entities.AdminCred;
import com.kitchenstory.repo.AdminCredRepo;

@SpringBootApplication
public class Phase4KitchenStoryApplication implements CommandLineRunner {
	
	@Autowired
	private AdminCredRepo credRepo;
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	public static void main(String[] args) {
		SpringApplication.run(Phase4KitchenStoryApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		AdminCred cred = new AdminCred();
		cred.setUsername("admin@kitchenstory.com");
		cred.setPassword(this.passwordEncoder.encode("admin123"));
		cred.setRole("ROLE_ADMIN");
		this.credRepo.save(cred);
		
	}
	
	
}
