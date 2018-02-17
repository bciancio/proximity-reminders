import { LatLngLiteral, LatLng } from "@agm/core";

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

    constructor() {

    }
}