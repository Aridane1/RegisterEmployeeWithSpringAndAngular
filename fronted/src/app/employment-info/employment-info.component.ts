import { Component, OnInit } from '@angular/core';
import { EmploymentInfoService } from '../services/employment-info.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employment-info',
  templateUrl: './employment-info.component.html',
  styleUrls: ['./employment-info.component.css'],
})
export class EmploymentInfoComponent implements OnInit {
  employmentsInfo: any;
  selector = false;
  employmentInfoForm: FormGroup;
  constructor(
    private employmentInfoService: EmploymentInfoService,
    public formBuilder: FormBuilder
  ) {
    this.employmentInfoForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      booth: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.getAllEmploymentInfo();
  }

  getAllEmploymentInfo() {
    this.employmentInfoService.getAllEmploymentInfo().subscribe((data) => {
      this.employmentsInfo = data;
    });
  }

  addEmployementInfo() {
    const id = this.employmentInfoForm.get('id')?.value;
    const salary = this.employmentInfoForm.get('salary')?.value;
    const booth = this.employmentInfoForm.get('booth')?.value;

    let existInfo = this.employmentsInfo.some((data: any) => data.id == id);

    if (existInfo) {
      Swal.fire({
        icon: 'error',
        title: `Ya información asociada a ese empleado con id ${id}`,
      });
      this.employmentInfoForm.reset();
      return;
    }
    this.employmentInfoService
      .addEmploymentInfo({
        id: id,
        salary: salary,
        booth: booth,
      })
      .subscribe((data) => {
        this.getAllEmploymentInfo();
        this.employmentInfoForm.reset();
      });
  }

  updateEmployment() {
    const id = this.employmentInfoForm.get('id')?.value;
    const salary = this.employmentInfoForm.get('salary')?.value;
    const booth = this.employmentInfoForm.get('booth')?.value;
    this.employmentInfoService
      .updateEmployment({
        id: id,
        salary: salary,
        booth: booth,
      })
      .subscribe((data) => {
        this.getAllEmploymentInfo();
        this.employmentInfoForm.reset();
        this.selector = false;
      });
  }

  cancelUpdate() {
    this.employmentInfoForm.get('id')?.setValue('');
    this.employmentInfoForm.get('salary')?.setValue('');
    this.employmentInfoForm.get('booth')?.setValue('');
    this.selector = false;
  }

  deleteEmploymentInfo(employmentInfo: any) {
    this.employmentInfoService
      .deleteOneEmployment(employmentInfo.id)
      .subscribe((data) => {
        this.getAllEmploymentInfo();
      });
  }

  putEmploymentInfoInForm(employmentInfo: any) {
    this.employmentInfoForm.get('id')?.setValue(employmentInfo.id);
    this.employmentInfoForm.get('salary')?.setValue(employmentInfo.salary);
    this.employmentInfoForm.get('booth')?.setValue(employmentInfo.booth);
    this.selector = true;
  }
}
