import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PublicationsController } from './publications.controller';
import { PublicationsService } from './publications.service';
import  PublicationEntity from './publication.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([PublicationEntity])
  ],
  controllers: [PublicationsController],
  providers: [PublicationsService]
})
export class PublicationsModule {}
