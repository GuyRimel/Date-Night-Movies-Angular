import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// Created Components
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from '../user-login-form/user-login-form.component';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})

/**
 * The WelcomePageComponent is the default view if the user is not logged in.
 * It displays a welcome message, a log in button, and a register button
 */
export class WelcomePageComponent {
  constructor(
    public dialog: MatDialog
  ) {}

  /**
   * Open the user registration dialog modal displaying input fields for user creation
   */
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      width: '20rem',
    });
  }

  /**
   * Open the user login dialog modal displaying input fields for user login
   */
  openUserLoginDialog(): void {
    this.dialog.open(UserLoginFormComponent, {
      width: '20rem',
    });
  }
}
