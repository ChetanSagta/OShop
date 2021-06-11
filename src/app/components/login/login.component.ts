import {NgForm} from '@angular/forms';
import {Component} from '@angular/core';
import {HttpHeaders, HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {finalize} from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';


@Component({selector: 'login', templateUrl: './login.component.html', styleUrls: ['./login.component.css']})
export class LoginComponent {

    loading = false;
    response ?: string;
    responseHeaders ?: string;
    authorizationToken ?: string|null;

    constructor(private http: HttpClient, private route: Router) {}

    onSubmit(loginForm: NgForm): void {
        console.log(loginForm.value);
        this.loading = true;
        this.http.post('http://localhost:8080/api/login', loginForm.value, {observe: 'response'})
        .pipe(finalize(() => this.loading = false)).subscribe((response) => {
            if (response) {
                this.response = JSON.stringify(response.body);
                this.authorizationToken = response.headers.get('authorization');
                if (this.authorizationToken){
                      localStorage.setItem('AuthorizationToken', this.authorizationToken);
                      localStorage.setItem('User', this.response);
                      this.route.navigate(['/']).then(() => window.location.reload());
                }
            }
        }, (errors: HttpErrorResponse) => {
            console.log('Error: ' + JSON.stringify(errors));
        });
    }
}
