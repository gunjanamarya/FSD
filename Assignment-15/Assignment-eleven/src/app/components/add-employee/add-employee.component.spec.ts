import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './add-employee.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';

describe('AddEmployeeComponent', () => {
  let component: AddEmployeeComponent;
  let fixture: ComponentFixture<AddEmployeeComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [FormsModule,
        HttpClientTestingModule,
        FormsModule,
        BrowserModule,
        ReactiveFormsModule
      ],
      declarations: [AddEmployeeComponent]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(AddEmployeeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        de = fixture.debugElement.query(By.css('form'));
        el = de.nativeElement;
      })
  });

  it('should create', () => {
    fixture = TestBed.createComponent(AddEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should have component title', () => {
    fixture = TestBed.createComponent(AddEmployeeComponent);
    component = fixture.componentInstance;
    expect(component.title).toBe('Add Employee');
  });


  it('should call onSubmit method on clicking "Add" button', async(() => {
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('.add')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  }));

  it('form should be invalid when all the required values are not filled', async(() => {
    expect(component.empForm.valid).toBeFalsy();
  }));

  it('form should be invalid when email is invalid', async(() => {
    component.empForm.controls['email'].setValue('test');
    expect(component.empForm.controls['email'].valid).toBeFalsy();
    expect(component.empForm.valid).toBeFalsy();
  }));

  it('form should be invalid when age is invalid', async(() => {
    component.empForm.controls['age'].setValue('12asd');
    expect(component.empForm.controls['age'].valid).toBeFalsy();
    expect(component.empForm.valid).toBeFalsy();
  }));

  it('form should be valid when all the required values are present', async(() => {
    component.empForm.controls['name'].setValue('sample');
    component.empForm.controls['age'].setValue(12);
    component.empForm.controls['email'].setValue('sample@gmail.com');
    expect(component.empForm.valid).toBeTruthy();
  }));

});
