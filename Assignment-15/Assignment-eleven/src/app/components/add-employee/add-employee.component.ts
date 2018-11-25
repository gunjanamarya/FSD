import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../services/emp.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
  providers: [EmpService]
})
export class AddEmployeeComponent implements OnInit {

  name: string;
  age: number;
  email: string;
  msg: string;
  error: string;

  constructor(private empService: EmpService) { }

  ngOnInit() {
  }

  // Add new employee
  onSubmit() {
    if (this.name && this.email && this.age) {
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
