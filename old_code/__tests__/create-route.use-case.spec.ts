import {CreateRouteUseCase} from "../src/application/create-route.use-case";
import {CreateRouteInput, RouteProps} from "../src/types/routes.type";
import {RouteInMemoryRepository} from "../src/infrastructure/route-in-memory.repository";
import { v4 as uuidv4 } from 'uuid';

describe('CreateRouteUseCase', () => {
    it('should be defined', () => {
        expect(CreateRouteUseCase).toBeDefined();
    });
    it('should create a route', async () => {
        const mockRoute: CreateRouteInput = {
            id: uuidv4(),
            title: 'Rota 1',
            origin: { lat: -23.5489, lng: -46.6388 },
            destination: { lat: -23.5489, lng: -46.6388 },
            distance: 0,
        };
        const routeRepo = new RouteInMemoryRepository();
        const createRouteUseCase = new CreateRouteUseCase(routeRepo);
        const output = await createRouteUseCase.execute(mockRoute);
        expect(output.id).toBeDefined();
        expect(output.points).toHaveLength(0);
        expect(output).toMatchObject({
            ...mockRoute,
            points: [],
        });
    })
})
