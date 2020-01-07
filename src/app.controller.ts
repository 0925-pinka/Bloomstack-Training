import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Patch,
} from '@nestjs/common';
import { AppService } from './app.service';
import { updateExpression } from '@babel/types';

@Controller('notes')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('list')
  getlist() {
    return this.appService.getlist();
  }

  @Delete('del/:id')
  delete(@Param('id') id1: number) {
    const data = this.appService.delete(id1);
    return data;
  }

  @Post('create')
  createdb(@Body() insert) {
    return this.appService.createdb1(insert);
  }

  @Post('update/:id')
  updateExpression(@Param('id') id1: number, @Body() update) {
    return this.appService.updateExpression1(update, id1);
  }
}
