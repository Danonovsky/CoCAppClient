import { Component, OnInit } from '@angular/core';
import { RegisterRequest } from 'src/app/models/user/register/registerRequest';

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

  constructor() { }

  ngOnInit(): void {
  }

  signup() {
    
  }

}
