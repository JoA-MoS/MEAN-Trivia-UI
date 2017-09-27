import { Router } from '@angular/router';
import { UserService } from './services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    if (!this.userService.loggedIn) {
      let userName = '';
      while (!userName || !userName.trim()) {
        userName = window.prompt('Please enter your name');
      }

      this.userService.logIn(userName.trim());

    }
    console.log(this.userService);
  }

  doLogout() {
    console.log('logging out');
    this.userService.logOut();
    this.router.navigateByUrl('');
  }

}
