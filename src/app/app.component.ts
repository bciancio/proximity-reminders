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
  
  pins = [{
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
        "active": true,
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


  clickedPin(label: string, index: number) {
    console.log(`clicked the pin: ${label || index}`)
  }

  cirlceRadiusChanged(pin: pin, radius: number, index: number) {    
    this.pins[index].proximity = radius / this.milesToMeters;
  }
  
  pinDragEnd(pin: pin, result: coords, index: number) {
    this.pins[index].pin_coordinates.lat = parseFloat(result.coords.lat.toFixed(6));
    this.pins[index].pin_coordinates.lng = parseFloat(result.coords.lng.toFixed(6));
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
