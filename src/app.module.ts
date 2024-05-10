import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import {Mensaje} from './entidades/mensaje/mensaje.entity';
import { MensajesService } from './mensajes/mensajes.service';
import { MensajesController } from './mensajes/mensajes.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nest',
      password: '123456789',
      database: 'nest',
      entities: [Mensaje],
      synchronize: true,
    }),

  ],
  controllers: [AppController, MensajesController],
  providers: [AppService, MensajesService],
})
export class AppModule {}
