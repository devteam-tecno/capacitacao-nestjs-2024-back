import {
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { Status } from '../../../common/enum/Status.enum';
import { Priority } from '../../../common/enum/Priority.enum';

export class CreateTaskDto {
  @IsString({ message: 'Título deve ser uma string.' })
  @IsNotEmpty({ message: 'Título é obrigatório.' })
  title: string;

  @IsString({ message: 'Descrição deve ser uma string.' })
  @IsNotEmpty({ message: 'Descrição é obrigatória.' })
  description: string;

  @IsString({ message: 'Status deve ser uma string.' })
  @IsNotEmpty({ message: 'Status é obrigatório.' })
  @IsEnum(Status)
  status: Status;

  @IsDateString({}, { message: 'Data limite deve ser uma data válida.' })
  @IsNotEmpty({ message: 'Data limite é obrigatória.' })
  deadline: Date;

  @IsString({ message: 'Prioridade deve ser uma string.' })
  @IsNotEmpty({ message: 'Prioridade é obrigatória.' })
  @IsEnum(Priority)
  priority: Priority;

  @IsInt({ message: 'Usuário deve ser um número inteiro.' })
  @IsNotEmpty({ message: 'Usuário é obrigatório.' })
  userId: number;
}
