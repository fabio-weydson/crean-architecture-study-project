import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { RoutesService } from "./routes.service";

@Controller('routes')
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}

  @Post()
  async create(@Body() createRouteDto: CreateRouteDto) {
    return await this.routesService.create(createRouteDto);
  }

  @Get()
  async findAll() {
    const res = await this.routesService.findAll();
    if(!res.length) {
        return {
            message: 'No routes found'
        }
    }
    return res
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.routesService.findOne(id);
  }

  /*
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRouteDto: UpdateRouteDto) {
    return this.routesService.update(+id, updateRouteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.routesService.remove(+id);
  }
  */

}
