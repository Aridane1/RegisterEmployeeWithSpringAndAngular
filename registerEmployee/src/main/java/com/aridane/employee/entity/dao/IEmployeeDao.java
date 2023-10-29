package com.aridane.employee.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.aridane.employee.entity.models.Employee;

public interface IEmployeeDao extends CrudRepository<Employee,Long> {

}
