import { Component } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    username: '',
    password: ''
  }

  constructor(private loginService: LoginService) { }

  onSubmit() {
    if ((this.credentials.username != '' && this.credentials.password != '') && (this.credentials.username != null && this.credentials.password != null)) {
      //token generate
      this.loginService.generateToken(this.credentials).subscribe(
        (response: any) => {
          //success
          console.log(response.token);
          this.loginService.loginUser(response.token)
          window.location.href = "/dashboard"
        }, error => {
          //error
          console.log(error);
          alert("Invalid credentials!")
        }
      )
    } else {
      alert("Kindly fill details");
    }

  }


}
