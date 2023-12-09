import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

const typeormModuleConfiguration = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'mysql',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'employee',
  keepConnectionAlive: true,
  entities: [join(__dirname, 'entities/*.entity.{js,ts}')],
  migrations: [join(__dirname, 'migrations/*.{js,ts}')],
  migrationsRun: true,
  logging: true,
});

@Module({
  imports: [typeormModuleConfiguration],
})
export class DatabaseModule {}
