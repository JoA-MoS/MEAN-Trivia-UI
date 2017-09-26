import { Router } from '@angular/router';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    if (!this.userService.loggedIn) {
      const userName = window.prompt('Please enter your name');
      if (userName.trim().length > 0) {
        this.userService.logIn(userName.trim());
      }
    }
    console.log(this.userService);
  }

  doLogout() {
    console.log('logging out');
    this.userService.logOut();
    this.router.navigateByUrl('');
  }

}
