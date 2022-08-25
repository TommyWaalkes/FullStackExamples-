import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    MovieSearchComponent,
    CreateMovieComponent,
    DeleteMovieComponent,
    UpdateMovieComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      //The path for the component needs to match the selector set in the component class
      //Whatever is set to the empty string is the landing page for your app
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'movie-search', component: MovieSearchComponent },
      { path: 'create-movie', component: CreateMovieComponent },
      { path: 'delete-movie', component: DeleteMovieComponent },
      { path: "update-movie", component: UpdateMovieComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
