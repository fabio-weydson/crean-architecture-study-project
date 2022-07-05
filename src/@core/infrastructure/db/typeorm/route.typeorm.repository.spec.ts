import {Route} from "../../../domain/route.entity";
import {RouteTypeOrmRepository} from "./route.typeorm.repository";
import {RouteSchema} from "./route.schema";
import {DataSource} from "typeorm";
import {RouteProps} from "../../../types/routes.type";

describe('RouteTypeormRepository', () => {
    it('should insert a new item', async () => {
        const routeDataSource = new DataSource({
            type: 'sqlite',
            database: ':memory:',
            entities: [RouteSchema],
            synchronize: true,
            //logging: true
        });
        await routeDataSource.initialize();
        const ormRepo = routeDataSource.getRepository(Route);

        const repository = new RouteTypeOrmRepository(ormRepo);
        const routeMock: RouteProps = {
            title: 'Teste',
            origin: {
                lat: -23.564,
                lng: -46.654
            },
            destination: {
                lat: -23.564,
                lng: -46.654
            }
        }
        const route = Route.create(routeMock);
        await repository.insert(route);

        const routeFound = await ormRepo.findOneBy({id:route.id});
        expect(routeFound.id).toBeDefined();
        expect(routeFound.toJson()).toStrictEqual(route.toJson());
    });
})
