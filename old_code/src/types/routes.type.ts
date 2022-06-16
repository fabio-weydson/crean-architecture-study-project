export type LatLong = {
    lat: number;
    lng: number;
}

export type RouteProps = {
    title: string;
    origin: LatLong;
    destination: LatLong;
    distance?: number;
    points?: LatLong[];
}

export type CreateRouteInput = {
    id?: string;
    title: string;
    origin: LatLong;
    destination: LatLong;
    distance?: number;
    points?: LatLong[];
}

export type CreateRouteOutput = {
    id: string;
    title: string;
    origin: LatLong;
    destination: LatLong;
    distance?: number;
    points?: LatLong[];
}
