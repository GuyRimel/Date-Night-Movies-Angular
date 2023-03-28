import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFavoriteMoviesComponent } from './user-favorite-movies.component';

describe('UserFavoriteMoviesComponent', () => {
  let component: UserFavoriteMoviesComponent;
  let fixture: ComponentFixture<UserFavoriteMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFavoriteMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFavoriteMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
