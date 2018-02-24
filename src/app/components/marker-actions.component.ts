import { Component, OnInit, Input } from '@angular/core';
import { Marker } from '../models/marker';

@Component({
	selector: 'marker-actions',
	templateUrl: '../pages/marker-actions.component.html',
	styleUrls: ['../pages/marker-actions.component.css', '../../assets/materialize/css/materialize.min.css', '../shared.css']  
})
export class MarkerActionsComponent implements OnInit {

	constructor() { }

	ngOnInit() {

	}

	@Input() marker: Marker;

	show_view_page_icon = true;

   // ***** Input Events *****
    // ***** Input Events *****
    // Whenever a markers reminder has a status change then update the active value
	markerToggleActive(marker_index: number) {        
		let new_active_value = !this.marker.active;
		this.marker.active = new_active_value;
		if (new_active_value) {
			let icon = this.marker.icon_active;
			this.marker.icon_current = icon; 
		} else {
			let icon = 'assets/IconsLandFlatRasterMapMarkersIcons/png/centered/48x48/MapMarker_Marker__Grey.png';
			this.marker.icon_current = icon; 
		}               
	}
	markerToggleLocked(marker_index: number) {
		this.marker.locked = !this.marker.locked;
	}
	reminderToggleActive(marker_index: number, reminder_index: number) {
		let new_active_value = !this.marker.reminders[reminder_index].active;
		this.marker.reminders[reminder_index].active = new_active_value // TODO
	}
}
