import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  // Original dataset (all movies/items)
  movies = [
    { title: 'Movie 1', genre: 'Action', year: 2024 ,director:'Raja',imageUrl: 'assets/images/movie1.jpg' },
    { title: 'Movie 2', genre: 'Horror', year: 2023 ,director:'Siva',imageUrl: 'assets/images/movie2.jpg' },
    { title: 'Movie 3', genre: 'Drama', year: 2022 ,director:'Mukesh',imageUrl: 'assets/images/movie3.jpg' },
    { title: 'Movie 4', genre: 'Comedy', year: 2021 ,director:'Raja',imageUrl: 'assets/images/movie4.jpg' },
    { title: 'Movie 5', genre: 'Free', year: 2020 ,director:'Siva',imageUrl: 'assets/images/movie1.jpg' },
    { title: 'Movie 6', genre: 'Action', year: 2019 ,director:'Raja',imageUrl: 'assets/images/movie3.jpg' },
  ];

  // Filtered dataset to display
  filteredMovies = [...this.movies];

  // Function to filter movies by genre
  handleFilter(genre: string): void {
    if (genre === 'Free') {
      this.filteredMovies = this.movies.filter(movie => movie.year === 2020);
    } else {
      // Filter based on genre
      this.filteredMovies = this.movies.filter(movie => movie.genre === genre);
      
    }
  }
}
