import { Component } from '@angular/core';
import { log } from 'util';

import { MouseEvent } from '@agm/core';
import { Marker } from '../models/marker';
import { MarkerService } from '../services/markers.service';
import { MapOptions } from '@agm/core/services/google-maps-types';

@Component({
    selector: 'app-root',
    templateUrl: '../pages/map.component.html',
    styleUrls: ['../pages/map.component.css', '../../assets/materialize/css/materialize.min.css'],
    providers: [MarkerService]
})
export class MapComponent {
    map_options: MapOptions = {
        zoom: 12,
        center: {
            lat: 43.0730520,
            lng: -89.4012300,
        }        
    }

    markers: Marker[];
    selected_marker: Marker;

    constructor(private marker_service: MarkerService) {}

    ngOnInit() {
        this.markers = this.marker_service.getMarkers();
    }

    selectMarker(selected_marker: Marker) {
        this.selected_marker = selected_marker;
    }
}