import {Component, Input, OnInit} from '@angular/core';
import {ShowEpisode} from "../../../../model/show-episode";

@Component({
  selector: 'app-episode-item',
  templateUrl: './episode-item.component.html',
  styleUrls: ['./episode-item.component.css']
})
export class EpisodeItemComponent implements OnInit {

  @Input() episode : ShowEpisode;

  constructor() { }

  ngOnInit(): void {
  }

}
