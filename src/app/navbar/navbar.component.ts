import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})

/**
 * The NavbarComponent provides a simple UI with a fixed position at the top
 * of the screen for the Movies view and Profile view. This is also where the user can log out.
 */
export class NavbarComponent {
  constructor(public router: Router) {}

  /**
   * Navigates to the movies view
   */
  toMovies(): void {
    this.router.navigate(['movies']);
  }

  /**
   * Navigates to the user's profile view
   */
  toProfile(): void {
    this.router.navigate(['profile']);
  }

  /**
   * Logs out the user by clearing the localStorage,
   * thereby deleting the "user" and "token" key/values
   */
  logout(): void {
    this.router.navigate(['welcome']);
    localStorage.clear();
  }
}