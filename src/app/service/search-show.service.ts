import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {forkJoin, Observable, throwError} from "rxjs";
import {ShowLessDetails} from "../model/show-less-details";
import {BASE_API} from "../constants/constants";
import {catchError, map, mergeMap, toArray} from "rxjs/operators";
import {ShowDetails} from "../model/show-details";
import {ShowCast} from "../model/show-cast";
import {ShowEpisode} from "../model/show-episode";

@Injectable({
  providedIn: 'root'
})
export class SearchShowService {

  constructor(private http : HttpClient) { }

  getShowsLessDetails(query: string) : Observable<ShowLessDetails []>{
      return this.http.get<any []>( `${BASE_API}/search/shows?q=${query}`)
        .pipe(
          mergeMap(result => result),
          map(result => {
              let summary = SearchShowService.parseSummary(result.show.summary);
              let image = result.show.image?.original;
              return {
                score: result.score,
                id: result.show.id,
                name: result.show.name,
                summary: summary,
                genres: result.show.genres,
                image: image,
                };
              }
            ),
          toArray(),
          catchError(SearchShowService.handleError)
        );
  }


  private getShowDetailsById(id : number) : Observable<ShowDetails>{
    return this.http.get<any>(`${BASE_API}/shows/${id}`)
      .pipe(
        map(result => {
          let image = result.image?.medium;
          let summary = result.summary;
          if (summary) summary = SearchShowService.stripSummary(summary);
          return {
            score: result.score,
            id: result.id,
            url: result.url,
            name: result.name,
            language: result.language,
            genres: result.genres,
            status: result.status,
            premiered: result.premiered,
            officialSite: result.officialSite,
            summary: summary,
            image: image,
          };
        })
      );
  }

  private getShowCastById(id: number) : Observable<ShowCast[]>{
    return this.http.get<any []>(`${BASE_API}/shows/${id}/cast`)
      .pipe(
        mergeMap(result => result),
        map(result => {return {
            name: result.person.name,
            image: result.person.image?.medium
        }}),
        toArray()
      );
  }

  private getShowEpisodesById(id : number) : Observable<ShowEpisode []>{
    return this.http.get<any []>(`${BASE_API}/shows/${id}/episodes`)
      .pipe(
        mergeMap(result => result),
        map(result => {
          return {
            name: result.name,
            number: result.number,
            season: result.season
          }
        }),
        toArray()
      );
  }

  getAllShowDetailsById(id: number) {
      const details$: Observable<ShowDetails> = this.getShowDetailsById(id);
      const episodes$: Observable<ShowEpisode[]> = this.getShowEpisodesById(id);
      const cast$: Observable<ShowCast[]> = this.getShowCastById(id);

      return forkJoin({
        showDetails: details$,
        showEpisodes: episodes$,
        showCast: cast$
      });
    }

  private static stripSummary(summary: string){
    return summary.replace(/(<([^>]+)>)/gi, "");
  }

  private static parseSummary(summary : string){
    if (summary?.length > 300) summary = summary.substr(0, 300) + "...";
    if (summary){
      summary = SearchShowService.stripSummary(summary);
    }else{
      summary = "There is no available summary for this series!";
    }
    return summary;
  }

  private static handleError(error: HttpErrorResponse){
    return throwError("There was a problem loading the tv shows, please come back later :(");
  }
}
