import { Component } from '@angular/core';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <auth-form (submitted)="createUser($event)">
        <h3>Create account</h3>
        <button type="submit" mat-raised-button color="primary">
            Register
        </button>
      </auth-form>
      <auth-form (submitted)="loginUser($event)">
        <h3>Login</h3>
        <auth-remember (checked)="rememberUser($event)"></auth-remember>
        <auth-remember (checked)="rememberUser($event)"></auth-remember>
        <auth-remember (checked)="rememberUser($event)"></auth-remember>
        <button type="submit" mat-raised-button color="primary">
          Log In
        </button>
      </auth-form>
    </div>
  `
})
export class AppComponent {

  private rememberMe: boolean = false;

  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user, this.rememberMe);
  }

  rememberUser(rememberMe: boolean){
    this.rememberMe = rememberMe;
  }

}
