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
    { title: 'Maaveeran', genre: 'Action', year: 2024 ,director:'Raja',imageUrl: 'assets/images/movie1.jpg' },
    { title: 'Kanaa', genre: 'Horror', year: 2023 ,director:'Siva',imageUrl: 'assets/images/movie2.jpg' },
    { title: 'Barath', genre: 'Drama', year: 2022 ,director:'Mukesh',imageUrl: 'assets/images/movie3.jpg' },
    { title: 'Don', genre: 'Comedy', year: 2021 ,director:'Raja',imageUrl: 'assets/images/movie4.jpg' },
    { title: 'RRR', genre: 'Action', year: 2020 ,director:'Siva',imageUrl: 'assets/images/movie1.jpg' },
    { title: 'Maharishi', genre: 'Action', year: 2019 ,director:'Raja',imageUrl: 'assets/images/movie3.jpg' },

    { title: 'Malikapuram', genre: 'Action', year: 2024 ,director:'Raja',imageUrl: 'assets/images/movie1.jpg' },
    { title: 'Killi', genre: 'Horror', year: 2023 ,director:'Siva',imageUrl: 'assets/images/movie2.jpg' },
    { title: 'Mathura', genre: 'Drama', year: 2022 ,director:'Mukesh',imageUrl: 'assets/images/movie3.jpg' },
    { title: 'vaseekara', genre: 'Comedy', year: 2021 ,director:'Raja',imageUrl: 'assets/images/movie4.jpg' },
    { title: 'Ajan', genre: 'Horror', year: 2020 ,director:'Siva',imageUrl: 'assets/images/movie1.jpg' },
    { title: 'Puli', genre: 'Action', year: 2019 ,director:'Raja',imageUrl: 'assets/images/movie3.jpg' },
  ];

  // Filtered dataset to display
  filteredMovies = [...this.movies];

  // Function to filter movies by genre
  handleFilter(genre: string): void {
    
    if (genre === 'All') {
      this.filteredMovies = [...this.movies];
    } else {
      this.filteredMovies = this.movies.filter(movie => movie.genre === genre);
    }
  }
}
