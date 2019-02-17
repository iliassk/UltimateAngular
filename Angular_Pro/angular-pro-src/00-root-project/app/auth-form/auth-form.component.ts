import { Component, Output, EventEmitter, ContentChild, AfterContentInit } from '@angular/core';
import { AuthRememberComponent } from './auth-remember.component';

import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content select="h3"></ng-content>
        <mat-form-field>
          <input matInput placeholder="Email address" type="email" name="email" ngModel>
        </mat-form-field>
        <br>
        <mat-form-field>
          <input matInput placeholder="Password" type="password" name="password" ngModel>
        </mat-form-field>
        <br>
        <ng-content select="auth-remember"></ng-content>
        <div *ngIf="showMessage">
          You'll remain logged in for the next 30 days.
        </div>
        <ng-content select="button"></ng-content>
      </form>
    </div>
  `
})
export class AuthFormComponent implements AfterContentInit{

  private showMessage: boolean;

  @Output() private submitted: EventEmitter<User> = new EventEmitter<User>();

  @ContentChild(AuthRememberComponent) private remember: AuthRememberComponent;

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

  ngAfterContentInit(): void {
    if(this.remember) {
      this.remember.checked.subscribe((checked: boolean) => this.showMessage = checked);
    }
  }

}
