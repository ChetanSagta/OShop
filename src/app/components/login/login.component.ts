import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: AuthService) {
  }

  login(): void{
    this.auth.login();
  }

}
