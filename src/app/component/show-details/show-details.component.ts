import { Component, OnInit } from '@angular/core';
import {SearchShowService} from "../../service/search-show.service";
import {ShowDetails} from "../../model/show-details";
import {ShowEpisode} from "../../model/show-episode";
import {ShowCast} from "../../model/show-cast";
import {ActivatedRoute} from "@angular/router";
import {map, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  showDetails: ShowDetails;
  showEpisodes: ShowEpisode [];
  showCast: ShowCast [];

  constructor(private service: SearchShowService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(paramMap => {
        const id = parseInt(paramMap.get("id"));
        return this.service.getAllShowDetailsById(id);
      })
    ).subscribe(result => {
      this.showDetails = result.showDetails;
      this.showCast = result.showCast;
      this.showEpisodes = result.showEpisodes;
    });
  }
}
