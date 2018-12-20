import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddDocumentComponent } from './components/add-document/add-document.component';


@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    AddUserComponent,
    AddDocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
