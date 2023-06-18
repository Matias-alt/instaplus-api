import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import PublicationEntity from './publication.entity';

@Injectable()
export class PublicationsService {
  constructor(
    @InjectRepository(PublicationEntity) private Publication: Repository<PublicationEntity>
  ) {}

  async findPublication(id: number) {    
    const publication = await this.Publication.findBy({ id: id });

    if (publication.length === 0) { return false; }

    return publication;
  }

  async createPublication(body: any) {
    const publication = this.Publication.create(body);

    const result = this.Publication.save(publication);

    return { ...result };
  }

  async updatePublication(body: any, id: number) {
    const publication = await this.Publication.findBy({ id: id });

    if (publication.length === 0) { return false; }

    this.Publication.merge(publication[0], body)
    const result = this.Publication.save(publication);

    return { ...result };
  }
}
