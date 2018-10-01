import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { GetEmployeesComponent } from './components/get-employees/get-employees.component';

const appRoutes: Routes = [
  { path: 'get', component: GetEmployeesComponent },
  { path: 'add', component: AddEmployeeComponent },
  { path: 'edit', component: EditEmployeeComponent },
  {
    path: '', redirectTo: '/get',
    pathMatch: 'full'
  },
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
