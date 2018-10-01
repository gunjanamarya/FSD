import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../services/emp.service';
import { Employee } from '../../model/emp.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-employees',
  templateUrl: './get-employees.component.html',
  styleUrls: ['./get-employees.component.css'],
  providers: [EmpService]
})

export class GetEmployeesComponent implements OnInit {

  constructor(private empService: EmpService,
    private router: Router) { }

  emp_list: Employee[];

  ngOnInit() {
    this.empService.getEmps().subscribe(data => {
      this.emp_list = data;
    })
  }

  onEdit(emp) {
    this.router.navigate(['edit/'], {
      queryParams: {
        id: emp.id,
        name: emp.name,
        age: emp.age,
        email: emp.email
      }
    })
  }

  onDelete(id) {
    this.empService.deleteEmp(id).subscribe(data => {
      this.empService.getEmps().subscribe(data => {
        this.emp_list = data;
      })
    })
  }

}
