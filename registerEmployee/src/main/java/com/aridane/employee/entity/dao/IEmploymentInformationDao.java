package com.aridane.employee.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.aridane.employee.entity.models.EmploymentInformation;

public interface IEmploymentInformationDao extends CrudRepository<EmploymentInformation, Long> {
	public EmploymentInformation findEmploymentInformationByEmployeeId(long id);
}
