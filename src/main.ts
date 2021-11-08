import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 3000;

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      disableErrorMessages:
        process.env.NODE_ENV === 'PRODUCTION' ? true : false,
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('Backend')
    .setDescription('REST API Documentation')
    .setVersion('0.0.1')
    .addTag('Admin')
    // .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/api/docs', app, document);
  await app.listen(PORT, () =>
    console.log(`Server started http://localhost:${PORT}/api/docs`),
  );
}

bootstrap();
