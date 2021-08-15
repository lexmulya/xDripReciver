import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataFromDeviceQueryDto } from '../DTO/DataFromDevice.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Data } from '../Entity/Data.entity';

@Injectable()
export class ReceiverService {
  constructor(@InjectRepository(Data)
              private dataRepository: Repository<Data>) {
  }

  public async dataReceive(dataInp: DataFromDeviceQueryDto){
    try{
      const dataDB = DataFromDeviceQueryDto.parseToDB(dataInp);
      const task = await this.dataRepository.save(dataDB);
      return ;
    }catch (e) {
      console.log("dataReceive e = ", e);
      throw new HttpException("", HttpStatus.NOT_FOUND);
    }
  }
}
