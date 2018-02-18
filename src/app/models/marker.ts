import { LatLngLiteral, LatLng } from "@agm/core";
import { Reminder } from "./reminder";
import { HistoricReminder } from "./historic-reminder";

export class Marker {

    id: number; // TODO
    proximity: number;

    title: string;
    address: string;
    icon: string;

    position: LatLng|LatLngLiteral

    active: boolean;
    locked: boolean;
    show_info_window: boolean;    

    reminders: Reminder[];
    historic_reminders: HistoricReminder[];

    constructor() {

    }
}