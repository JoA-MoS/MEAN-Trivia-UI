import { UserService } from './services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    if (!this.userService.loggedIn) {
      const userName = window.prompt('Please enter your name');
      if (userName.trim().length > 0) {
        this.userService.loggedIn = true;
        this.userService.userFirstName = userName;
      }
    }
    console.log(this.userService);
  }

  doLogout() {
    this.userService.loggedIn = false;
    this.userService.userFirstName = '';
  }

}
