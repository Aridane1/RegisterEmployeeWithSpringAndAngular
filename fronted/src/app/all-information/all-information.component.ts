import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { EmploymentInfoService } from '../services/employment-info.service';
import { PersonalInfoService } from '../services/personal-info.service';

@Component({
  selector: 'app-all-information',
  templateUrl: './all-information.component.html',
  styleUrls: ['./all-information.component.css'],
})
export class AllInformationComponent implements OnInit {
  employees: any;
  employmentsInfo: any;
  personalsInfo: any;

  constructor(
    private employeeService: EmployeeService,
    private employmentInfoService: EmploymentInfoService,
    private personalInfoService: PersonalInfoService
  ) {}

  ngOnInit() {
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.employeeService.getAllEmployee().subscribe((data) => {
      this.employees = data;
      this.employmentInfoService
        .getAllEmploymentInfo()
        .subscribe((data: any) => {
          this.employmentsInfo = data;
          this.personalInfoService.getAllPersonalInfo().subscribe((data) => {
            this.personalsInfo = data;
            console.log(this.employees.length);
            for (let index = 0; index < this.employees.length; index++) {
              this.employees[index].booth = this.employmentsInfo[index].booth;
              this.employees[index].salary = this.employmentsInfo[index].salary;
              this.employees[index].phone = this.personalsInfo[index].phone;
              this.employees[index].direction =
                this.personalsInfo[index].direction;
            }
          });
        });
    });
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteOneEmployee(id).subscribe((data) => {
      this.getAllEmployee();
    });
  }
}
