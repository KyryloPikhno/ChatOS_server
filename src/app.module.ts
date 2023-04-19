import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TableModule } from './table/table.module';
import { AppService } from './app.service';
import * as process from 'process';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.MONGO_URL),
    TableModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
