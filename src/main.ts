import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: false }));

  app.enableCors({
    origin: 'http://localhost:3001', // Quais endereço de ip podem acessar a API
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Quais métodos podem ser utilizados
    allowedHeaders: 'Content-Type, Accept', // Quais headers podem ser enviados
  });

  //app.enableCors(); // Permite que qualquer endereço de ip acesse a API
  const port = app.get(ConfigService).get('PORT') || 3000;
  await app.listen(port);
}
bootstrap();
// http://localhost:3000 -> Back-end
// http://localhost:3001 -> Front-end
