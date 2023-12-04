import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TeamEntity } from './team.entity';
import { GetMembersResponse } from 'src/member/interface/member.interface';

@Entity('member')
export class MemberEntity {
  @PrimaryGeneratedColumn('increment', { name: 'member_id' })
  memberId: string;

  @Column('varchar', { name: 'name' })
  name: string;

  @ManyToOne(() => TeamEntity, (team) => team.teamId, {
    nullable: false,
  })
  @JoinColumn({ name: 'team_id' })
  team: TeamEntity;

  toResponse(): GetMembersResponse {
    return {
      memberId: this.memberId,
      name: this.name,
      teamName: this.team.name,
    };
  }
}
