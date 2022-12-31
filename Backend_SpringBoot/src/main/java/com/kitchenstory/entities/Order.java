package com.kitchenstory.entities;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "Orders")
public class Order {
	
	

    @Id
    private String id;
	private String name;
	private String address;
	private String state;
	private String contact;
	private String od;
	private int quantity;
	private String payment;
	@DBRef
	private Product product;
	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Order(String id, String name, String address, String state, String contact, String od, int quantity,
			String payment, Product product) {
		super();
		this.id = id;
		this.name = name;
		this.address = address;
		this.state = state;
		this.contact = contact;
		this.od = od;
		this.quantity = quantity;
		this.payment = payment;
		this.product = product;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public String getOd() {
		return od;
	}
	public void setOd(String od) {
		this.od = od;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public String getPayment() {
		return payment;
	}
	public void setPayment(String payment) {
		this.payment = payment;
	}
	public Product getProduct() {
		return product;
	}
	public void setProduct(Product product) {
		this.product = product;
	}
	
	
}
