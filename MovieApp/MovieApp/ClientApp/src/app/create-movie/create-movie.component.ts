import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../Movie';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css'],
  providers: [MovieService]
})
export class CreateMovieComponent implements OnInit {
  newMovie: Movie;
  constructor(private movieService: MovieService) {
    this.newMovie = new Movie(0, "", 0, 0, "", "");
  }

  ngOnInit(): void {
  }
  CreateMovie() {
    this.movieService.createMovie(this.newMovie).subscribe(
      (result) => { console.log("Creation worked") }
    )
  }

}
