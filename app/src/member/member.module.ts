import { Module } from '@nestjs/common';
import { DatabaseModule } from 'libs/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberEntity } from 'libs/database/entities/member.entity';
import { TeamEntity } from 'libs/database/entities/team.entity';
import { MemberController } from './member.controller';
import { MemberService } from './member.service';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([MemberEntity, TeamEntity]),
  ],
  controllers: [MemberController],
  providers: [MemberService],
})
export class MemberModule {}
