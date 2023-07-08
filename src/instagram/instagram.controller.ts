import { Controller, Post, Body } from '@nestjs/common';
import { InstagramService } from './instagram.service';

@Controller('api/instagram')
export class InstagramController {
  constructor(
    private instagramService: InstagramService
  ) {}

  @Post('oauth')
  oauth() {
    return this.instagramService.authenticate();
  }
}
