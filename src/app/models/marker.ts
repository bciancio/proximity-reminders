import { LatLngLiteral, LatLng } from "@agm/core";
import { Reminder } from "./reminder";
import { HistoricReminder } from "./historic-reminder";

export class Marker {

    id: number; // TODO
    proximity: number;

    title: string;
    address: string;
    icon_current: string;
    icon_active: string;

    position: LatLng|LatLngLiteral

    active: boolean;
    locked: boolean;
    show_info_window: boolean;    
    show_details_overlay: boolean;  

    reminders: Reminder[];
    historic_reminders: HistoricReminder[];

    constructor() {
        this.active = true;
        this.locked = false;
        this.show_info_window = false;
        this.show_details_overlay = false;
        this.historic_reminders = [];
        this.icon_current = 'assets/IconsLandFlatRasterMapMarkersIcons/png/centered/48x48/MapMarker_Marker__Red.png';
        this.icon_active = 'assets/IconsLandFlatRasterMapMarkersIcons/png/centered/48x48/MapMarker_Marker__Red.png';
    }
}