package com.masai.service;

import com.masai.exceptions.AdminException;
import com.masai.models.Admin;
import com.masai.models.AdminSigninDTO;

public interface AdminService {
	public Admin createAdmin(AdminSigninDTO adminsiginDto) throws AdminException;
	public Admin updateAdmin(AdminSigninDTO adminsiginDTO, String key) throws AdminException;
}

