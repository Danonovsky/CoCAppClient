import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    this.userService.login(this.user).subscribe(value => {
      if(value.status == 200) {
        var token = value.body!.token.toString();
        localStorage.setItem("nickname",value.body!.nickname.toString());
        localStorage.setItem("jwt",token);
        this.toastr.success('You are now logged in!');
        this.router.navigate(["games"]);
      }
    },
    err => {
      this.toastr.error('Invalid credentials.');
    });
  }
}
