import {CreateRouteOutput, LatLong, RouteProps} from "../types/routes.type";
import { v4 as uuidv4 } from 'uuid';


export class Route {
    //Initialize the props
    public readonly id: string;
    public props: Required<RouteProps>;
    constructor(props: RouteProps, id?: string) {
        this.id = id || uuidv4();
        this.props = {
            ...props,
            distance: props.distance || 0,
            points: props.points || [],
        }
    }

    //Regras de negocio

    updateTitle(value: string) {
        //validacoes
        //modificacoes
        this.title = value;
    }

    updatePositions(startPosition: LatLong, endPosition: LatLong) {
        this.origin = startPosition;
        this.destination = endPosition;
    }

    //getters public
    get title() {
        return this.props.title;
    }
    get origin() {
        return this.props.origin;
    }
    get destination() {
        return this.props.destination;
    }

    get points() {
        return this.props.points;
    }

    //setters privates
    private set title(value: string) {
        this.props.title = value;
    }
    private set origin(value: LatLong) {
        this.props.origin = value;
    }
    private set destination(value: LatLong) {
        this.props.destination = value;
    }

    public toJson(): CreateRouteOutput {
        return {
            id: this.id,
            ...this.props
        };
    }

}
