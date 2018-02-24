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
        let marker1: Marker = new Marker();
        marker1.id = 1;
        marker1.proximity = 1.000006;

        marker1.title = 'Name - 1';
        marker1.address = 'Address - 1';
        marker1.icon_current = 'assets/IconsLandFlatRasterMapMarkersIcons/png/centered/48x48/MapMarker_Marker__Red.png';
        marker1.icon_active = 'assets/IconsLandFlatRasterMapMarkersIcons/png/centered/48x48/MapMarker_Marker__Red.png';

        marker1.position = {
            lat: 43.0730520,
            lng: -89.4012300
        };

        marker1.active = true;
        marker1.locked = true;    
        marker1.show_info_window = false;    
        marker1.reminders = [
            {
                id: 1,
                message: "What a nice message!",            
                active: true,
                reoccuring: false
            },{
                id: 2,
                message: "What a mean message!",            
                active: false,
                reoccuring: true
            }, 
        ];

        marker1.historic_reminders = [
            {
                id: 1,
                message: "Sent Message 1",            
                sent_on: '02/17/18',
                recieved_on: '02/17/18'
            },{
                id: 2,
                message: "Sent Message 2",            
                sent_on: '02/17/18',
                recieved_on: '02/17/18'
            }, 
        ]


        let marker2: Marker = new Marker();
        marker2.id = 1;
        marker2.proximity = 1.000006;

        marker2.title = 'Name - 2';
        marker2.address = 'Address - 2';
        marker2.icon_current = 'assets/IconsLandFlatRasterMapMarkersIcons/png/centered/48x48/MapMarker_Marker__Blue.png';
        marker2.icon_active = 'assets/IconsLandFlatRasterMapMarkersIcons/png/centered/48x48/MapMarker_Marker__Blue.png';

        marker2.position = {
            lat: 43.06477531,
            lng: -89.4516984
        };

        marker2.active = true;
        marker2.locked = false;    
        marker2.show_info_window = false;    
        marker2.reminders = [
            {
                id: 3,
                message: "Sir Whiskers",            
                active: true,
                reoccuring: false
            },{
                id: 4,
                message: "El Gato",            
                active: false,
                reoccuring: true
            }, 
        ];

        marker2.historic_reminders = [
            {
                id: 3,
                message: "Kitty",            
                sent_on: '02/17/18',
                recieved_on: '02/17/18'
            },{
                id: 4,
                message: "Sharp Claws",            
                sent_on: '02/17/18',
                recieved_on: '02/17/18'
            }, 
        ]

        let marker3: Marker = new Marker();
        marker3.id = 1;
        marker3.proximity = 1.000006;

        marker3.title = 'Name - 3';
        marker3.address = 'Address - 3';
        marker3.icon_current = 'assets/IconsLandFlatRasterMapMarkersIcons/png/centered/48x48/MapMarker_Marker__Green.png';
        marker3.icon_active = 'assets/IconsLandFlatRasterMapMarkersIcons/png/centered/48x48/MapMarker_Marker__Green.png';

        marker3.position = {
            lat: 43.03040258,
            lng: -89.3796006
        };

        marker3.active = true;
        marker3.locked = false;    
        marker3.show_info_window = false;    
        marker3.reminders = [
            {
                id: 4,
                message: "Sir Whiskers",            
                active: true,
                reoccuring: false
            },{
                id: 5,
                message: "El Gato",            
                active: false,
                reoccuring: true
            }, 
        ];

        marker3.historic_reminders = [
            {
                id: 4,
                message: "Longshanks",            
                sent_on: '02/17/18',
                recieved_on: '02/17/18'
            },{
                id: 5,
                message: "Barthlomeow",            
                sent_on: '02/17/18',
                recieved_on: '02/17/18'
            }, 
        ]

        let marker4: Marker = new Marker();
        marker4.id = 1;
        marker4.proximity = 2.562436;

        marker4.title = 'Name - 4';
        marker4.address = 'Address - 4';
        marker4.icon_current = 'assets/IconsLandFlatRasterMapMarkersIcons/png/centered/48x48/MapMarker_Marker__Azure.png';
        marker4.icon_active = 'assets/IconsLandFlatRasterMapMarkersIcons/png/centered/48x48/MapMarker_Marker__Azure.png';

        marker4.position = {
            lat: 43.03391600,
            lng: -89.4232025
        };

        marker4.active = true;
        marker4.locked = true;    
        marker4.show_info_window = false;    
        marker4.reminders = [
            {
                id: 4,
                message: "Clawdia",            
                active: true,
                reoccuring: false
            },{
                id: 5,
                message: "Jennifurr",            
                active: false,
                reoccuring: true
            }, 
        ];

        marker4.historic_reminders = [
            {
                id: 5,
                message: "Katy Purry",            
                sent_on: '02/17/18',
                recieved_on: '02/17/18'
            },{
                id: 6,
                message: "Tabbytha",            
                sent_on: '02/17/18',
                recieved_on: '02/17/18'
            }, 
        ]

        this.markers.push(marker1);
        this.markers.push(marker2);
        this.markers.push(marker3);
        this.markers.push(marker4);
    }

}
