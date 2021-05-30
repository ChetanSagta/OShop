import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, NgForm} from '@angular/forms';
import {finalize} from 'rxjs/operators';

@Component({selector: 'app-signup', templateUrl: './signup.component.html', styleUrls: ['./signup.component.css']})
export class SignupComponent {

    loading = false;
    errorMessage = '';
    responseMessage = '';
    constructor(private http: HttpClient) {}

    // httpOptions = {
    //     headers: new HttpHeaders({
    //       'Content-Type':  'application/json',
    //       'Access-Control-Allow-Origin':'*',
    //     })
    //   };

    onSubmit(contactForm: NgForm): void {
        this.loading = true;
        // console.log(contactForm.value);

        this.http.post('http://localhost:8080/api/signup', contactForm.value,{responseType: 'text'})
        .pipe(finalize(() => this.loading = false))
        .subscribe((response) => {
           this.responseMessage = response.toString();
           //console.log("Response: " + response)
         },
            (error: HttpErrorResponse) => {
                if (error) {
                    const errorPart = JSON.parse(JSON.stringify(error));
                    console.log(errorPart);
                    this.errorMessage = JSON.parse(errorPart.error).message;
                }
            }
        );
    }
}
