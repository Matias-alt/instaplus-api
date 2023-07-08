import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { File } from 'multer';
import { createWriteStream } from 'fs';

import PublicationEntity from './publication.entity';

@Injectable()
export class PublicationsService {
  constructor(
    @InjectRepository(PublicationEntity) private Publication: Repository<PublicationEntity>
  ) {}

  async deletePublication(id: number) {    
    const result = this.Publication.delete(id);

    return { ...result };
  }

  async findPublications() {    
    const publications = await this.Publication.find();

    if (publications.length === 0) { return false; }

    return publications;
  }

  async createPublication(file: File, title: string, description: string, publicationDate: string) {
    const { originalname, buffer } = file;

    const filePath = `public/${Math.random().toString(36).substring(2, 10)}${originalname}`;

    const publicationToSave = {
      title: title,
      description: description,
      publicationDate: publicationDate,
      images: [`http://localhost:3000/${filePath}`]
    }
    const publication = this.Publication.create(publicationToSave);

    const result = this.Publication.save(publication);

    if (result) {
      const writeStream = createWriteStream(filePath);
      writeStream.write(buffer);
      writeStream.end();
      
      return { ...result };
    } else {
      return false;
    }
  }

  async updatePublication(body: any) {
    const publication = await this.Publication.findBy({ id: body.id });

    if (publication.length === 0) { return false; }

    this.Publication.merge(publication[0], body)
    const result = this.Publication.save(publication);

    return { ...result };
  }

  async findPublication(id: number) {
    const publication = await this.Publication.findBy({ id: id });

    if (publication.length === 0) { return false; }

    return publication;
  }
}
