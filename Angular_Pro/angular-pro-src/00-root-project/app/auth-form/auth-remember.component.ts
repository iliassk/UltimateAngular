import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'auth-remember',
  template: `    
    <mat-checkbox (change)="onChecked($event.checked)">Keep me logged in!</mat-checkbox>
    <br>
  `
})
export class AuthRememberComponent {

  @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();

  onChecked(value: boolean) {
    this.checked.emit(value);
  }

}
