package com.aridane.employee.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aridane.employee.entity.dao.IEmployeeDao;
import com.aridane.employee.entity.models.Employee;

@Service
public class EmployeeServiceImpl implements IEmployeeService{
	
	@Autowired
	private IEmployeeDao employeeDao;

	@Override
	public Employee get(long id) {
		// TODO Auto-generated method stub
		return employeeDao.findById(id).get();
	}

	@Override
	public List<Employee> getAll() {
		// TODO Auto-generated method stub
		return (List<Employee>) employeeDao.findAll();
	}

	@Override
	public void post(Employee employee) {
		// TODO Auto-generated method stub
		employeeDao.save(employee);
	}

	@Override
	public void put(long id, Employee employee) {
		// TODO Auto-generated method stub
		employeeDao.findById(id).ifPresent((x)->{
			employee.setId(id);
			employeeDao.save(employee);
		});
	}

	@Override
	public void deleteOne(long id) {
		// TODO Auto-generated method stub
		System.out.println(id);
		employeeDao.deleteById(id);
	}

}
