import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix('api') 
  await app.listen(4200);
  console.log('http app is listening on port 4200')



  const microserviceApp = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 8877,
      },
    }
  )
  await microserviceApp.listen();
  console.log('microservice  app is listening on port 8877')
}
bootstrap();
