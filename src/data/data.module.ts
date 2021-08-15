import { Module } from '@nestjs/common';
import { DataService } from './data.service';
import { DataController } from './data.controller';
import { Data } from '../Entity/Data.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([Data]),
  ],
  providers: [DataService],
  controllers: [DataController]
})
export class DataModule {}
