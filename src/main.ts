import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //User class validation to validate the request data before sending it to the database
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
