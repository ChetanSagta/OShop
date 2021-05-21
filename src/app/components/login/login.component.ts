import { NgForm } from '@angular/forms';
import { Component} from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loading = false;
  response : Object | undefined;

  headers = new HttpHeaders();
  constructor(private http: HttpClient) {
  }

  onSubmit(loginForm: NgForm): void{
    console.log(loginForm.value);
    this.loading = true;
    this.headers.append('Content-Type', 'application/json');
    this.http.post("http://localhost:8080/api/login", loginForm.value, {headers: this.headers})
    .pipe(finalize(() => this.loading = false))
    .subscribe(response => {
      if(response)
        this.response = response;
      console.log(response)});
  }
}
