import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  user: any = {};
  initialInput: any = {};
  favorites = 'hey';
  @Input() updatedUser = {
    Username: '',
    Password: '',
    Email: '',
    Birthday: '',
  };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserProfileComponent>,
    public snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUserInfo();
  }

  // Fetch user data via API
  getUserInfo(): void {
    this.fetchApiData.getUser().subscribe((resp: any) => {
      this.user = resp;
      this.updatedUser.Username = this.user.Username;
      this.updatedUser.Email = this.user.Email;
      // this.user.Birthday comes in as ISOString format, like so: "2011-10-05T14:48:00.000Z"
      this.updatedUser.Birthday = formatDate(this.user.Birthday, 'yyyy-MM-dd', 'en-US');
      this.favorites = this.user.FavoriteMovies;
      return this.user;
    });
  }

  // Update user data, such as username, password, email, or birthday
  updateUserInfo(): void {
    this.updatedUser.Birthday = new Date(this.updatedUser.Birthday).toISOString();
    this.fetchApiData.editUser(this.updatedUser).subscribe((result) => {
      console.log(result);
      if (this.user.Username !== result.Username) {
        localStorage.clear();
        this.router.navigate(['welcome']);
        this.snackBar.open(
          'User profile successfully updated. Please login using your new credentials',
          'OK',
          {
            duration: 2000,
          }
        );
      }
    });
  }

  // Delete user data for the user that is logged in
  deleteAccount(): void {
    if (confirm('All your data will be lost - this cannnot be undone!')) {
      this.router.navigate(['welcome']).then(() => {
        this.snackBar.open(
          'You have successfully deleted your account - we are sorry to see you go!',
          'OK',
          {
            duration: 2000,
          }
        );
      });
      this.fetchApiData.deleteUser().subscribe((result) => {
        console.log(result);
        localStorage.clear();
      });
    }
  }
}