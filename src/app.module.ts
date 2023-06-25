import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PublicationsModule } from './publications/publications.module';
import DatabaseModule from './database/database.module';

import { ServeStaticModule } from '@nestjs/serve-static/dist/serve-static.module';
import { join, resolve } from 'path';

@Module({
  imports: [DatabaseModule, UsersModule, PublicationsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '../public'),
      serveRoot: '/public/',
    })
    ,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
