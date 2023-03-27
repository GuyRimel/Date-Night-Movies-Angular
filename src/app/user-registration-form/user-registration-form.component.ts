import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss'],
})

export class UserRegistrationFormComponent implements OnInit {
  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {}

  // this func calls the func userRegistration (found in FetchApiDataService)
  // with the user input field data (object) as an argument
  // the userRegistration func sends an HTTP POST request to the backend
  // with userData in the request body
  registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe(
      () => {
        // Logic for a successful user registration goes here
        this.dialogRef.close(); // This will close the modal on success
        let welcomeString = 'Welcome aboard, ' + this.userData.Username + '! You may now login with your credentials.';
        this.snackBar.open(welcomeString, 'OK', {
          duration: 2000,
        });
      },
      () => {
        this.snackBar.open('Something went wrong... please try again.', 'OK', {
          duration: 2000,
        });
      }
    );
  }
}
