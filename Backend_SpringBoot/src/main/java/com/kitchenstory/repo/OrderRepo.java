package com.kitchenstory.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.kitchenstory.entities.Order;

@Repository
public interface OrderRepo extends MongoRepository<Order,String>{
	
}
