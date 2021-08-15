import { Data } from '../Entity/Data.entity';

export class DataToPhoneDto {
  _id: number;
  TransmitterId: string;
  GeoLocation: string;
  TransmissionId: string;
  BatteryLife: string;
  RelativeTime: string;
  CaptureDateTime: string;
  UploaderBatteryLife:string;
  FilteredValue: string;
  RawValue: string

  public static formatFromDB(data: Data): DataToPhoneDto{
    const curTime = (new Date()).getTime();
    const ret = new DataToPhoneDto();
    ret.TransmitterId = data.idTransmitter.toString();
    ret.GeoLocation = data.location;
    ret.TransmissionId = "0";
    ret.BatteryLife = data.batteryLife.toString();
    ret.RelativeTime = ( curTime -data.createdAt.getTime() ).toString();
    ret.CaptureDateTime = data.createdAt.getTime().toString();
    ret.UploaderBatteryLife = data.batteryPercent.toString();
    ret.FilteredValue = data.filteredValue.toString();
    ret.RawValue = data.rawValue.toString();

    return ret;
  }
}
