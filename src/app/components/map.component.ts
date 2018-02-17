import { Component } from '@angular/core';
import { log } from 'util';

import { MouseEvent } from '@agm/core';

import { Marker } from '../models/marker';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css', '../assets/materialize/css/materialize.min.css']
})
export class MapComponent {
    markers: Marker[];
}