import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmploymentInfoService {
  endpoint = 'http://localhost:8080/api/employments_info';

  constructor(private httpClient: HttpClient) {}

  getAllEmploymentInfo() {
    return this.httpClient.get(this.endpoint);
  }

  addEmploymentInfo(employmentInfo: any) {
    return this.httpClient.post(this.endpoint, employmentInfo);
  }

  deleteOneEmployment(id: number) {
    return this.httpClient.delete(this.endpoint + `/${id}`);
  }

  updateEmployment(employmentInfo: any) {
    return this.httpClient.put(this.endpoint, employmentInfo);
  }
}
