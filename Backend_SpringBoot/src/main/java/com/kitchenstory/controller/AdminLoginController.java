package com.kitchenstory.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kitchenstory.entities.Product;
import com.kitchenstory.services.ProductService;

@RestController
@CrossOrigin(origins = "*")
public class AdminLoginController {
	
	@Autowired
	private ProductService prodService;
	
	@PostMapping("/saveItem")
	public ResponseEntity<?> saveItem(@RequestBody Product product){
		this.prodService.addProduct(product);
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	
	@GetMapping("/getItems")
	public ResponseEntity<?> getItems() {
		List<Product> allItems = this.prodService.showProducts();
		if(allItems.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}else {
			return ResponseEntity.ok(allItems);
		}
	}
	@DeleteMapping("/deleteItem/{name}")
	public ResponseEntity<?> deleteItem(@PathVariable("name") String name) {
		try {
			this.prodService.deleteProduct(name);
			return ResponseEntity.status(HttpStatus.OK).build();
			
		}catch(Exception e) {
			System.out.println("Empty Result Data Access Exception.");
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		
	}
	@PutMapping("/updateItem/{name}")
	public ResponseEntity<?> updateItem(@PathVariable("name") String name,@RequestBody Product product) {
		try {
			this.prodService.updateProduct(name, product);
			return ResponseEntity.status(HttpStatus.OK).build();
			
		}catch(Exception e) {
			System.out.println("Empty Result Data Access Exception.");
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		
		
	}
	@GetMapping("/getItem/{name}")
	public ResponseEntity<?> getItem(@PathVariable("name") String name){
		Product product = this.prodService.getProduct(name);
		if(product!=null) {
			return ResponseEntity.ok(product);
		}else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}

}
