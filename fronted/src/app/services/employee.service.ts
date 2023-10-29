import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  endpoint = 'http://localhost:8080/api/employees';

  constructor(private httpClient: HttpClient) {}

  getAllEmployee() {
    return this.httpClient.get(this.endpoint);
  }

  deleteOneEmployee(id: number) {
    return this.httpClient.delete(this.endpoint + `/${id}`);
  }

  addEmployee(employee: any) {
    return this.httpClient.post(this.endpoint, employee);
  }

  updateEmployee(id: number, employee: any) {
    return this.httpClient.put(this.endpoint + `/${id}`, employee);
  }
}
