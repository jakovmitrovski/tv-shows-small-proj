import {Component, Input, OnInit} from '@angular/core';
import {ShowCast} from "../../../model/show-cast";

@Component({
  selector: 'app-show-cast',
  templateUrl: './show-cast.component.html',
  styleUrls: ['./show-cast.component.css']
})
export class ShowCastComponent implements OnInit {

  @Input() cast : ShowCast[];

  constructor() { }

  ngOnInit(): void {
  }

}
