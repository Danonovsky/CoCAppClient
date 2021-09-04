import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
    private userService: UserService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  signup() {
    console.log(this.user);
    this.userService.register(this.user).subscribe(
      success => {
        this.toastr.success('Your account has been created.');
      },
      err => {
        this.toastr.error('An error occured.');
      }
    )
  }

}
