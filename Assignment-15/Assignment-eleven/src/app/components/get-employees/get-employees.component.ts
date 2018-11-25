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

  // Stores the employee details
  emp_list: Employee[];

  ngOnInit() {

    // Fetch all employee details
    this.empService.getEmps().subscribe(data => {
      this.emp_list = data;
    })
  }

  onEdit(emp) {

    // Navigate to Edit Employeee screen
    this.router.navigate(['edit/' + emp.id])
  }

  onDelete(id) {

    // Delete the employee based on the passed id
    this.empService.deleteEmp(id).subscribe(data => {
      this.empService.getEmps().subscribe(data => {
        this.emp_list = data;
      })
    })
  }

}
