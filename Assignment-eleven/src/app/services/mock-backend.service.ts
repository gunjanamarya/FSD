import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from '../model/emp.model';
@Injectable()
export class MockBackendService implements InMemoryDbService {

  constructor() { }
  createDb() {
    let emps = [
      {
        id: 1,
        name: 'Claire Foy',
        age: '25',
        email: 'foy@gmail.com'
      },
      {
        id: 2,
        name: 'Mellissa Benoist',
        age: '27',
        email: 'melli@gmail.com'
      }
    ];
    return {
      emps: emps
    };
  }
  genId(emps: Employee[]): number {
    return emps.length > 0 ? Math.max(...emps.map(emp => emp.id)) + 1 : 1
  }

}