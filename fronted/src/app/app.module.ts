import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmploymentInfoComponent } from './employment-info/employment-info.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { AllInformationComponent } from './all-information/all-information.component';

@NgModule({
  declarations: [AppComponent, EmployeeComponent, EmploymentInfoComponent, PersonalInfoComponent, AllInformationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
