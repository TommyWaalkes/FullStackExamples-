import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  urlRoot: string;
  //We'll need to inject 2 services: HTTP and Base url
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.urlRoot = baseUrl;
  }

  getMovieById(id: number) {
    return this.http.get<Movie>(this.urlRoot + "movies/GetMovieById/" + id);
  }
  searchMoviesTitle(title: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.urlRoot + "movies/SearchByTitle/" + title);
  }

  createMovie(m: Movie) {
    return this.http.put<String>(this.urlRoot + "movies/CreateMovie/", m);
  }

  deleteMovie(id: number) {
    return this.http.delete<String>(this.urlRoot + "movies/DeleteMovie/" + id);
  }

  updateMovie(id: number, body: Movie) {
    return this.http.post<String>(this.urlRoot + "movies/UpdateMovie/" + id, body);
  }
}
