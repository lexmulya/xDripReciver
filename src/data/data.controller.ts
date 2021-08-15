import { Controller, Get, Header, HttpStatus, Param, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { DataService } from './data.service';
import { DataQueryParams } from '../QueryParams/Data.qp';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {
  }

  @Get(':did/json.get')
  @Header('content-type', 'text/plain')
  async getData(@Query() query, @Param('did') idTransmitter: string/*, @Res() res: Response*/){
    console.log("get data = ", JSON.stringify(query));

    const reqParam = DataQueryParams.parseReq(query);

    const retItems = await this.dataService.getData(idTransmitter, reqParam);

    let retStr = "";
    for(const retItem of retItems){
      retStr += JSON.stringify(retItem);
    }
    return retStr;

  }
}
