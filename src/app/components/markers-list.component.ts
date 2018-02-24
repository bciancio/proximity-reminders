import { Logger } from "../services/logger.service";
import { Marker } from "@agm/core/services/google-maps-types";
import { Component, Input } from '@angular/core';

@Component({
    selector: 'markers-list',
    templateUrl: '../pages/markers-list.component.html',
    styleUrls: ['../pages/markers-list.component.css', '../../assets/materialize/css/materialize.min.css', '../shared.css'],
    providers: [Logger]
})
export class MarkersList {
    
    constructor(private logger: Logger) {}
    
    // Grab all the markers from the map
    @Input() markers: Marker[];
    
    // Grab the selected marker either: from the map or the list. 
    @Input() selected_marker: Marker;
}