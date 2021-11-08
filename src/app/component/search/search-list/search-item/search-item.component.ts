import {Component, Input, OnInit} from '@angular/core';
import {ShowLessDetails} from "../../../../model/show-less-details";

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {

  @Input() show: ShowLessDetails;
  genres = "";

  ngOnInit(): void {
    if (this.show.genres) {
      let n = this.show.genres.length;
      for (let i = 0; i < n - 1; i++) this.genres = this.genres + this.show.genres[i] + " | ";
      this.genres = this.genres + this.show.genres[n - 1];
    }
  }

}
