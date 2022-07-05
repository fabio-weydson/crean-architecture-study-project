import { RouteRepositoryInterface } from "old_code/src/domain/route.repository";
import {Repository} from "typeorm";
import {Route} from "../../../domain/route.entity";
import {RouteProps} from "../../../types/routes.type";

export class RouteTypeOrmRepository implements RouteRepositoryInterface {
  constructor(private ormRepo: Repository<Route>) {}

  async insert(route: RouteProps): Promise<void> {
      await this.ormRepo.save(route);
  }

  async findAll(): Promise<Route[]> {
      return await this.ormRepo.find();
  }

  async findById(id: string): Promise<Route | undefined> {
        return await this.ormRepo.findOneBy({id});
  }

}
