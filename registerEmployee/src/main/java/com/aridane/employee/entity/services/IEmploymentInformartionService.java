package com.aridane.employee.entity.services;

import java.util.List;

import com.aridane.employee.entity.models.EmploymentInformation;

public interface IEmploymentInformartionService {
	public EmploymentInformation getOne(long id);
	public List<EmploymentInformation> getAll();
	public void post(EmploymentInformation employmentInfo);
	public void put(EmploymentInformation employmentInfo);
	public void delete(long id);
}
