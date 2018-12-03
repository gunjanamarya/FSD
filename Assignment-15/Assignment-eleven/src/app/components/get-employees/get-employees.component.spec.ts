import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GetEmployeesComponent } from './get-employees.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from "@angular/platform-browser";
import { DebugElement } from '@angular/core';

describe('GetEmployeesComponent', () => {
  let component: GetEmployeesComponent;
  let fixture: ComponentFixture<GetEmployeesComponent>;
  let e1: DebugElement;
  let n1;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [GetEmployeesComponent],
    })
      .compileComponents();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(GetEmployeesComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should have component title', () => {
    fixture = TestBed.createComponent(GetEmployeesComponent);
    component = fixture.componentInstance;
    expect(component.title).toBe('Get Employees');
  });


  it('should have 5 columns in employees table', () => {
    fixture = TestBed.createComponent(GetEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    let x = fixture.debugElement.query(By.css('#emp-table')).nativeElement.textContent.trim();
    expect(x).toContain('S No.');
    expect(x).toContain('Name');
    expect(x).toContain('Age');
    expect(x).toContain('Email');
    expect(x).toContain('Action');
  });

});
