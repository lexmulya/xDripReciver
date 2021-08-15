import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {
  }

  @Get('')
  async getData(@Query() query/*, @Res() res: Response*/){
    console.log("get data = ", JSON.stringify(query));

    const ret = await this.dataService.getData();
    return ret;
  }
}
