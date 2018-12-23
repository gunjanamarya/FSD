import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User.model';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [UserService]
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;
  user: User;
  msg: string;
  error: string;
  id: string;

  constructor(private fb: FormBuilder,
    private userService: UserService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      ssoId: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    this.user = {
      "firstName": this.userForm.get('firstName').value,
      "lastName": this.userForm.get('lastName').value,
      "email": this.userForm.get('email').value,
      "ssoId": this.userForm.get('ssoId').value,
    }
    this.userService.addUser(this.user).subscribe(result => {
      this.id = result._id;
      this.msg = "User " + this.user.firstName + " " + this.user.lastName + " registered successfully !"
    }, error => {
      this.msg = null;
      this.error = "Can not add user !"
      console.log(error)
    })
  }

  onCancel() {
    this.userForm.reset();
    this.msg = this.error = null
  }

}
