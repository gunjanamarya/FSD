import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './edit-employee.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';

describe('EditEmployeeComponent', () => {
  let component: EditEmployeeComponent;
  let fixture: ComponentFixture<EditEmployeeComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        BrowserModule
      ],
      declarations: [EditEmployeeComponent],
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(EditEmployeeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        de = fixture.debugElement.query(By.css('form'));
        el = de.nativeElement;
      })
  }));

  it('should create', () => {
    fixture = TestBed.createComponent(EditEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should have component title', () => {
    fixture = TestBed.createComponent(EditEmployeeComponent);
    component = fixture.componentInstance;
    expect(component.title).toBe('Edit Employee');
  });


  it('should call onSubmit method on clicking "Update" button', async(() => {
    spyOn(component, 'onEdit');
    el = fixture.debugElement.query(By.css('.update')).nativeElement;
    el.click();
    expect(component.onEdit).toHaveBeenCalledTimes(0);
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
