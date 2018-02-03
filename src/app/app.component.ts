import { Component } from '@angular/core';
import { log } from 'util';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../assets/materialize/css/materialize.min.css']
})

export class AppComponent {
  markerActiveIcon = 'assets/IconsLandFlatRasterMapMarkersIcons/png/centered/48x48/MapMarker_Marker__Red.png';
  markerInactiveIcon = 'assets/IconsLandFlatRasterMapMarkersIcons/png/centered/48x48/MapMarker_Marker__Grey.png';

  title = 'Proximity Reminder';  
  milesToMeters = 1609.34;
  map_options = {
    "zoom": 12,
    "center_coordinates": {
      "lat": 43.0730520,
      "lng": -89.4012300
    }
  };
  
  lastOpenedInfoWindowIndex = -1;
  showMultipleInfoWindows = true;

  markers = [{
    "showInfoWindow": false,
    "name": "Downtown",    
    "address": "123 Main Street",
    "marker_coordinates": {
      "lat": 43.0730520,
      "lng": -89.4012300
    },
    "active": true,
    "markerIcon": this.markerActiveIcon,
    "locked": true,
    "proximity": 1.000006,
    "reminders": [{
      "message": "One way streets are a thing while in this area. Typically \"every other\" parallel street changes",
      "active": true,
      "semantic_version": "2",
      "reoccurring": true
    }, {
      "message": "---- inactive test ----",
      "active": false,
      "semantic_version": "2",
      "reoccurring": true
    }],
    "historic_reminders": [{
      "reminder": {
        "message": "B__Message@Time",
        "semantic_version": "1.0"
      },
      "sent_on": "1/26/2018 10:21: PM",
      "recieved_on": "1/26/2018 10:26: PM"
    }, {
      "reminder": {
        "message": "B__AnotherMessage@Time... WHAT HAPPENS WITH A VERY LONG TEXT FIELD THING?",
        "semantic_version": "1.1"
      },
      "sent_on": "1/26/2018 10:21: PM",
      "recieved_on": "1/26/2018 10:26: PM"
    }]
  }, {
      "showInfoWindow": false,
      "name": "Home",
      "address": "123 Main Street",
      "marker_coordinates": {
        "lat": 43.011442,
        "lng": -89.457155
      },
      "active": true,
      "markerIcon": this.markerActiveIcon,
      "locked": false,
      "proximity": 1.000006,
      "reminders": [{
        "message": "Check alternative parking.",
        "active": false,
        "semantic_version": "2",
        "reoccurring": true
      }, {
        "message": "Remember to charge phone and set alarm.",
        "active": true,
        "semantic_version": "2",
        "reoccurring": true
      }],
      "historic_reminders": [{
        "reminder": {
          "message": "A__Message@Time",
          "semantic_version": "1.0"
        },
        "sent_on": "1/26/2018 10:21: PM",
        "recieved_on": "1/26/2018 10:26: PM"
      }, {
        "reminder": {
          "message": "A__AnotherMessage@Time",
          "semantic_version": "1.1"
        },
        "sent_on": "1/26/2018 10:21: PM",
        "recieved_on": "1/26/2018 10:26: PM"
      }]
    }    
  ]
   
  // ***** Input Events *****
  // ***** Input Events *****
  // Whenever a markers reminder has a status change then update the active value
  markerToggleActive(markerIndex: number) {    
    let activeNewVal = !this.markers[markerIndex].active;
    this.markers[markerIndex].active = activeNewVal;
    if(activeNewVal) {    
      this.markers[markerIndex].markerIcon = this.markerActiveIcon;
    } else {
      this.markers[markerIndex].markerIcon = this.markerInactiveIcon;      
    }
  }
  markerToggleLocked(markerIndex: number) {
    this.markers[markerIndex].locked = !this.markers[markerIndex].locked;
  }
  reminderToggleActive(markerIndex: number, reminderIndex: number) {
    this.markers[markerIndex].reminders[reminderIndex].active = !this.markers[markerIndex].reminders[reminderIndex].active;
  }

  // ***** Map Events *****
  // ***** Map Events *****

  // ***** Marker Events *****
  // ***** Marker Events *****  
  // Whenever a marker is clicked, check the global setting for showing multiple info windows.
  // If we shouldn't be showing many, then perform logic to hide the "last opened" info window.
  clickedMarker(label: string, markerIndex: number) {
    if (!this.showMultipleInfoWindows) {
      this.markers[markerIndex].showInfoWindow = true;
      if (this.lastOpenedInfoWindowIndex > -1 && this.lastOpenedInfoWindowIndex != markerIndex) {
        this.markers[this.lastOpenedInfoWindowIndex].showInfoWindow = false;
      } 
    }
    // This should always happen. (scenario that preference is changed)
    // TODO still a potential bug. Fix is to add logic on this binded field to collpase last opened upon X.
    this.lastOpenedInfoWindowIndex = markerIndex;       
  }  

  // Whenever you drag a marker around the map this listener gets called.
  // It keeps the marker coordinates sync'd with the actual interactions.  
  markerDragEnd(marker: marker, result: coords, markerIndex: number) {
    this.markers[markerIndex].marker_coordinates.lat = parseFloat(result.coords.lat.toFixed(6));
    this.markers[markerIndex].marker_coordinates.lng = parseFloat(result.coords.lng.toFixed(6));
  }  
  
  // ***** Circle Events *****
  // ***** Circle Events *****

  // This event will execute when the circle radius is modified
  // Since the circle is "tied" to the marker we are after changing the radius we want to update the "proximity" of the marker.
  cirlceRadiusChanged(marker: marker, radius: number, markerIndex: number) {    
    this.markers[markerIndex].proximity = parseFloat((radius / this.milesToMeters).toFixed(6));
  }
  
  circleCenterChanged(marker: marker, latlng: latlng, markerIndex: number) {
    this.markers[markerIndex].marker_coordinates.lat = parseFloat(latlng.lat.toFixed(6));
    this.markers[markerIndex].marker_coordinates.lng = parseFloat(latlng.lng.toFixed(6));
  }  
}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

interface latlng {
  lat: number;
  lng: number;
}

// just an interface for type safety.
interface coords {
  coords: {
    lat: number;
    lng: number;    
  }
}
