import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { SearchComponent } from './component/search/search.component';
import { SearchItemComponent } from './component/search/search-list/search-item/search-item.component';
import { SearchListComponent } from './component/search/search-list/search-list.component';
import { ShowDetailsComponent } from './component/show-details/show-details.component';
import { DetailsComponent } from './component/show-details/details/details.component';
import { ShowCastComponent } from './component/show-details/show-cast/show-cast.component';
import { ShowEpisodesComponent } from './component/show-details/show-episodes/show-episodes.component';
import { EpisodeItemComponent } from './component/show-details/show-episodes/episode-item/episode-item.component';
import { CastItemComponent } from './component/show-details/show-cast/cast-item/cast-item.component';
import { LoadingComponent } from './component/loading/loading.component';
import { NoResultsComponent } from './component/no-results/no-results.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    SearchItemComponent,
    SearchListComponent,
    ShowDetailsComponent,
    DetailsComponent,
    ShowCastComponent,
    ShowEpisodesComponent,
    EpisodeItemComponent,
    CastItemComponent,
    LoadingComponent,
    NoResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
