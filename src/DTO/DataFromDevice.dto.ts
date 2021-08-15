import { Data } from '../Entity/Data.entity';

export class DataFromDeviceQueryDto {
  rr: string;
  zi: string;
  pc: string;
  lv: string;
  lf: string;
  db: string;
  ts: string;
  bp: string;
  bm: string;
  ct: string;
  gl: string;

  public static parseToDB(dataInpQ:DataFromDeviceQueryDto):Data{
    const ret = new Data();

    ret.wixelClockMS = Number.parseInt(dataInpQ.rr);
    ret.idTransmitter = Number.parseInt(dataInpQ.zi);
    ret.udpPort = Number.parseInt(dataInpQ.pc);
    ret.rawValue = Number.parseInt(dataInpQ.lv);
    ret.filteredValue = Number.parseInt(dataInpQ.lf);
    ret.batteryLife = Number.parseInt(dataInpQ.db);
    ret.receivedDelayMS = Number.parseInt(dataInpQ.ts);
    ret.batteryPercent = Number.parseInt(dataInpQ.bp);
    ret.batteryMv = Number.parseInt(dataInpQ.bm);
    ret.cpuTemp = Number.parseInt(dataInpQ.ct);
    ret.location = String(dataInpQ.gl);
    ret.createdAt = new Date();

    return ret;
  }

}
