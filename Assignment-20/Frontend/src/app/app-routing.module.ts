import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { AddDocumentComponent } from './components/add-document/add-document.component';

export const appRoutes: Routes = [
  { path: 'list-users', component: ListUsersComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'add-doc', component: AddDocumentComponent },
  {
    path: '', redirectTo: '/list-users',
    pathMatch: 'full'
  },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }