import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { UserService } from './service/user.service';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private userService: UserService, private auth: AuthService, private router: Router) {
    auth.user$.subscribe((user) => {
      if (user) {
        userService.save(user);

        const returnUrl = localStorage.getItem('returnUrl');
        if (returnUrl){ router.navigateByUrl(returnUrl); }
      }
    });
  }
}
