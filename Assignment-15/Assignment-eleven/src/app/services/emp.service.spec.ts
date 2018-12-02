import { TestBed, inject, getTestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EmpService } from './emp.service';

describe('EmpService', () => {
  let injector: TestBed;
  let service: EmpService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmpService]
    }).compileComponents().then(() => {
      injector = getTestBed();
      service = injector.get(EmpService);
      httpMock = injector.get(HttpTestingController);
    })
  }));

  afterEach(async(() => {
    // To flush any outstanding requests
    httpMock.verify();
  }));

  it('should be created', inject([EmpService], (service: EmpService) => {

    expect(service).toBeTruthy();

  }));

  it('should return an Observable<Employee[]> ', () => {

    const dummyEmps: any = [
      { id: 1, name: "Claire Foy", age: "25", email: "foy@gmail.com" },
      { id: 2, name: "Mellissa Benoist", age: "27", email: "melli@gmail.com" }
    ];

    service.getEmps().subscribe(emps => {
      expect(emps.length).toBe(2);
      expect(emps).toEqual(dummyEmps);
    });

    const req = httpMock.expectOne(`${service.base_url}emps`);
    expect(req.request.method).toEqual('GET');
    req.flush(dummyEmps);

  });

  it('should post an Observable<Employee>', () => {

    const emp = {
      name: "sample",
      age: 12,
      email: "sample@gmail.com"
    }

    service.addEmp(emp).subscribe();

    httpMock.expectOne((request) => {
      return request.method == 'POST'
        && request.url == `${service.base_url}emps`
        && JSON.stringify(request.body) == JSON.stringify(emp)
        && request.headers.get('Content-Type') === 'application/json';
    }).flush(emp);

  });

  it('should be able to update age of employee with id 1', () => {

    const emp = { id: 1, name: "Claire Foy", age: "33", email: "foy@gmail.com" }

    service.editEmp(emp).subscribe();

    httpMock.expectOne((request) => {
      return request.method == 'PUT'
        && request.url == `${service.base_url}emps`
    }).flush(emp);

  })

  it('should be able to delete employee with id 1', () => {

    service.deleteEmp(1).subscribe();

    httpMock.expectOne((request) => {
      return request.method == 'DELETE'
        && request.url == `${service.base_url}emps/1`
    })

  })

});

