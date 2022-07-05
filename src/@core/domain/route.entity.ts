import {CreateRouteOutput, LatLong, RouteProps} from "../types/routes.type";
import { v4 as uuidv4 } from 'uuid';


export class Route {
    //Initialize the props
    public readonly id: string;
    public props: Required<RouteProps>;
    //Private constructor to create a new route
    private constructor(props: RouteProps, id?: string) {

        if(!props){
            //@ts-expect-error used for ORM
            this.props = {};
            return;
        }
        this.id = id || uuidv4(),
        this.props = {
            ...props,
            distance: props.distance || 0,
            points: props.points || [],
        }

    }
    //New rotes can only be created by this method (instead of constructor)
    static create(props: RouteProps, id?: string) {
        return new Route(props, id);
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

    get distance() {
        return this.props.distance;
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
    private set points(value: LatLong[]) {
        this.props.points = value;
    }
    private set distance(value: number) {
        this.props.distance = value;
    }

    public toJson(): CreateRouteOutput {
        return {
            id: this.id,
            ...this.props
        };
    }

}
