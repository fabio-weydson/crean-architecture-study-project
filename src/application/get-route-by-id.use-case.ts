import {RouteRepositoryInterface} from "../domain/route.repository";
import {Route} from "../domain/route.entity";

export class GetRouteByIdUseCase {
    constructor(private routeRepository: RouteRepositoryInterface) {

    }
    async findById(id: string): Promise<Route | undefined> {
        const route = await this.routeRepository.findById(id);
        return route;
    }
}
