package com.aridane.employee.entity.services;

import java.util.List;

import com.aridane.employee.entity.models.PersonalInformation;

public interface IPersonalInformationService {
	public PersonalInformation getOne(long id);
	public List<PersonalInformation> getAll();
	public void post(PersonalInformation personalInfo);
	public void put(PersonalInformation personalInfo);
	public void delete (long id);
}
