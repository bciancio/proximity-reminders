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

    // ***** Input Events *****
    // ***** Input Events *****
    // Whenever a markers reminder has a status change then update the active value
    markerToggleActive(marker_index: number) {        
        let new_active_value = !this.selected_marker.active;
        this.selected_marker.active = new_active_value;
        if (new_active_value) {
            let icon = this.selected_marker.icon_active;
            this.selected_marker.icon_current = icon; 
        } else {
            let icon = 'assets/IconsLandFlatRasterMapMarkersIcons/png/centered/48x48/MapMarker_Marker__Grey.png';
            this.selected_marker.icon_current = icon; 
        }               
    }
    markerToggleLocked(marker_index: number) {
        this.selected_marker.locked = !this.selected_marker.locked;
    }
    reminderToggleActive(marker_index: number, reminder_index: number) {
        let new_active_value = !this.selected_marker.reminders[reminder_index].active;
        this.selected_marker.reminders[reminder_index].active = new_active_value // TODO
    }
}