import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../models/User.model';


const httpOptions =
{
  headers:
    new HttpHeaders(
      {
        "Content-Type": "application/json"
      })
}
@Injectable()
export class UserService {

  base_url = 'http://localhost:3000/';
  constructor(private _http: HttpClient) { }

  addUser(user): Observable<User> {
    return this._http.post<User>(this.base_url + 'add-user', user, httpOptions);
  }

  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(this.base_url + 'get-users', httpOptions);
  }


}
