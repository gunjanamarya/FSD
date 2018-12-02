import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GetEmployeesComponent } from './get-employees.component';

describe('GetEmployeesComponent', () => {
  let component: GetEmployeesComponent;
  let fixture: ComponentFixture<GetEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [GetEmployeesComponent],
    })
      .compileComponents().then(() => {
      })
  }));

  it('should create', () => {
    fixture = TestBed.createComponent(GetEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
