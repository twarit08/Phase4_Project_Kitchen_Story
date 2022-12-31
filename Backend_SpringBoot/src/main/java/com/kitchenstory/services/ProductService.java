package com.kitchenstory.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Service;

import com.kitchenstory.entities.Product;
import com.kitchenstory.repo.ProductRepo;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepo prodRepo;
	
	public void addProduct(Product product) {
		this.prodRepo.save(product);
	}
	public List<Product> showProducts(){
		return this.prodRepo.findAll();
	}
	public void deleteProduct(String name) {
		this.prodRepo.deleteById(name);
	}
	public void updateProduct(String name,Product updateProduct) {
		Product product = this.prodRepo.findByName(name);
		product.setName(updateProduct.getName());
		product.setPid(updateProduct.getPid());
		product.setCategory(updateProduct.getCategory());
		product.setBrand(updateProduct.getBrand());
		product.setIngredient(updateProduct.getIngredient());
		product.setOrigin(updateProduct.getOrigin());
		product.setPrice(updateProduct.getPrice());
		product.setQuantity(updateProduct.getQuantity());
		this.prodRepo.save(product);
	}
	public Product getProduct(String name) {
		return this.prodRepo.findByName(name);
	}
	
	public List<Product> getAllByName(String name){
		Iterable<Product> products = this.prodRepo.findByNameContainingIgnoreCase(name);
		List<Product> allProducts = Streamable.of(products).toList();
		return allProducts;
	}
	
}
