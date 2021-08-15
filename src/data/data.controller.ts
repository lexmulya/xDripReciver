import { Controller, Get, Header, HttpStatus, Param, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {
  }

  @Get(':did')
  @Header('content-type', 'text/plain')
  async getData(@Query() query, @Param('did') idTransmitter: string/*, @Res() res: Response*/){
    console.log("get data = ", JSON.stringify(query));

    const ret = await this.dataService.getData(idTransmitter);
    const retStr= new  String(JSON.stringify(ret));
    return retStr;
    //res.status(200).send(retStr);
  }
}
