import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import {CreateRouteUseCase} from "../@core/application/create-route.use-case";
import {ListAllRoutesUseCase} from "../@core/application/list-all-routes.use-case";
import {GetRouteByIdUseCase} from "../@core/application/get-route-by-id.use-case";

@Injectable()
export class RoutesService {
  constructor(
      private createUseCase: CreateRouteUseCase,
      private listAllUseCase: ListAllRoutesUseCase,
      private getRouteByIdUseCase: GetRouteByIdUseCase,
  ) {}

  create(createRouteDto: CreateRouteDto) {
    return this.createUseCase.execute(createRouteDto);
  }

  findAll() {
    return this.listAllUseCase.findAll();
  }

  findOne(id: string) {
    return this.getRouteByIdUseCase.findById(id);
  }

  update(id: number, updateRouteDto: UpdateRouteDto) {
    return `This action updates a #${id} route`;
  }

  remove(id: number) {
    return `This action removes a #${id} route`;
  }
}
