import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../Components/changepassword/admin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:9595"

  constructor(private http: HttpClient) { }

  generateToken(credentials: any) {
    return this.http.post(`${this.url}/token`, credentials)
  }

  loginUser(token: any) {
    localStorage.setItem('token', token);
    return true;
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');
    if (token == undefined || token === '' || token == null) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    localStorage.removeItem('token');
    return true;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  changePassword(admin: Admin): Observable<Object> {
    return this.http.put<Object>(`${this.url}/changePassword`, admin);
  }
}
