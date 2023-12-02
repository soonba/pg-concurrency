import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from 'libs/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberEntity } from '../libs/database/entities/member.entity';
import { TeamEntity } from '../libs/database/entities/team.entity';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([MemberEntity, TeamEntity]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
