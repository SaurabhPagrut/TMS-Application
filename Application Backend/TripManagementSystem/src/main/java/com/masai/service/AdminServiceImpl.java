package com.masai.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.masai.exceptions.AdminException;
import com.masai.models.Admin;
import com.masai.models.AdminSigninDTO;
import com.masai.models.CurrentAdminSession;
import com.masai.repository.AdminDao;
import com.masai.repository.AdminSessionDAO;

@Service
public class AdminServiceImpl implements AdminService{ 
	@Autowired
	private AdminDao adminDao;
	@Autowired
	private AdminSessionDAO adminSessionDAO;
	
	@Override
	public Admin createAdmin(AdminSigninDTO adminsigninDto) throws AdminException{
		Optional<Admin> opt= adminDao.findByMobile(adminsigninDto.getMobile());
		if(opt.isPresent()) {
            throw new AdminException("Admin Already Registered With Mobile Number "+adminsigninDto.getMobile());
        }else {
    		Admin admin = new Admin();
    		admin.setAdminName(adminsigninDto.getAdminName());
    		admin.setPassword(adminsigninDto.getPassword());
    		admin.setMobile(adminsigninDto.getMobile());
    		admin.setEmail(adminsigninDto.getEmail()); 
    		admin.setUserType("admin");
    		return adminDao.save(admin);
        }
	}

	@Override
	public Admin updateAdmin(AdminSigninDTO adminsigninDto, String key) throws AdminException{
		 Optional<CurrentAdminSession> optCurrAdmin= adminSessionDAO.findByUuid(key);
		 if(!optCurrAdmin.isPresent()) {   
            throw new AdminException("Unauthorised Access! Enter Correct UUID");
         }else {
    		Admin admin = new Admin();
    		admin.setAdminName(adminsigninDto.getAdminName());
    		admin.setPassword(adminsigninDto.getPassword());
    		admin.setMobile(adminsigninDto.getMobile());
    		admin.setEmail(adminsigninDto.getEmail());		 
    		admin.setUserType("admin");			
    		return adminDao.save(admin);
         }
	}
}


