import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoutesModule } from './routes/routes.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {RouteSchema} from "./@core/infrastructure/db/typeorm/route.schema";

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'sqlite',
        database: ':memory:',
        synchronize:true,
        logging: true,
        entities: [RouteSchema],
      }),
    RoutesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
