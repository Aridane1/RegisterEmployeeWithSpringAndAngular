import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employees: any;
  selector = false;
  employeeForm: FormGroup;
  constructor(
    private employeeService: EmployeeService,
    public formBuilder: FormBuilder
  ) {
    this.employeeForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      lastNames: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.employeeService.getAllEmployee().subscribe((data) => {
      this.employees = data;
    });
  }

  deleteEmployee(employee: any) {
    this.employeeService.deleteOneEmployee(employee.id).subscribe((data) => {
      this.getAllEmployee();
    });
  }

  putEmployeerInForm(employee: any) {
    this.employeeForm.get('id')?.setValue(employee.id);
    this.employeeForm.get('name')?.setValue(employee.name);
    this.employeeForm.get('lastNames')?.setValue(employee.lastNames);
    this.employeeForm.get('email')?.setValue(employee.email);
    this.selector = true;
  }

  addEmployee() {
    const name = this.employeeForm.get('name')?.value;
    const lastNames = this.employeeForm.get('lastNames')?.value;
    const email = this.employeeForm.get('email')?.value;

    this.employeeService
      .addEmployee({ name: name, lastNames: lastNames, email: email })
      .subscribe((data) => {
        this.getAllEmployee();
        this.employeeForm.get('name')?.setValue('');
        this.employeeForm.get('lastNames')?.setValue('');
        this.employeeForm.get('email')?.setValue('');
      });
  }

  updateEmployee() {
    const id = this.employeeForm.get('id')?.value;
    const name = this.employeeForm.get('name')?.value;
    const lastNames = this.employeeForm.get('lastNames')?.value;
    const email = this.employeeForm.get('email')?.value;

    this.employeeService
      .updateEmployee(id, { name: name, lastNames: lastNames, email: email })
      .subscribe((data) => {
        this.getAllEmployee();
        this.employeeForm.get('name')?.setValue('');
        this.employeeForm.get('lastNames')?.setValue('');
        this.employeeForm.get('email')?.setValue('');
      });
    this.selector = false;
  }

  cancelUpdate() {
    this.employeeForm.get('name')?.setValue('');
    this.employeeForm.get('lastNames')?.setValue('');
    this.employeeForm.get('email')?.setValue('');
    this.selector = false;
  }
}
