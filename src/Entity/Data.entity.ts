import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { BaseEntity } from './Base.entity';

@Entity()
export class Data extends BaseEntity {
  @Column()
  idTransmitter: string; //zi

  @Column()
  wixelClockMS: number; //rr = current ms clock of wixel

  @Column()
  rawValue: number; //lv = raw value

  @Column()
  filteredValue: number; //lf = filtered value

  @Column()
  receivedDelayMS: number; //ts = ms since packet received

  @Column()
  batteryPercent: number; //bp = battery "percent"

  @Column()
  batteryMv: number; //bm = battery millivolts

  @Column()
  cpuTemp: number; //ct = cpu temperature, eg 287 = 28.7c

  @Column()
  location: string; //gl = geo location longitude/latitude
}
