import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('api/users')
export class UsersController {
  constructor(
    private usersService: UsersService
  ) {}

  @Post('/login')
  loginUser(@Body() body: any) {    
    return this.usersService.findUser(body.email, body.password);
  }

  @Post('create')
  create(@Body() body: any) {
    return this.usersService.createUser(body);
  }

  // modificar endpoint
  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return body;
  }
}
