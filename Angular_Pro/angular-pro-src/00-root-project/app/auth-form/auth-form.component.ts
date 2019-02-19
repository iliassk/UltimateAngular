import {Component, Output, EventEmitter, Renderer2, ElementRef, ChangeDetectorRef, AfterViewInit, ViewChild, ViewChildren, AfterContentInit, ContentChildren, QueryList} from '@angular/core';
import { AuthRememberComponent } from './auth-remember.component';
import { AuthMessageComponent } from "./auth-message.component";

import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content select="h3"></ng-content>
        <mat-form-field>
          <input matInput placeholder="Email address" type="email" name="email" #email ngModel>
        </mat-form-field>
        <br>
        <mat-form-field>
          <input matInput placeholder="Password" type="password" name="password" ngModel>
        </mat-form-field>
        <br>
        <ng-content select="auth-remember"></ng-content>
        <auth-message [style.display]="showMessage ? 'inherit' : 'none'"></auth-message>
        <ng-content select="button"></ng-content>
      </form>
    </div>
  `
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {

  private showMessage: boolean;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  @ViewChild('email') private email: ElementRef;

  @ViewChildren(AuthMessageComponent) private messages: QueryList<AuthMessageComponent>;

  @ContentChildren(AuthRememberComponent) private remember: QueryList<AuthRememberComponent>;

  constructor(private cd: ChangeDetectorRef, private renderer: Renderer2) {

  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

  ngAfterViewInit(): void {
    this.renderer.setAttribute(this.email.nativeElement, 'type', 'password');
    this.email.nativeElement.focus();
    if(this.messages) {
      this.messages.forEach((message) => {
        message.days = 60;
      })
      this.cd.detectChanges();
    }
  }

  ngAfterContentInit(): void {
    if(this.remember) {
      this.remember.forEach((rememberComponent) => {
        rememberComponent.checked.subscribe((checked: boolean) => this.showMessage = checked);
      });
    }
  }

}
