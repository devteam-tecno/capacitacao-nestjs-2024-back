import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from '../config/database.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { TaskModule } from './modules/task/task.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), UserModule, TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
