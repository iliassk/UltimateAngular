import {
  Component,
  ViewChild,
  AfterContentInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  ComponentRef
} from '@angular/core';

import {AuthFormComponent} from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <div>
        <auth-form (submitted)="createUser($event)">
          <h3>Create account</h3>
          <button type="submit" mat-raised-button color="primary">
            Register
          </button>
        </auth-form>
      </div>
      <div>
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
      <div>
        <button mat-raised-button color="primary" (click)="moveComponent()">
          Move
        </button>
        <button mat-raised-button color="primary" (click)="destroyComponent()">
          Destroy
        </button>
        <div #entry>
        </div>
      </div>
    </div>
  `
})
export class AppComponent implements AfterContentInit {

  @ViewChild('entry', {read: ViewContainerRef}) private entry: ViewContainerRef;

  private rememberMe: boolean = false;
  private component: ComponentRef<AuthFormComponent>;

  constructor(
    private resolver: ComponentFactoryResolver
  ) {
  }

  ngAfterContentInit(): void {
    const factory = this.resolver.resolveComponentFactory(AuthFormComponent);
    const componentO = this.entry.createComponent(factory);
    this.component = this.entry.createComponent(factory, 0);
  }

  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user, this.rememberMe);
  }

  rememberUser(rememberMe: boolean) {
    this.rememberMe = rememberMe;
  }

  destroyComponent() {
    this.component.destroy();
  }

  moveComponent() {
    this.entry.move(this.component.hostView, 1);
  }
}
