import { Component, OnInit } from '@angular/core';
import { UserRequest } from '../../models/user/login/userRequest';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  warning?: String
  alerts = [];
  user: UserRequest = {
    "email": "",
    "password" : ""
  };

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    this.userService.login(this.user).subscribe(value => {
      if(value.status == 200) {
        this.userService.isLoggedIn = true;
      }
    },
    err => {
      this.warning = "Ble";
    });
  }

}
