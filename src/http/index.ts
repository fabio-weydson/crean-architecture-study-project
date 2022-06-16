import express, {Express,Request,Response} from 'express';
import {CreateRouteUseCase} from "../application/create-route.use-case";
import {RouteInMemoryRepository} from "../infrastructure/route-in-memory.repository";
import {ListAllRoutesUseCase} from "../application/list-all-routes.use-case";
import {GetRouteByIdUseCase} from "../application/get-route-by-id.use-case";

const app: Express = express();

//Convert the request and response to the type of the use case
app.use(express.json());

const port = process.env.PORT || 3000;
const routeRepository = new RouteInMemoryRepository();

app.post('/routes', async(req:Request, res:Response) => {
    const createUseCase = new CreateRouteUseCase(routeRepository);
    const output = await createUseCase.execute(req.body);
    res.status(201).json(output);
});

app.get('/routes', async (req:Request, res:Response) => {
    const listUseCase = new ListAllRoutesUseCase(routeRepository);
    const routes = await listUseCase.findAll();
    res.status(200).json(routes);
})

app.get('/route/:id', async (req:Request, res:Response) => {
    const getRouteUseCase = new GetRouteByIdUseCase(routeRepository);
    const route = await getRouteUseCase.findById(req.body.id);
    if(!route) {
        res.status(404).json({message: 'Route not found'});
    }
    res.status(200).json(route);
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})

//TODO: Validate the input
//Validate complex on entity level
//Validate simple on request level
//Email, Storage, DB, Adapters etc on Infrastructure level
//TODO: Dependencies Container
//Factories -> Inject the dependencies (Design Pattern)
//TODO: DTO for the input and output
//TODO: Store data in a database
