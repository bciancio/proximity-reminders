import { Component } from '@angular/core';

import { MouseEvent } from '@agm/core';
import { Marker } from '../models/marker';
import { MarkerService } from '../services/markers.service';
import { MapOptions, LatLng } from '@agm/core/services/google-maps-types';
import { Logger } from '../services/logger.service';

@Component({
    selector: 'app-root',
    templateUrl: '../pages/map.component.html',
    styleUrls: ['../pages/map.component.css', '../../assets/materialize/css/materialize.min.css', '../shared.css'],
    providers: [MarkerService, Logger]
})
export class MapComponent {
    
    constructor(private marker_service: MarkerService, private logger: Logger) {}
    
    miles_to_meters = 1609.34;

    map_options: MapOptions = {
        zoom: 12,
        center: {
            lat: 43.0730520,
            lng: -89.4012300,
        }        
    }

    markers: Marker[];
    selected_marker: Marker;

    ngOnInit() {
        this.markers = this.marker_service.getMarkers();        
    }

    // ***** Map Events *****
    // ***** Map Events *****

    // ***** Marker Events *****
    // ***** Marker Events ***** 
    displayMarkerDetailsOverlay(selected_marker: Marker) {
        this.selected_marker = selected_marker;
        this.logger.log('I am here');
    }
    // selectMarker(selected_marker: Marker) {
    //     this.selected_marker = selected_marker;
    //     this.logger.log(this.selected_marker);
    // }
    addNewMarker(new_marker: Marker) {
        this.markers.push(new_marker)        
        this.logger.log(new_marker);
    }

    // When a marker is clicked, change the "selected" marker.
    clickedMarker(label: string, marker_index: number) {
        // this.markers[marker_index].locked = false;
        // NOTE: Not sure that it makes sense to lock... this way tpye of thing.                
        this.selected_marker = this.markers[marker_index];
    }

    // Whenever you drag a marker around the map this listener gets called.
    // It keeps the marker coordinates sync'd with the actual interactions.  
    markerDragEnd(marker: Marker, result: coords, marker_index: number) {
        this.markers[marker_index].position.lat = result.coords.lat;
        this.markers[marker_index].position.lng = result.coords.lng;
    }

    // ***** Circle Events *****
    // ***** Circle Events *****

    // This event will execute when the circle radius is modified
    // Since the circle is "tied" to the marker we are after changing the radius we want to update the "proximity" of the marker.
    cirlceRadiusChanged(marker: Marker, radius: number, marker_index: number) {
        this.markers[marker_index].proximity = parseFloat((radius / this.miles_to_meters).toFixed(6));
    }

    circleCenterChanged(marker: Marker, latlng: LatLng, marker_index: number) {
        this.markers[marker_index].position.lat = latlng.lat;
        this.markers[marker_index].position.lng = latlng.lng;
    } 
}

interface coords {
    coords: {
        lat: number;
        lng: number;    
    }
}