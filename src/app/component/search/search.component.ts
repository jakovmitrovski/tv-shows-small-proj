import { Component, OnInit } from '@angular/core';
import {SearchShowService} from "../../service/search-show.service";
import {Observable, of, Subject} from "rxjs";
import {ShowLessDetails} from "../../model/show-less-details";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service: SearchShowService) { }

  shows: ShowLessDetails[];
  query$ = new Subject<any>();
  loading: boolean;

  ngOnInit(): void {

    this.query$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(query => this.service.getShowsLessDetails(query))
    ).subscribe(result =>{
      this.shows = result;
      this.loading = false;
    });
  }

  onSearch(query: string){
    this.loading = true;
    this.query$.next(query);
  }

}
