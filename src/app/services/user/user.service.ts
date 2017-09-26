import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private _loggedIn: boolean;
  private _userFirstName: string;
  constructor() {
    this._loggedIn = false;
    this._userFirstName = '';
  }

  get loggedIn(): boolean {
    this._loggedIn = JSON.parse(localStorage.getItem('loggedIn')) as boolean;
    return this._loggedIn;
  }

  get userFirstName(): string {
    return this._userFirstName || JSON.parse(localStorage.getItem('userFirstName'));
  }

  logIn(userFirstName: string) {
    this._loggedIn = true;
    this._userFirstName = userFirstName;
    localStorage.setItem('loggedIn', JSON.stringify(this._loggedIn));
    localStorage.setItem('userFirstName', JSON.stringify(this._userFirstName));

  }

  logOut() {
    this._loggedIn = false;
    this._userFirstName = '';
    localStorage.setItem('loggedIn', JSON.stringify(this._loggedIn));
    localStorage.setItem('userFirstName', JSON.stringify(this._userFirstName));
  }

}
