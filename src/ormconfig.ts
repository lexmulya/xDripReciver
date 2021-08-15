import { ConnectionOptions } from 'typeorm';

// You can load you .env file here synchronously using dotenv package (not installed here),
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import path from 'path';

const environment = process.env.NODE_ENV || 'development';
const data: any = dotenv.parse(fs.readFileSync(`.${environment}.env`));

const config: ConnectionOptions = {
  type: 'sqlite',
  database: '../'+'xDripServiceDB',
  entities: [__dirname + '/**/*{.ts,.js}'],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: {
    // Location of migration should be inside src folder
    // to be compiled into dist/ folder.
    migrationsDir: 'src/migrations',
  },
  synchronize: true, //true
  migrationsRun: false,
  logging: false,
};

export = config;


