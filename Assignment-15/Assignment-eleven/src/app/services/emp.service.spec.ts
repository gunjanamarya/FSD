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

  // To flush any outstanding requests
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', inject([EmpService], (service: EmpService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an Observable<Employee[]> ', async(() => {
    const dummyEmps: any = [
      { id: 1, name: "Claire Foy", age: "25", email: "foy@gmail.com" },
      { id: 2, name: "Mellissa Benoist", age: "27", email: "melli@gmail.com" }
    ];

    service.getEmps().subscribe(emps => {
      expect(emps.length).toBe(2);
      expect(emps).toEqual(dummyEmps);
    });

    const req = httpMock.expectOne(`${service.base_url}get`);
    expect(req.request.method).toBe("GET");
    req.flush(dummyEmps);
  }));

});

