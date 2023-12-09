import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class InitTableAndData1701241747932 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'member',
        columns: [
          {
            name: 'member_id',
            type: 'int',
            isGenerated: true,
            isPrimary: true,
            generationStrategy: 'increment',
            comment: '멤버 ID',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '255',
            comment: '멤버 이름',
          },
          {
            name: 'age',
            type: 'int',
            comment: '나이',
          },
          {
            name: 'team_id',
            type: 'int',
            comment: '팀 ID',
          },
        ],
      }),
    );
    await queryRunner.createTable(
      new Table({
        name: 'team',
        columns: [
          {
            name: 'team_id',
            type: 'int',
            isGenerated: true,
            isPrimary: true,
            generationStrategy: 'increment',
            comment: '팀 ID',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '255',
            comment: '팀 이름',
          },
        ],
      }),
    );
    const result = await queryRunner.query(`
    insert into team
    (name)
    values
    ('A'),('B'),('C')
    `);
    await queryRunner.query(`
    insert into member
    (name, age, team_id)
    values
    ('김',29,'1'),
    ('이',21,'1'),
    ('박',34,'1'),
    ('정',41,'1'),
    ('강',13,'1'),
    ('조',26,'1'),
    ('윤',7,'1'),
    ('장',18,'1'),
    ('임',59,'1'),
    ('한',13,'2'),
    ('오',30,'2'),
    ('서',33,'2'),
    ('신',35,'3')`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // queryRunner
  }
}
