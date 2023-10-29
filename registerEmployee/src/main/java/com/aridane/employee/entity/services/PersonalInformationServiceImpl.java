package com.aridane.employee.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aridane.employee.entity.dao.IEmployeeDao;
import com.aridane.employee.entity.dao.IPersonalInformationDao;
import com.aridane.employee.entity.models.Employee;
import com.aridane.employee.entity.models.PersonalInformation;

@Service
public class PersonalInformationServiceImpl implements IPersonalInformationService {

	@Autowired
	private IPersonalInformationDao personalInfoDao;
	
	@Autowired
	private IEmployeeDao employeeDao;
	
	@Override
	public PersonalInformation getOne(long id) {
		// TODO Auto-generated method stub
		return personalInfoDao.findById(id).get();
	}

	@Override
	public List<PersonalInformation> getAll() {
		// TODO Auto-generated method stub
		return (List<PersonalInformation>) personalInfoDao.findAll();
	}

	@Override
	public void post(PersonalInformation personalInfo) {
		// TODO Auto-generated method stub
		Employee employee = employeeDao.findById(personalInfo.getId()).get();
		personalInfo.setEmployee(employee);
		personalInfoDao.save(personalInfo);
	}

	@Override
	public void put(PersonalInformation personalInfo) {
		// TODO Auto-generated method stub
		employeeDao.findById(personalInfo.getId()).ifPresent((x)->{
			personalInfo.setEmployee(x);
			personalInfoDao.save(personalInfo);
			
		});
	}

	@Override
	public void delete(long id) {
		// TODO Auto-generated method stub
		personalInfoDao.deleteById(id);
	}

}
