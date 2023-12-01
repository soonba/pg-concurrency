import { Injectable } from '@nestjs/common';
import { MemberEntity } from '../libs/database/entities/member.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(MemberEntity)
    private readonly memberRepository: Repository<MemberEntity>,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
}
