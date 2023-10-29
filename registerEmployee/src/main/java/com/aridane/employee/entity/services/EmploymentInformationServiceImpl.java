package com.aridane.employee.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aridane.employee.entity.dao.IEmployeeDao;
import com.aridane.employee.entity.dao.IEmploymentInformationDao;
import com.aridane.employee.entity.models.Employee;
import com.aridane.employee.entity.models.EmploymentInformation;

@Service
public class EmploymentInformationServiceImpl implements IEmploymentInformartionService{

	@Autowired
	private IEmploymentInformationDao employmentInfoDao;
	
	@Autowired
	private IEmployeeDao employeeDao;
	
	@Override
	public EmploymentInformation getOne(long id) {
		// TODO Auto-generated method stub
		return employmentInfoDao.findById(id).get();
	}

	@Override
	public List<EmploymentInformation> getAll() {
		// TODO Auto-generated method stub
		return (List<EmploymentInformation>) employmentInfoDao.findAll();
	}

	@Override
	public void post(EmploymentInformation employmentInfo) {
		// TODO Auto-generated method stub
		Employee employee = employeeDao.findById(employmentInfo.getId()).get();
		employmentInfo.setEmployee(employee);
		employmentInfoDao.save(employmentInfo);
	}

	@Override
	public void put(EmploymentInformation employmentInfo) {
		// TODO Auto-generated method stub
		employeeDao.findById(employmentInfo.getId()).ifPresent((x)->{
			employmentInfo.setEmployee(x);
			employmentInfoDao.save(employmentInfo);
			
		});
	}

	@Override
	public void delete(long id) {
		// TODO Auto-generated method stub
		employmentInfoDao.deleteById(id);
	}

}
