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

  getParams() {
    this.id = this.route.snapshot.queryParamMap.get('id');
    this.name = this.route.snapshot.queryParamMap.get('name');
    this.age = +this.route.snapshot.queryParamMap.get('age');
    this.email = this.route.snapshot.queryParamMap.get('email');
  }

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

  onCancel() {
    this.getParams();
    this.msg = null;
    this.error = null;
  }

}
