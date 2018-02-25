import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Marker } from '../models/marker';

@Component({
	selector: 'marker-card',
	templateUrl: '../pages/marker-card.component.html',
	styleUrls: ['../pages/marker-card.component.css', '../../assets/materialize/css/materialize.min.css', '../shared.css']
})
export class MarkerCardComponent implements OnInit {

	constructor() {}

	ngOnInit() {

	}

	@Input() marker: Marker;
	@Output() onViewMarkerDetailsOverlay = new EventEmitter <Marker> ();

	show_details_overlay_icon: boolean = true;

	markerViewDetails() {
		this.marker.show_details_overlay = !this.marker.show_details_overlay;
		this.onViewMarkerDetailsOverlay.emit(this.marker);
	}
}
