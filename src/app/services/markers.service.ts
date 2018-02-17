import { Injectable } from '@angular/core';
import { Marker } from '../models/marker';
import { Logger } from './logger.service';

@Injectable()
export class MarkerService {  
    private markers: Marker[];

    constructor(private logger: Logger) {

    }

    getMarkers() {
        // TODO database call

        return this.markers;
    }
}
