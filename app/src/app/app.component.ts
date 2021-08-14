import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public userService: UserService
  ) { }

  title = 'app';

  logout(): void {
    localStorage.removeItem("jwt");
    console.log("logged out");
  }
}