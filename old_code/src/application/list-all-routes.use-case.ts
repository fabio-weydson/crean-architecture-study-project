import {RouteRepositoryInterface} from "../domain/route.repository";
import {CreateRouteOutput} from "../types/routes.type";

export class ListAllRoutesUseCase {
    constructor(private routeRepository: RouteRepositoryInterface) {

    }
    async findAll(): Promise<CreateRouteOutput[]> {
        const routes = await this.routeRepository.findAll();
        return routes;
    }
}
