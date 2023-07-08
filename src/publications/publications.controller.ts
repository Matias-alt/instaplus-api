import { Controller, Get, Post, Put, Delete, Param, Body,  UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PublicationsService } from './publications.service';
import type { File } from 'multer';
import { log } from 'console';

@Controller('api/publications')
export class PublicationsController {
  constructor(
    private publicationsService: PublicationsService
  ) {}

  @Delete('delete/:id')
  delete(@Param('id') id: number) {
    console.log(id);
    
    return this.publicationsService.deletePublication(id);
  }


  @Get('find')
  findAll() {
    return this.publicationsService.findPublications();
  }

  @Get('find/:id')
  find(@Param('id') id: number) {
    return this.publicationsService.findPublication(id);
  }

  @Post('update')
  update(@Body() body: any){
    console.log('HERE');
    console.log(body);
    
    return this.publicationsService.updatePublication(body);
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
