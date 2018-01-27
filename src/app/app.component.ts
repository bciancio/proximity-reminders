import { Component } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
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
  showMultipleInfoWindows = false;

  pins = [{
    "showInfoWindow": false,
    "name": "Downtown",    
    "address": "123 Main Street",
    "pin_coordinates": {
      "lat": 43.0730520,
      "lng": -89.4012300
    },
    "active": true,
    "locked": true,
    "proximity": 1.000006,
    "pinColor": "#0080FF||#4C516D",
    "reminders": [{
      "message": "One way streets is a thing.",
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
        "message": "B__AnotherMessage@Time",
        "semantic_version": "1.1"
      },
      "sent_on": "1/26/2018 10:21: PM",
      "recieved_on": "1/26/2018 10:26: PM"
    }]
  }, {
      "showInfoWindow": false,
      "name": "Home",
      "address": "123 Main Street",
      "pin_coordinates": {
        "lat": 43.011442,
        "lng": -89.457155
      },
      "active": true,
      "locked": false,
      "proximity": 1.000006,
      "pinColor": "#0080FF||#4C516D",
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
  
  // ***** Map Events *****
  // ***** Map Events *****

  // ***** Pin Events *****
  // ***** Pin Events *****
  
  // Whenever a pin is clicked, check the global setting for showing multiple info windows.
  // If we shouldn't be showing many, then perform logic to hide the "last opened" info window.
  clickedPin(label: string, index: number) {
    if (!this.showMultipleInfoWindows) {
      this.pins[index].showInfoWindow = true;
      if (this.lastOpenedInfoWindowIndex > -1 && this.lastOpenedInfoWindowIndex != index) {
        this.pins[this.lastOpenedInfoWindowIndex].showInfoWindow = false;
      } 
    }
    // This should always happen. (scenario that preference is changed)
    // TODO still a potential bug. Fix is to add logic on this binded field to collpase last opened upon X.
    this.lastOpenedInfoWindowIndex = index;       
  }  

  // Whenever you drag a pin around the map this listener gets called.
  // It keeps the pin coordinates sync'd with the actual interactions.  
  pinDragEnd(pin: pin, result: coords, index: number) {
    this.pins[index].pin_coordinates.lat = parseFloat(result.coords.lat.toFixed(6));
    this.pins[index].pin_coordinates.lng = parseFloat(result.coords.lng.toFixed(6));
  }  
  
  // ***** Circle Events *****
  // ***** Circle Events *****

  // This event will execute when the circle radius is modified
  // Since the circle is "tied" to the pin we are after changing the radius we want to update the "proximity" of the pin.
  cirlceRadiusChanged(pin: pin, radius: number, index: number) {    
    this.pins[index].proximity = parseFloat((radius / this.milesToMeters).toFixed(6));
  }
  
}

// just an interface for type safety.
interface pin {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

// just an interface for type safety.
interface coords {
  coords: {
    lat: number;
    lng: number;    
  }
}
