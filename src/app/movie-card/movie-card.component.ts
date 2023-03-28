import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { GenreComponent } from '../genre/genre.component';
import { DirectorComponent } from '../director/director.component';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  movies: any[] = [];
  favorites: any[] = [];
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getMovies();
    this.getFavorites();
  }

  /**
   * fetch movies from FetchApiDataService service getAllMovies()
   * @returns an array of all movies
   * @function getMovies
   */
  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      return this.movies;
    });
  }

  /**
   * fetch favorite movies from FetchApiDataService service getUser()
   * @returns an empty array or an array of movies favorited by the user
   * @function getFavorites
   */
  getFavorites(): void {
    this.fetchApiData.getUser().subscribe((resp: any) => {
      this.favorites = resp.FavoriteMovies;
      return this.favorites;
    });
  }

  // check if a movie is a user's favorite, return boolean
  isFavorite(id: string): boolean {
    return this.favorites.includes(id);
  }

  /**
   * add one favorite movie with FetchApiDataService service addFavoriteMovie()
   * @function addToFavorites
   */
  addToFavorites(id: string): void {
    console.log(id);
    this.fetchApiData.addFavoriteMovie(id).subscribe((result) => {
      this.snackBar.open('Movie added to favorites', 'OK', {
        duration: 2000,
      });
      this.ngOnInit();
    });
  }

  /**
   * remove one favorite movie with FetchApiDataService service addFavoriteMovie()
   * @function removeFromFavorites
   */
  removeFromFavorites(id: string): void {
    console.log(id);
    this.fetchApiData.removeFavoriteMovie(id).subscribe((result) => {
      this.snackBar.open('Movie removed from favorites', 'OK', {
        duration: 2000,
      });
      this.ngOnInit();
    });
  }

  /**
   * Open the Genre dialog modal
   * @param name
   * @param description
   * @function openGenre
   */
  openGenre(name: string, description: string): void {
    this.dialog.open(GenreComponent, {
      data: {
        Name: name,
        Description: description,
      },
      width: '400px',
    });
  }

  /**
   * Open the Director dialog modal
   * @param name
   * @param bio
   * @param birthday
   * @function openDirector
   */
  openDirector(name: string, bio: string, birthday: string): void {
    this.dialog.open(DirectorComponent, {
      data: {
        Name: name,
        Bio: bio,
        Birth: birthday,
      },
      width: '400px',
    });
  }

  /**
   * Open movie details dialog modal
   * @param title
   * @param description
   * @function openSummary
   */
  openSummary(title: string, description: string): void {
    this.dialog.open(MovieDetailsComponent, {
      data: {
        Title: title,
        Description: description,
      },
      width: '400px',
    });
  }
}
