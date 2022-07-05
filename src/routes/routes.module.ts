import { Module } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import {RouteInMemoryRepository} from "../@core/infrastructure/db/in-memory/route-in-memory.repository";
import {CreateRouteUseCase} from "../@core/application/create-route.use-case";
import {RouteRepositoryInterface} from "../@core/domain/route.repository";
import {ListAllRoutesUseCase} from "../@core/application/list-all-routes.use-case";
import {GetRouteByIdUseCase} from "../@core/application/get-route-by-id.use-case";
import {TypeOrmModule, getDataSourceToken} from "@nestjs/typeorm";
import {RouteSchema} from "../@core/infrastructure/db/typeorm/route.schema";
import {RouteTypeOrmRepository} from "../@core/infrastructure/db/typeorm/route.typeorm.repository";
import {DataSource} from "typeorm";
import {Route} from "../@core/domain/route.entity";

@Module({
    imports: [TypeOrmModule.forFeature([RouteSchema])],
    controllers: [RoutesController],
    providers: [
      RoutesService,
      {
        provide: RouteTypeOrmRepository,
        useFactory: async (dataSource: DataSource) => {
            return new RouteTypeOrmRepository(dataSource.getRepository(Route));
        },
        inject: [getDataSourceToken()]
      },
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
        inject: [RouteTypeOrmRepository],
      },
      {
        provide: ListAllRoutesUseCase,
        useFactory: (routeRepo: RouteRepositoryInterface) => {
            return new ListAllRoutesUseCase(routeRepo);
        },
        inject: [RouteTypeOrmRepository],
      },
      {
        provide: GetRouteByIdUseCase,
        useFactory: (routeRepo: RouteRepositoryInterface) => {
            return new GetRouteByIdUseCase(routeRepo);
        },
        inject: [RouteTypeOrmRepository],
      }
    ]
})
export class RoutesModule {}
