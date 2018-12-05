import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User.model';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  private user: User;
  private loginForm: FormGroup;
  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onSubmit() {

    this.user = {
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value
    }

    this.loginService.login(this.user).subscribe(result => {
      this.router.navigate(['dashboard']);
    }, error => {
      console.log('Authentication failed')
    })
  }

}