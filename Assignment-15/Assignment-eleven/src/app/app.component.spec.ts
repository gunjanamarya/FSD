import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, async, fakeAsync, tick, ComponentFixture } from '@angular/core/testing';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { GetEmployeesComponent } from './components/get-employees/get-employees.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { EmpService } from './services/emp.service';

import { appRoutes } from './app-routing.module';

describe('AppComponent', () => {

  let location: Location;
  let router: Router;
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(appRoutes), HttpClientTestingModule
      ],
      declarations: [
        AddEmployeeComponent,
        EditEmployeeComponent,
        GetEmployeesComponent,
        AppComponent,
      ],
      providers: [EmpService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents().then(() => {
      router = TestBed.get(Router);
      location = TestBed.get(Location);

      fixture = TestBed.createComponent(AppComponent);
      router.initialNavigation();
    })

  });

  //specs to test app initialization

  it('should create the app', async(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  }));

  it('should have app title as "Workout Tracker App"', async(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.title).toBe('Workout Tracker App');
  }));

  //specs to test app routing

  it('navigate to "" redirects you to /get', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/get');
  }));

  it('navigate to "Employees" takes you to /get', fakeAsync(() => {
    router.navigate(['/get']);
    tick();
    expect(location.path()).toBe('/get');
  }));

  it('navigate to "Add Employee" takes you to /add', fakeAsync(() => {
    router.navigate(['/add']);
    tick();
    expect(location.path()).toBe('/add');
  }));

});
