package com.masai.service;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.masai.exceptions.LoginException;
import com.masai.models.Admin;
import com.masai.models.AdminDTO;
import com.masai.models.CurrentAdminSession;
import com.masai.models.CurrentCustomerSession;
import com.masai.repository.AdminDao;
import com.masai.repository.AdminSessionDAO;

@Service
public class AdminLogInServiceImpl implements AdminLoginService{

	@Autowired 	private AdminDao adminDao;
	@Autowired  private AdminSessionDAO adminSessionDAO;

	@Override
	public CurrentAdminSession logIntoAccount(AdminDTO adminDTO) throws LoginException{
		Optional<Admin> opt= adminDao.findByMobile(adminDTO.getMobile());
		if(!opt.isPresent()) {
		    throw new LoginException("Please enter valid Mobile number!");
		}

		Admin admin1= opt.get();
		Integer adminId = admin1.getAdminId();
		Optional<CurrentAdminSession>  currAdminopt1= adminSessionDAO.findByAdminId(adminId);

		if(currAdminopt1.isPresent()) {
		    throw new LoginException("Admin already logged in with this number.");
		}

		if(admin1.getPassword().equals(adminDTO.getPassword())) {

			String key = RandomString.getRandomNumberString();
			CurrentAdminSession currentAdminSession = new CurrentAdminSession(adminId, key, LocalDateTime.now());

			adminSessionDAO.save(currentAdminSession);

			return currentAdminSession;
		}
		else {
		    throw new LoginException("Please Enter valid password.");
		}
	}

	@Override
	public String logOutAccount(String key) throws LoginException{
		Optional<CurrentAdminSession> currAdminOpt=adminSessionDAO.findByUuid(key);

		if(currAdminOpt.isPresent()) {
			CurrentAdminSession currAdmin1=currAdminOpt.get();

			adminSessionDAO.delete(currAdmin1);
			return "Admin logged out successfully.";
		}else {
		    throw new LoginException("Admin does not exist, Enter correct uuid");
		}
	}

	@Override
	public boolean isLoggedIn(Integer adminId) throws LoginException {
		Optional<CurrentAdminSession> opt = adminSessionDAO.findByAdminId(adminId);
		if(opt.isPresent()) return true;
		else throw new LoginException("LogIn first!!!");
	}

	@Override
	public boolean isLoggedInByUUID(String uuid) throws LoginException {
		Optional<CurrentAdminSession> opt = adminSessionDAO.findByUuid(uuid);
		if(opt.isPresent()) return true;
		else throw new LoginException("LogIn first!!!");
	}

	
}


