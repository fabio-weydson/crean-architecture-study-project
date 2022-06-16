import {Route} from "./route.entity";

export interface RouteRepositoryInterface {
    insert(route: Route): Promise<void>;
    findAll(): Promise<Route[]>;
    findById(id: string): Promise<Route | undefined>;
}

// Dependency Inversion Principle
// The dependency inversion principle (DIP) is a software design principle
// which states that the high-level modules should not depend on the low-level modules.
// Both should depend on abstractions.
