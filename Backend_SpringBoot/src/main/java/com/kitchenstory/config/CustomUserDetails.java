package com.kitchenstory.config;

import java.util.Collection;
import java.util.HashSet;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.kitchenstory.entities.AdminCred;

@SuppressWarnings("serial")
public class CustomUserDetails implements UserDetails{
	
	private AdminCred adminCred;
	
	public CustomUserDetails(AdminCred adminCred) {
		this.adminCred = adminCred;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		HashSet<SimpleGrantedAuthority> set = new HashSet<>();
		set.add(new SimpleGrantedAuthority(this.adminCred.getRole()));
		return set;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return this.adminCred.getPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return this.adminCred.getUsername();
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}

}
