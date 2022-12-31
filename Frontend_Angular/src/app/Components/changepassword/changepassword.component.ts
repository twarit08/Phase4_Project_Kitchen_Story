import { Component } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { Admin } from './admin';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent {
  admin: Admin = new Admin();
  cnfPassword: any;

  constructor(private loginService: LoginService) { }

  changePassword() {
    this.loginService.changePassword(this.admin).subscribe({
      next: (response) => {
        console.log(response);
        alert('Password changed successfully!');
      }, error: (error) => {
        console.log(error);
        alert('Username is invalid!');
      }
    })
  }
  onSubmit() {
    if (this.admin.username == null || this.admin.password == null) {
      alert("Please fill in your username and new password")
    } else if (this.admin.password != this.cnfPassword) {
      alert("Password does not match!");
    } else {
      this.changePassword()
    }


  }


}
