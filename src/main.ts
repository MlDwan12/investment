import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000;
  const logger = app.get(Logger);

  app.useLogger(app.get(Logger));

  await app.listen(port, () => {
    logger.log(`Applicanion start on ${port} port`);
  });
}

bootstrap();
