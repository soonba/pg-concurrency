import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { MemberEntity } from 'libs/database/entities/member.entity';
import { GetMembersResponse } from './interface/member.interface';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(MemberEntity)
    private readonly memberRepository: Repository<MemberEntity>,
    private readonly dataSource: DataSource,
  ) {}
  async getAllMembers(): Promise<GetMembersResponse[]> {
    const entities = await this.memberRepository.find({
      relations: { team: true },
    });
    return entities.map((entity) => entity.toResponse());
  }
}
