import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { Request } from 'express';

import { ReceiverService } from './receiver.service';

@Controller('receiver')
export class ReceiverController {
  constructor(private readonly receiverService: ReceiverService) {
  }

  @Get('')
  async dataReceive(@Query() query, @Res() res: Response){
    console.log("receiver data = ", JSON.stringify(query));

    const ret = await this.receiverService.dataReceive(query);

    res.status(HttpStatus.OK).send("!ACK");
  }
}
