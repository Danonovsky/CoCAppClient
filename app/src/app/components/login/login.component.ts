import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserRequest } from '../../models/user/login/userRequest';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: UserRequest = {
    "email": "",
    "password" : ""
  };

  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    this.userService.login(this.user).subscribe(value => {
      if(value.status == 200) {
        var token = value.body!.token.toString();
        localStorage.setItem("jwt",token);
        this.toastr.success('You are now logged in!');
      }
    },
    err => {
      this.toastr.error('Invalid credentials.');
    });
  }
}
