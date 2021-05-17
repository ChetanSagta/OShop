import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  loading = false;

  constructor(private http: HttpClient) { }

  onSubmit(contactForm: NgForm): void{
    this.loading = true;
    console.log(contactForm.value);
    this.http.post("http://localhost:8080/api/signup",contactForm.value)
    .pipe(finalize(()=> this.loading = false)).subscribe();

    // this.loginService.sendFormData(JSON.stringify(contactForm.value));
  }

}
