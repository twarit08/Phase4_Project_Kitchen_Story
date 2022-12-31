package com.kitchenstory.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.kitchenstory.entities.Product;

@Repository
public interface ProductRepo extends MongoRepository<Product, String>{
	public Product findByName(String name);
	public Iterable<Product> findByNameContainingIgnoreCase(String name);
}
