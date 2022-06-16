import {Route} from "../domain/route.entity";
import {CreateRouteInput, CreateRouteOutput} from '../types/routes.type';
import {RouteRepositoryInterface} from "../domain/route.repository";

//Not use Nest.JS services -> Use cases will be the services
//Nest.JS services use the use cases

export class CreateRouteUseCase {
    constructor(private routeRepository: RouteRepositoryInterface) {}

    async execute(input: CreateRouteInput): Promise<CreateRouteOutput> {
        const route = new Route(input);
        await this.routeRepository.insert(route);
        return route.toJson()
    }

}
