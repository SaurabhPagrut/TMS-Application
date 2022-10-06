package com.masai.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.masai.exceptions.LoginException;
import com.masai.models.AdminDTO;
import com.masai.models.CurrentAdminSession;
import com.masai.models.CustomerDTO;
import com.masai.service.AdminLogInServiceImpl;
import com.masai.service.CustomerLoginServiceImpl;

@RestController

@RequestMapping("/login")
public class LoginController {
	@Autowired
	private CustomerLoginServiceImpl customerLoginServiceImpl;

	@Autowired
	private AdminLogInServiceImpl adminLogInServiceImpl;

	// for user login
    @CrossOrigin
	@PostMapping("/userlogin")
	public String loginCustomerr(@RequestBody CustomerDTO customerDTO) throws Exception {
		return customerLoginServiceImpl.logIntoAccount(customerDTO);
	}

	// for user logout
    @CrossOrigin
	@PatchMapping("/userlogout")
	public String logOutCustomerr(@RequestParam(required = false) String key) {
		return customerLoginServiceImpl.logOutAccount(key);
	}

	// for admin login
	@CrossOrigin
	@PostMapping("/adminlogin")
	public ResponseEntity<CurrentAdminSession> logInAdmin(@RequestBody AdminDTO adminDTO) throws LoginException{
		return new ResponseEntity<CurrentAdminSession>(adminLogInServiceImpl.logIntoAccount(adminDTO), HttpStatus.OK);
	}

	// for admin logout
    @CrossOrigin
	@PatchMapping("/adminlogout")
	public ResponseEntity<String> logOutAdmin(@RequestParam(required = false) String key) throws LoginException{
		return new ResponseEntity<String>(adminLogInServiceImpl.logOutAccount(key), HttpStatus.OK);
	}
}
