package com.aridane.employee.entity.services;

import java.util.List;

import com.aridane.employee.entity.models.Employee;

public interface IEmployeeService {
	public Employee get(long id);
	public List<Employee> getAll();
	public void post(Employee employee);
	public void put(long id, Employee employee);
	public void deleteOne(long id);
	
}
