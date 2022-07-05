import {RouteRepositoryInterface} from "../../../domain/route.repository";
import {Route} from "../../../domain/route.entity";


export class RouteInMemoryRepository implements RouteRepositoryInterface {
    routes: Route[] = [];

    async insert(route: Route): Promise<void> {
        this.routes.push(route);
    }

    async findAll(): Promise<Route[]> {
        return this.routes;
    }

    async findById(id: string): Promise<Route | undefined> {
        const route = this.routes.find(route => route.id === id);
        return route;
    }
}
//Active Record - Registro Ativo (Squelize, Prisma, Eloquent, Django ORM)
//Data Mapper - Mapeador de dados
