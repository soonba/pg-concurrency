import { Test, TestingModule } from '@nestjs/testing';
import { MemberController } from './member.controller';
import { MemberService } from './member.service';

describe('AppController', () => {
  let appController: MemberController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MemberController],
      providers: [MemberService],
    }).compile();

    appController = app.get<MemberController>(MemberController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getAllMembers()).toBe('Hello World!');
    });
  });
});
