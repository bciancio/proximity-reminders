import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Marker } from '../models/marker';
import { Logger } from '../services/logger.service';

@Component({
    selector: 'map-actions',
    templateUrl: '../pages/map-actions.component.html',
	styleUrls: ['../pages/map-actions.component.css', '../../assets/materialize/css/materialize.min.css', '../shared.css'],
	providers: [ Logger ]
})
export class MapActionsComponent implements OnInit {

	constructor(private logger: Logger) {}

	ngOnInit() {

	}

	@Output() onAddMarker = new EventEmitter<Marker>();
	
	geo_navigator = navigator.geolocation;
	
	
	search_address: string = "TEST";
	
	addCurrentLocation() {
		let new_marker = new Marker();
		new_marker.proximity = 1;
		new_marker.title = 'TEST';
		new_marker.address = 'TEST';
		new_marker.position= {lat: undefined,
							  lng: undefined
							};

		let actual_this = this;
		if (this.geo_navigator) {

			this.geo_navigator.getCurrentPosition(function (position) {							
				new_marker.position.lat = position.coords.latitude;
				new_marker.position.lng = position.coords.longitude;

				actual_this.onAddMarker.emit(new_marker);
			});

		} else {			
			actual_this.logger.log('No Geolocation Support.');			
		}
	}
}