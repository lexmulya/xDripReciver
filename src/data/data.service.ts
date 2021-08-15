import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Data } from '../Entity/Data.entity';
import { Repository } from 'typeorm';
import { DataToPhoneDto } from '../DTO/DataToPhone.dto';

@Injectable()
export class DataService {
  constructor(@InjectRepository(Data)
              private dataRepository: Repository<Data>) {
  }

  public async getData(): Promise<DataToPhoneDto> {
    try {
      const lastDataDB = await this.dataRepository.findOneOrFail({
        order:{
          id: 'DESC'
        }
      })
      const ret = DataToPhoneDto.formatFromDB(lastDataDB);
      return ret;
    } catch (e) {
      console.log('getData e = ', e);
      throw new HttpException("", HttpStatus.NOT_FOUND);
    }
  }
}
