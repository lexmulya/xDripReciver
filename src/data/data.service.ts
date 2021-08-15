import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Data } from '../Entity/Data.entity';
import { Repository } from 'typeorm';
import { DataToPhoneDto } from '../DTO/DataToPhone.dto';

@Injectable()
export class DataService {
  readonly idTxCode = ['0', '1', '2', '3', '4', '5', '6', '7',
  '8', '9', 'A', 'B', 'C', 'D', 'E', 'F',
  'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P',
  'Q', 'R', 'S', 'T', 'U', 'W', 'X', 'Y'];
  constructor(@InjectRepository(Data)
              private dataRepository: Repository<Data>) {
  }

  public async getData(idTransmitter:string): Promise<DataToPhoneDto> {
    try {
      const txIdFromString = this.getTxId(idTransmitter);
      const lastDataDB = await this.dataRepository.findOne({
        where:{
          idTransmitter: txIdFromString
        },
        order:{
          id: 'DESC'
        }
      })
      if(lastDataDB){
        const ret = DataToPhoneDto.formatFromDB(lastDataDB);
        return ret;
      }else {
        return new DataToPhoneDto();
      }

    } catch (e) {
      console.log('getData e = ', e);
      throw new HttpException("", HttpStatus.NOT_FOUND);
    }
  }

  private getTxId(strTransmitter: string):number{
    let src = 0;
    src |= this.getCode(strTransmitter[0]) << 20;
    src |= this.getCode(strTransmitter[1]) << 15;
    src |= this.getCode(strTransmitter[2]) << 10;
    src |= this.getCode(strTransmitter[3]) << 5;
    src |= this.getCode(strTransmitter[4]) << 0;

    return src;
  }
  private getCode(char){
    const index = this.idTxCode.indexOf(char);
    return ( index );
  }
}
