import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigAsync } from './common/configs/typeorm.config';
import { UsersModule } from './modules/users/users.module';
import { EventsModule } from './modules/events/events.module';
import { LocationsModule } from './modules/locations/locations.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    UsersModule,
    EventsModule,
    LocationsModule,
  ],
})
export class AppModule {}
