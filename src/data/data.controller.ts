import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('data')
export class DataController {

  @Get('')
  async getData(@Query() query, @Res() res: Response){
    console.log("get data = ", JSON.stringify(query));

    res.status(HttpStatus.OK).send();
  }
}
