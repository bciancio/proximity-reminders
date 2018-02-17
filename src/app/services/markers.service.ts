import { Injectable } from '@angular/core';
import { Marker } from '../models/marker';
import { Logger } from './logger.service';

@Injectable()
export class MarkerService {  
    private markers: Marker[];

    constructor(private logger: Logger) {

    }

    getMarkers() {
              
        this.markers = [];

        this.buildMockData();   // TODO database call

        this.logger.log(this.markers);
        
        return this.markers;
    }

    buildMockData() {
        let marker: Marker = new Marker();
        marker.id = 1;
        marker.proximity = 1.000006;

        marker.title = 'Name - 1';
        marker.address = 'Address - 1';
        marker.icon = 'assets/IconsLandFlatRasterMapMarkersIcons/png/centered/48x48/MapMarker_Marker__Red.png';

        marker.position = {
            lat: 43.0730520,
            lng: -89.4012300
        };

        marker.active = true;
        marker.locked = true;    
        marker.show_info_window = true;    


        this.markers.push(marker);
    }

}
