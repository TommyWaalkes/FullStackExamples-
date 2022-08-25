import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css'],
  providers: [MovieService]
})
export class DeleteMovieComponent implements OnInit {

  id: number = 0;
  constructor(private movieSerivce: MovieService) { }

  ngOnInit(): void {
  }

  DeleteMovie() {
    this.movieSerivce.deleteMovie(this.id).subscribe(
      (result) => { console.log(result) }
    )
  }

}
