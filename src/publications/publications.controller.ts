import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { PublicationsService } from './publications.service';

@Controller('api/publications')
export class PublicationsController {
  constructor(
    private publicationsService: PublicationsService
  ) {}

  @Get('find/:id')
  find(@Param('id') id: number) {
    return this.publicationsService.findPublication(id);
  }

  @Post('create')
  create(@Body() body: any) {
    return this.publicationsService.createPublication(body);
  }

  @Put('update/:id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.publicationsService.updatePublication(body, id);
  }
}
