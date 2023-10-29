import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersonalInfoService {
  endpoint = 'http://localhost:8080/api/personals_info';

  constructor(private httpClient: HttpClient) {}

  getAllPersonalInfo() {
    return this.httpClient.get(this.endpoint);
  }

  addPersonalInfo(personalInfo: any) {
    return this.httpClient.post(this.endpoint, personalInfo);
  }

  deleteOnePersonal(id: number) {
    return this.httpClient.delete(this.endpoint + `/${id}`);
  }

  updatePersonal(personalInfo: any) {
    return this.httpClient.put(this.endpoint, personalInfo);
  }
}
