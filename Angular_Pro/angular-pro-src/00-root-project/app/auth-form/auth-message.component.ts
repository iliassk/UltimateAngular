import { Component } from '@angular/core';

@Component({
  selector: 'auth-message',
  template: `
    <div>
      You'll remain logged in for the next {{days}} days.
    </div>
  `
})
export class AuthMessageComponent {

  days: number = 7;

}
