package com.aridane.employee.entity.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.aridane.employee.entity.models.PersonalInformation;
import com.aridane.employee.entity.services.IPersonalInformationService;

@RestController
@CrossOrigin(origins="*")
public class PersonalInformationController {
	
	@Autowired
	IPersonalInformationService personalInfoService;
	
	@GetMapping("/api/personals_info/{id}")
	public PersonalInformation getOnePersonalInfo(@PathVariable(value="id")long id) {
		return personalInfoService.getOne(id);
	}
	
	@GetMapping("/api/personals_info")
	public List<PersonalInformation> getAllPersonalInfo() {
		return personalInfoService.getAll();
	}
	
	@PostMapping("/api/personals_info")
	public void post(@RequestBody PersonalInformation personalInfo) {
		personalInfoService.post(personalInfo);
	}
	
	@PutMapping("/api/personals_info")
	public void put(@RequestBody PersonalInformation personalInfo) {
		personalInfoService.put(personalInfo);
	}
	
	@DeleteMapping("/api/personals_info/{id}")
	public void delete(@PathVariable(value="id")long id) {
		personalInfoService.delete(id);
	}
		
}
