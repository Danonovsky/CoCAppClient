import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public userService: UserService,
    private toastr: ToastrService
  ) { }

  title = 'app';

  logout(): void {
    localStorage.removeItem("jwt");
    this.toastr.success('You have been logged out.');
  }
}
