import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})

export class UserLoginFormComponent implements OnInit {
  @Input() userData = { Username: '', Password: '' };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  // this func calls the func userLogin (found in FetchApiDataService)
  // with the user input field data (object) as an argument
  // the userLogin func sends an HTTP POST request to the backend
  // with userData in the request body
  loginUser(): void {
    this.fetchApiData.userLogin(this.userData).subscribe(
      (result) => {
        // store user and token in localStorage
        let user = result.user.Username;
        let token = result.token;
        localStorage.setItem('user', user);
        localStorage.setItem('token', token);
        console.log(user, token);
        // Logic for a successful user registration goes here
        this.dialogRef.close(); // This will close the modal on success
        this.snackBar.open(result, 'OK', {
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
