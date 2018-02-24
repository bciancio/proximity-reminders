import { Component, Input } from '@angular/core';

import { Marker } from '../models/marker';
import { Logger } from '../services/logger.service';



@Component({
    selector: 'marker-detail',
    templateUrl: '../pages/marker-detail.component.html',
    styleUrls: ['../pages/marker-detail.component.css', '../../assets/materialize/css/materialize.min.css', '../shared.css'],
    providers: [Logger]
})
export class MarkerDetailComponent {
    
    constructor(private logger: Logger) {}

    @Input() selected_marker: Marker;
   
}