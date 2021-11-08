import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  @Input() shows;

  constructor() { }

  ngOnInit(): void {
  }

}
