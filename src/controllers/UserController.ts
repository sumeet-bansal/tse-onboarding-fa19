import { JsonController, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';

@JsonController()
export class UserController {
    @Get('/users')
  getAll() {
    return { users: 'users' };
  }

    @Get('/users/:id')
    getOne(@Param('id') id: number) {
      return { id };
    }

    @Post('/users')
    post(@Body() user: any) {
      return { user };
    }

    @Put('/users/:id')
    put(@Param('id') id: number, @Body() user: any) {
      return { id, user };
    }

    @Delete('/users/:id')
    remove(@Param('id') id: number) {
      return { id };
    }
}
