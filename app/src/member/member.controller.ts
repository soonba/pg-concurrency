import { Controller, Get } from '@nestjs/common';
import { MemberService } from './member.service';
import { GetMembersResponse } from './interface/member.interface';

@Controller('members')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get()
  async getMembers(): Promise<GetMembersResponse[]> {
    return await this.memberService.getAllMembers();
  }
}
