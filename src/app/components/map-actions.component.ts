import { Component, OnInit, Input } from '@angular/core';
import { Logger } from '../services/logger.service';
import { MarkerService } from '../services/markers.service';
import { Marker } from '../models/marker';

@Component({
    selector: 'map-actions',
    templateUrl: '../pages/map-actions.component.html',
	styleUrls: ['../pages/map-actions.component.css', '../../assets/materialize/css/materialize.min.css', '../shared.css'],
	providers: [MarkerService, Logger]
})
export class MapActionsComponent implements OnInit {

	constructor(private marker_service: MarkerService, private logger: Logger) {}

	ngOnInit() {

	}

	@Input() markers: Marker[];

	geo_navigator = navigator.geolocation;
	search_address: string;
	
	addCurrentLocation() {
		let new_marker = new Marker();
		new_marker.proximity = 1;
		new_marker.title = 'TEST';
		new_marker.address = 'TEST';
		new_marker.position = {};
		console.log(new_marker);
		
		if (this.geo_navigator) {
			
			this.geo_navigator.getCurrentPosition(function (position) {							
				new_marker.position.lat = position.coords.latitude;
				new_marker.position.lng = position.coords.longitude;

				this.markers.push(new_marker);
				// this.marker_service.addNewMarker(new_marker);
			});

		} else {			
			alert('No Geolocation Support.');
		}
	}
}