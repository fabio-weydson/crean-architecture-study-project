import {Route} from "../../../domain/route.entity";
import {EntitySchema} from 'typeorm';

export const RouteSchema = new EntitySchema<Route>({
    name: 'route',
    target: Route,
    columns: {
        id:{ type: 'uuid', primary: true },
        title: { type: 'varchar', nullable: false},
        origin: { type: 'simple-json' },
        distance: { type: 'float', nullable: true },
        destination:{type: 'simple-json'},
        points:{ type: 'simple-json', nullable: true }
    }
});
