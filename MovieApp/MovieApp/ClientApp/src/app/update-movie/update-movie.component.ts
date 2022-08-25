import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css'],
  providers: [MovieService]
})
export class UpdateMovieComponent implements OnInit {
  id: number = 0;
  movie: Movie = new Movie(0, "", 0, 0, "", "");
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  lookUpMovie() {
    this.movieService.getMovieById(this.id).subscribe(
      (movieToUpdate) => { this.movie = movieToUpdate }
    )
  }

  UpdateMovie() {
    this.movieService.updateMovie(this.id, this.movie).subscribe(
      (result) => { console.log(result) }
    )

  }

}
