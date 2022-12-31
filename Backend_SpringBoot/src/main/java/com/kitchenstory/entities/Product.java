package com.kitchenstory.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Products")
public class Product {
	
	@Id
	private String name;
	private String pid;
	private String category;
	private String ingredient;
	private int price;
	private String brand;
	private String quantity;
	private String origin;
	public Product() {
	}
	public Product(String name, String pid, String category, String ingredient, int price, String brand,
			String quantity, String origin) {
		super();
		this.name = name;
		this.pid = pid;
		this.category = category;
		this.ingredient = ingredient;
		this.price = price;
		this.brand = brand;
		this.quantity = quantity;
		this.origin = origin;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPid() {
		return pid;
	}
	public void setPid(String pid) {
		this.pid = pid;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getIngredient() {
		return ingredient;
	}
	public void setIngredient(String ingredient) {
		this.ingredient = ingredient;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getQuantity() {
		return quantity;
	}
	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}
	public String getOrigin() {
		return origin;
	}
	public void setOrigin(String origin) {
		this.origin = origin;
	}
	
}
