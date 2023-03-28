import { Component } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
import { MatDialog } from '@angular/material/dialog';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
=======
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { MatDialog } from '@angular/material/dialog';
>>>>>>> 6.3
=======
>>>>>>> 6.4

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
<<<<<<< HEAD
  title = 'myFlix-Angular-client';
<<<<<<< HEAD

  constructor(public dialog: MatDialog) {}
  // This is the function that will open the dialog when the signup button is clicked
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      // Assigning the dialog a width
      width: '280px',
    });
  }
<<<<<<< HEAD
}
=======

  openUserLoginDialog(): void {
    this.dialog.open(UserLoginFormComponent, {
      // Assigning the dialog a width
      width: '280px',
    });
    console.log('clicked the Login button');
  }
}
>>>>>>> 6.3
=======
}
>>>>>>> 6.4
=======
  title = 'Date Night Movies Angular';
}
>>>>>>> 6.4
