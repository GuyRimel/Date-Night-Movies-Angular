import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})

/**
 * The UserLoginFormComponent is a modal with inputs for
 * username and password. Successful login navigates to the
 * movies view.
 */
export class UserLoginFormComponent {
  @Input() userData = { Username: '', Password: '' };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    private router: Router
  ) {}

  /**
  *  Calls userLogin() (found in FetchApiDataService)
  *  with the user input field data (object) as an argument.
  */
  loginUser(): void {
    this.fetchApiData.userLogin(this.userData).subscribe(
      (result) => {
        // store user and token in localStorage
        let user = result.user.Username;
        let token = result.token;
        localStorage.setItem('user', user);
        localStorage.setItem('token', token);
        this.dialogRef.close(); // close the modal on success
        this.router.navigate(['movies']);
        this.snackBar.open('Log in successful', 'OK', {
          duration: 2000,
        });
      },
      (result) => {
        this.snackBar.open(result, 'OK', {
          duration: 2000,
        });
      }
      );
    }
}
