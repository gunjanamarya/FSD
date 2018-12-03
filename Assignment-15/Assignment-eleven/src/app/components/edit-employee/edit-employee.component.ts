import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../services/emp.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
  providers: [EmpService]
})

export class EditEmployeeComponent implements OnInit {

  title = 'Edit Employee';
  empForm: FormGroup;
  id: any;
  msg: string;
  error: string;

  constructor(private empService: EmpService,
    private route: ActivatedRoute,
    private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.empForm = this.fb.group({
      name: [null, Validators.required],
      age: [null, [Validators.required, Validators.pattern("[0-9]+")]],
      email: [null, [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
    this.getParams();
  }

  // Fetch the route parameter and set the form values
  getParams() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.empService.getEmps().subscribe(data => {
      data.forEach(e => {
        if (this.id == e.id) {
          this.empForm.setValue({
            name: e.name,
            email: e.email,
            age: e.age
          });
        }
      })
    })
  }

  // Update employee details
  onEdit() {
    this.empService.getEmps().subscribe(data => {
      data.forEach(e => {
        if (e.id == this.id) {
          e.name = this.empForm.get('name').value;
          e.age = this.empForm.get('age').value;
          e.email = this.empForm.get('email').value;
          this.empService.editEmp(e).subscribe(info => {
            this.msg = 'Employee updated successfully :)';
            this.error = null;
          }, error => {
            console.log(error)
            this.error = 'Something bad happened :(';
            this.msg = null;
          })
        }
      })
    })

  }

  // Reset to the original employee's details 
  onCancel() {
    this.getParams();
    this.msg = null;
    this.error = null;
  }

}
