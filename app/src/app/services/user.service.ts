import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { UserRequest } from '../models/user/login/userRequest';
import { UserResponse } from '../models/user/login/userResponse';
import { RegisterRequest } from '../models/user/register/registerRequest';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url="http://localhost:5000/user/"

  //isLoggedIn = false;

  constructor(
    private http: HttpClient
  ) { }

  login(user: UserRequest): Observable<HttpResponse<UserResponse>> {
    var result = this.http.post<UserResponse>(this.url+"authenticate", user, { observe: 'response'});
    return result;

  }

  register(user: RegisterRequest): Observable<HttpResponse<Object>> {
    return this.http.post(this.url+"register",user, { observe: 'response'});
  }

  isLoggedIn() {
    return localStorage.getItem("jwt");
  }

  getNickname() {
    return localStorage.getItem("nickname");
  }
}
