import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmploymentInfoComponent } from './employment-info/employment-info.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { AllInformationComponent } from './all-information/all-information.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'employment-info', component: EmploymentInfoComponent },
  { path: 'all-information', component: AllInformationComponent },
  { path: 'personal-info', component: PersonalInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
