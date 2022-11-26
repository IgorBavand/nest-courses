import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //esta linha serve para utilizar validações nos dto. (para fazer validações instalar):
  //npm i class-validator class-transformer
  app.useGlobalPipes(new ValidationPipe({
    //pega so os campos que existem no dto
    whitelist: true,

    //nao deixa enviar dados q n tem no dto, retorna erro
    forbidNonWhitelisted: true,

    //tipa os dados q chegam na requisicao para o dto
    transform: true
  }));
  await app.listen(3000);
}
bootstrap();
