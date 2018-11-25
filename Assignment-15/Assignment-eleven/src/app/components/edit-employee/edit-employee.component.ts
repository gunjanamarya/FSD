import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../services/emp.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
  providers: [EmpService]
})

export class EditEmployeeComponent implements OnInit {

  id: any;
  name: string;
  age: number;
  email: string;
  msg: string;
  error: string;

  constructor(private empService: EmpService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getParams();
  }

  // Fetch the route parameter and set the form values
  getParams() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.empService.getEmps().subscribe(data => {
      data.forEach(e => {
        if (this.id == e.id) {
          this.name = e.name;
          this.email = e.email;
          this.age = e.age;
        }
      })
    })
  }

  // Update employee details
  onEdit() {
    this.empService.getEmps().subscribe(data => {
      data.forEach(e => {
        if (e.id == this.id) {
          e.name = this.name;
          e.age = this.age;
          e.email = this.email;
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
