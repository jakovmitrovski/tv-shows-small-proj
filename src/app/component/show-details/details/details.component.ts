import {Component, Input, OnInit} from '@angular/core';
import {SearchShowService} from "../../../service/search-show.service";
import {ShowDetails} from "../../../model/show-details";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, switchMap, tap} from "rxjs/operators";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input()show : ShowDetails;

  constructor(private service : SearchShowService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

  }


}
