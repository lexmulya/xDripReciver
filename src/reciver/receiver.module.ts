import { Module } from '@nestjs/common';
import { ReceiverService } from './receiver.service';
import { ReceiverController } from './receiver.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Data } from '../Entity/Data.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Data]),
  ],
  providers: [ReceiverService],
  controllers: [ReceiverController]
})
export class ReceiverModule {}
