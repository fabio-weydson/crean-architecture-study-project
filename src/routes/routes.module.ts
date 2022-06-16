import { Module } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import {RouteInMemoryRepository} from "../@core/infrastructure/route-in-memory.repository";
import {CreateRouteUseCase} from "../@core/application/create-route.use-case";
import {RouteRepositoryInterface} from "../@core/domain/route.repository";
import {ListAllRoutesUseCase} from "../@core/application/list-all-routes.use-case";
import {GetRouteByIdUseCase} from "../@core/application/get-route-by-id.use-case";

@Module({
  controllers: [RoutesController],
  providers: [
      RoutesService,
      //Open/Closed Principle (injecting existing services without changing it)
      {
        provide: RouteInMemoryRepository,
        useClass: RouteInMemoryRepository,
      },
      {
        provide: CreateRouteUseCase,
        useFactory: (routeRepo: RouteRepositoryInterface) => {
          return new CreateRouteUseCase(routeRepo);
        },
        inject: [RouteInMemoryRepository],
      },
      {
        provide: ListAllRoutesUseCase,
        useFactory: (routeRepo: RouteRepositoryInterface) => {
            return new ListAllRoutesUseCase(routeRepo);
        },
        inject: [RouteInMemoryRepository],
      },
      {
        provide: GetRouteByIdUseCase,
        useFactory: (routeRepo: RouteRepositoryInterface) => {
            return new GetRouteByIdUseCase(routeRepo);
        },
        inject: [RouteInMemoryRepository],
      }
    ]
})
export class RoutesModule {}
