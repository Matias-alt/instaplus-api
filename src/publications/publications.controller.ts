import { Controller, Get, Post, Put, Param, Body,  UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PublicationsService } from './publications.service';
import type { File } from 'multer';

@Controller('api/publications')
export class PublicationsController {
  constructor(
    private publicationsService: PublicationsService
  ) {}

  @Get('find')
  findAll() {
    return this.publicationsService.findPublications();
  }

  @Get('find/:id')
  find(@Param('id') id: number) {
    return this.publicationsService.findPublications();
  }

  @Post('create')
  create(@Body() body: any) {
    console.log(body);
    
    //return this.publicationsService.createPublication(body);
  }

  @Put('update/:id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.publicationsService.updatePublication(body, id);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: File) { 
    return true
  }

  @Post('save_file')
  @UseInterceptors(FileInterceptor('file'))
  async saveFile(
      @UploadedFile() file: File,
      @Body() body: { title: string, description: string, publicationDate: string }
    ) {

    return this.publicationsService.createPublication(
      file, body.title, body.description, body.publicationDate
    )
  }
}
