import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { Request } from 'express';

@Controller('receiver')
export class ReceiverController {
  // constructor() {
  // }

  @Get('')
  async dataRecive(@Query() query, @Res() res: Response){
    console.log("receiver data = ", JSON.stringify(query));

    res.status(HttpStatus.OK).send("!ACK");
  }
}
