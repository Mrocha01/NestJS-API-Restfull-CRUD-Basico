import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() body) {
    return { body };
  }

  @Get()
  async readAll() {
    return { users: [] };
  }

  @Get(':id')
  async readOne(@Param() params) {
    return { users: {}, params };
  }

  @Put(':id')
  async updateOne(@Body() body, @Param() params) {
    return { method: 'put', body, params };
  }

  @Patch(':id')
  async updateOnePartial(@Body() body, @Param() params) {
    return { method: 'patch', body, params };
  }
}
