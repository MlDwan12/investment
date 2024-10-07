// src/config/logger/logger.config.ts
import { LoggerModule } from 'nestjs-pino';
import * as pino from 'pino';
import * as path from 'path';
import * as fs from 'fs';
import * as pinoPretty from 'pino-pretty';

const logDir = path.join(__dirname, '../../../logs');

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logFileName = `app-${new Date().toISOString().split('T')[0]}.log`;
const logFilePath = path.join(logDir, logFileName);

export const loggerConfig = LoggerModule.forRoot({
  pinoHttp: {
    stream: pino.multistream([
      { stream: pino.destination(logFilePath) },
      { stream: pinoPretty({ colorize: true }) },
    ]),
  },
});
