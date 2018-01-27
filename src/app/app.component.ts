import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Proximity Reminder';  
  map_options = {
    "zoom": 10,
    "center_coordinates": {
      "lat": 43.0730520,
      "lng": -89.4012300
    }
  };
  
  pins = [{
    "pin": {
      "name": "Home",
      "address": "123 Main Street",
      "pin_coordinates": {
        "lat": 43.0730520,
        "lng": -89.4012300
      },
      "active": true,
      "pinColor": "#0080FF||#4C516D",
      "reminders": [{
        "mesage": "Check alternative parking.",
        "active": true,
        "semantic_version": "2",
        "proximity": 1.000006,
        "reoccurring": true
      }, {
          "mesage": "Remember to charge phone and set alarm.",
          "active": true,
          "semantic_version": "2",
          "proximity": 1.000006,
          "reoccurring": true
        }],
      "historic_reminders": [{
        "reminder": {
          "message": "Message@Time",
          "semantic_version": "1.0"
        },
        "sent_on": "1/26/2018 10:21: PM",
        "recieved_on": "1/26/2018 10:26: PM"
      }, {
          "reminder": {
            "message": "AnotherMessage@Time",
            "semantic_version": "1.1"
          },
          "sent_on": "1/26/2018 10:21: PM",
          "recieved_on": "1/26/2018 10:26: PM"
        }]
    }
  }]

}


// {
//   "Pin": {
//     "Name": "Home",
//       "Address": "123 Main Street",
//         "Coordinates": {
//       "Latitude": 90.000006,
//         "Longitude": 90.000006
//     },
//     "Active": true,
//       "pinColor": "#0080FF||#4C516D",
//         "History": [{
//           "Reminder": {
//             "Mesage": "Message@Time",
//             "Semantic Version": "1.0"
//           },
//           "Sent on": "1/26/2018 10:21: PM",
//           "Recieved on": "1/26/2018 10:26: PM"
//         }, {
//           "Reminder": {
//             "Mesage": "AnotherMessage@Time",
//             "Semantic Version": "1.1"
//           },
//           "Sent on": "1/26/2018 10:21: PM",
//           "Recieved on": "1/26/2018 10:26: PM"
//         }]
//   },
//   "Reminder": [{
//     "Mesage": "Check alternative parking.",
//     "Active": true,
//     "Semantic Version": "2"
//   }, {
//     "Mesage": "New Message Record starts @ version 1.0",
//     "Active": false,
//     "Semantic Version": "1.0"
//   }],
//     "Proximity": 1.000006,
//       "Reoccurring": true
// }
