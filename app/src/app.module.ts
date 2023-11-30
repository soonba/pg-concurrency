import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from 'libs/database/database.module';

@Module({
  imports: [DatabaseModule],
  // imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
