import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../../common/guard/auth.guard';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskService } from './task.service';

@Controller('api')
@UseGuards(AuthGuard)
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('task')
  async create(@Body() createTaskDto: CreateTaskDto) {
    return await this.taskService.create(createTaskDto);
  }

  @Get('tasks')
  async findAll() {
    return await this.taskService.findAll();
  }

  @Get('task/:id')
  async findOne(@Param('id') id: string) {
    return await this.taskService.findOne(+id);
  }

  @Patch('task/:id')
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return await this.taskService.update(+id, updateTaskDto);
  }

  @Delete('task/:id')
  async remove(@Param('id') id: string) {
    return await this.taskService.remove(+id);
  }
}
