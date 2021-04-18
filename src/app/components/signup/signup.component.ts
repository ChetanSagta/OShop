import { LoginService } from './../../service/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private loginService: LoginService) { }

  onSubmit(contactForm: NgForm): void{
    console.log(JSON.stringify(contactForm.value));
    this.loginService.sendFormData(JSON.stringify(contactForm.value));
  }

}
