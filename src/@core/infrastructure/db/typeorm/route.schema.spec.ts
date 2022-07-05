import {RouteSchema} from "./route.schema";
import {DataSource} from "typeorm";
import {Route} from "../../../domain/route.entity";

describe('RouteSchema', () => {
    it('should insert a new item', async () => {
        const routeDataSource = new DataSource({
            type: 'sqlite',
            database: ':memory:',
            entities: [RouteSchema],
            synchronize: true,
            //logging: true
        });
        await routeDataSource.initialize();
        const route = Route.create({
            title: 'Teste',
            origin: {
                lat: -23.564,
                lng: -46.654
            },
            destination: {
                lat: -23.564,
                lng: -46.654
            }
        });
        const routeRepository = routeDataSource.getRepository(Route);
        await routeRepository.save(route);
        const result = await routeRepository.findOneBy({id:route.id});
        expect(result.id).toBeDefined();
    });

});
