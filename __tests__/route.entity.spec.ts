import {Route} from "../src/domain/route.entity";
import {RouteProps} from "../src/types/routes.type";

describe('Route', () => {
    it('should be defined', () => {
        expect(Route).toBeDefined();
    });
    it('should generate empty points', () => {
        const mockRoute: RouteProps = {
            title: 'Rota 1',
            origin: {
                lat: -23.5489,
                lng: -46.6388
            },
            destination: {
                lat: -23.5489,
                lng: -46.6388
            }
        };
        const route = new Route(mockRoute);
        expect(route.id).toBeDefined();
        expect(route.points).toHaveLength(0);
    })
    it('should update the title', () => {
        const mockRoute: RouteProps = {
            title: 'Rota 1',
            origin: { lat: -23.5489, lng: -46.6388},
            destination: { lat: -23.5489, lng: -46.6388},
        };

        const route = new Route(mockRoute);
        route.updateTitle('Rota 2');

        expect(route.title).toBe('Rota 2');
    })
})
