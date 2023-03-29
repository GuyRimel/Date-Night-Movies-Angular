import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
<<<<<<< HEAD
import { MatSnackBar } from '@angular/material/snack-bar';
import { FetchApiDataService } from '../fetch-api-data.service';
=======
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
>>>>>>> 6.3

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss']
})

/**
 * The UserRegistrationFormComponent is a modal with inputs for
 * username and password. Successful login navigates to the
 * movies view.
 */
export class UserRegistrationFormComponent {
  @Input() userData = {
    Username: '',
    Password: '',
    Email: '',
    Birthday: ''
  };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar
  ) {}

<<<<<<< HEAD
  ngOnInit(): void {}

<<<<<<< HEAD
  // This is the function responsible for sending the form inputs to the backend
  registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe(
      (result) => {
        console.log(result);
        // Logic for a successful user registration goes here! (To be implemented)
        this.dialogRef.close(); // This will close the modal on success!
        this.snackBar.open('user registered successfully!', 'OK', {
=======
  // this func calls the func userRegistration (found in FetchApiDataService)
  // with the user input field data (object) as an argument
  // the userRegistration func sends an HTTP POST request to the backend
  // with userData in the request body
  registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe(
      () => {
        // Logic for a successful user registration goes here
        this.dialogRef.close(); // This will close the modal on success
<<<<<<< HEAD
        this.snackBar.open(result, 'OK', {
>>>>>>> 6.3
=======
        let welcomeString = 'Welcome aboard, ' + this.userData.Username + '! You may now login with your credentials.';
        this.snackBar.open(welcomeString, 'OK', {
>>>>>>> 6.4
          duration: 2000,
        });
=======
  /**
   * Calls userRegistration() (found in FetchApiDataService)
   * with the user input field data (object) as an argument.
   */
  registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe(
      () => {
        this.dialogRef.close(); // close the modal on success
        let welcomeString = 'Welcome aboard, ' + this.userData.Username +
          '! You may now login with your credentials.';
        this.snackBar.open(
          welcomeString,
          'OK',
          { duration: 2000 }
        );
>>>>>>> 6.5
      },
      () => {
        this.snackBar.open(
          'Something went wrong... please try again.',
          'OK',
          { duration: 2000 }
        );
      }
    );
  }
}
