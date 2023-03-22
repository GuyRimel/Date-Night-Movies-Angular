import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
import { RouterModule, Routes } from '@angular/router';
>>>>>>> 6.4
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> 6.3
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
// Material Design
<<<<<<< HEAD
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
// Created Components
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

=======
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
// Created Components
import { DirectorComponent } from './director/director.component';
import { GenreComponent } from './genre/genre.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
<<<<<<< HEAD
>>>>>>> 6.3
=======
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'movies', component: MovieCardComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'prefix' }
]
>>>>>>> 6.4

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    UserRegistrationFormComponent
=======
    UserRegistrationFormComponent,
<<<<<<< HEAD
    UserLoginFormComponent
>>>>>>> 6.3
=======
    UserLoginFormComponent,
    MovieCardComponent,
    WelcomePageComponent,
    DirectorComponent,
    GenreComponent,
    MovieDetailsComponent,
    UserProfileComponent
>>>>>>> 6.4
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
<<<<<<< HEAD
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
=======
>>>>>>> 6.3
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatSnackBarModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
