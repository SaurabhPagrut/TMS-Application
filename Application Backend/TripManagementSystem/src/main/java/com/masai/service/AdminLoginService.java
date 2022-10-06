package com.masai.service;

import com.masai.exceptions.LoginException;
import com.masai.models.AdminDTO;
import com.masai.models.CurrentAdminSession;

public interface AdminLoginService {
	public CurrentAdminSession logIntoAccount(AdminDTO adminDTO) throws LoginException;
	public String logOutAccount(String key) throws LoginException;
	public boolean isLoggedIn(Integer adminId) throws LoginException ;
	public boolean isLoggedInByUUID(String uuid) throws LoginException ;
}
