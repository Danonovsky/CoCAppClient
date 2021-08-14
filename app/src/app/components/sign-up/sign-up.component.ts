import { Component, OnInit } from '@angular/core';
import { RegisterRequest } from 'src/app/models/user/register/registerRequest';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  warning?: String;
  user: RegisterRequest = {
    "email": "",
    "password" : "",
    "confirmPassword": "",
    "nickname": ""
  };

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  signup() {
    console.log(this.user);
    this.userService.register(this.user).subscribe(
      success => {
        console.log(success);
      },
      err => {
        console.log(err);
      }
    )
  }

}
