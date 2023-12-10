import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonalInfoService } from '../services/personal-info.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent {
  personalsInfo: any;
  selector = false;
  personalInfoForm: FormGroup;
  constructor(
    private personalInfoService: PersonalInfoService,
    public formBuilder: FormBuilder
  ) {
    this.personalInfoForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      direction: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.getAllPersonalInfo();
  }

  getAllPersonalInfo() {
    this.personalInfoService.getAllPersonalInfo().subscribe((data) => {
      this.personalsInfo = data;
    });
  }

  addPersonalInfo() {
    const id = this.personalInfoForm.get('id')?.value;
    const direction = this.personalInfoForm.get('direction')?.value;
    const phone = this.personalInfoForm.get('phone')?.value;

    let existInfo = this.personalsInfo.some((data: any) => data.id == id);

    if (existInfo) {
      Swal.fire({
        icon: 'error',
        title: `Ya información asociada a ese empleado con id ${id}`,
      });
      this.personalInfoForm.reset();
      return;
    }
    this.personalInfoService
      .addPersonalInfo({
        id: id,
        direction: direction,
        phone: phone,
      })
      .subscribe((data) => {
        this.getAllPersonalInfo();
        this.personalInfoForm.get('id')?.setValue('');
        this.personalInfoForm.get('direction')?.setValue('');
        this.personalInfoForm.get('phone')?.setValue('');
      });
  }

  updatePersonal() {
    const id = this.personalInfoForm.get('id')?.value;
    const direction = this.personalInfoForm.get('direction')?.value;
    const phone = this.personalInfoForm.get('phone')?.value;
    this.personalInfoService
      .updatePersonal({
        id: id,
        direction: direction,
        phone: phone,
      })
      .subscribe((data) => {
        this.getAllPersonalInfo();
        this.personalInfoForm.reset();

        this.selector = false;
      });
  }
  cancelUpdate() {
    this.personalInfoForm.reset();

    this.selector = false;
  }
  deletePersonalInfo(employmentInfo: any) {
    this.personalInfoService
      .deleteOnePersonal(employmentInfo.id)
      .subscribe((data) => {
        this.getAllPersonalInfo();
      });
  }

  putPersonalInfoInForm(employmentInfo: any) {
    this.personalInfoForm.get('id')?.setValue(employmentInfo.id);
    this.personalInfoForm.get('direction')?.setValue(employmentInfo.direction);
    this.personalInfoForm.get('phone')?.setValue(employmentInfo.phone);
    this.selector = true;
  }
}
