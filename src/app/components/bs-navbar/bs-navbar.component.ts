import { Component } from '@angular/core';
@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css'],
})
export class BsNavbarComponent {

  userLoggedin = false;
  currentUser = '';

  constructor() {
    const userData = localStorage.getItem('User');
    if (userData){
      this.userLoggedin = true;
      this.currentUser = JSON.parse(userData).username;
    }
  }

  logout(): void {
    localStorage.clear();
    window.location.reload();
  }
}
