import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = 'http://localhost:8080/signup';

  headers = new HttpHeaders();

  constructor(private http: HttpClient) {}

  sendFormData(content: string): Observable<object>{
    this.headers.append('Content-Type', 'application/text; charset=UTF-8');
    return this.http
      .post(this.url, content, { headers: this.headers});
  }
}
