import {Component, Input, OnInit} from '@angular/core';
import {ShowCast} from "../../../../model/show-cast";

@Component({
  selector: 'app-cast-item',
  templateUrl: './cast-item.component.html',
  styleUrls: ['./cast-item.component.css']
})
export class CastItemComponent implements OnInit {

  @Input() actor : ShowCast;

  constructor() { }

  ngOnInit(): void {
  }

}
