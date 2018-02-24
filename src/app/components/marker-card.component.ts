import { Component, OnInit, Input } from '@angular/core';
import { Marker } from '../models/marker';

@Component({
  selector: 'marker-card',
  templateUrl: '../pages/marker-card.component.html',
  styleUrls: ['../pages/marker-card.component.css', '../../assets/materialize/css/materialize.min.css', '../shared.css']
})
export class MarkerCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  @Input() marker: Marker;

}
