import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/emp.model';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class EmpService {

  base_url = 'http://mybackend.com/api/';
  emp_endpoint = 'emps';
  constructor(private _http: HttpClient) { }

  getEmps(): Observable<Employee[]> {
    return this._http.get<Employee[]>(this.base_url + this.emp_endpoint);
  }

  addEmp(emp): Observable<Employee> {
    return this._http.post<Employee>(this.base_url + this.emp_endpoint, emp, httpOptions)
  }

  editEmp(emp) {
    return this._http.put(this.base_url + this.emp_endpoint, emp)
  }

  deleteEmp(id) {
    return this._http.delete(`${this.base_url + this.emp_endpoint}/${id}`)
  }
}