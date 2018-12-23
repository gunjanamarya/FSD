import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class DocumentService {

  base_url = 'http://localhost:3000/';
  constructor(private _http: HttpClient) { }

  getFiles(): Observable<any> {
    return this._http.get<any[]>(this.base_url + 'get-files');
  }

  deleteFile(id): Observable<any> {
    return this._http.delete<any>(this.base_url + `delete-file/${id}`)
  }

  downloadFile(fileName) {
    return this._http.post(this.base_url + 'download-file', { "fileName": fileName }, {
      responseType: 'blob',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }
}
