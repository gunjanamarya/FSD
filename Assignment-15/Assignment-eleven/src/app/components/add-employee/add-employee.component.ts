import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../services/emp.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
  providers: [EmpService]
})
export class AddEmployeeComponent implements OnInit {

  title = 'Add Employee';
  empForm: FormGroup;
  name: string;
  age: number;
  email: string;
  msg: string;
  error: string;

  constructor(private fb: FormBuilder,
    private empService: EmpService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.empForm = this.fb.group({
      name: [null, Validators.required],
      age: [null, [Validators.required, Validators.pattern("[0-9]+")]],
      email: [null, [Validators.required, Validators.email]]
    });
  }

  // Add new employee
  onSubmit() {

    this.name = this.empForm.get('name').value;
    this.age = this.empForm.get('age').value;
    this.email = this.empForm.get('email').value;

    let emp = {
      name: this.name,
      age: this.age,
      email: this.email
    }

    this.empService.addEmp(emp).subscribe(data => {
      this.msg = 'Employee added successfully :)';
      this.error = null;
    }, error => {
      console.log(error)
      this.error = 'Something bad happened :(';
      this.msg = null;
    })

  }

  // Reset the form values to null
  onCancel() {
    if (!this.msg) {
      this.name = null;
      this.email = null;
      this.age = null;
      this.msg = null;
      this.error = null;
    }
  }
}
