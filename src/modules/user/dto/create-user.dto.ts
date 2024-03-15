import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  // Validar que nome é string
  @IsString({ message: 'Nome deve ser uma string.' })
  @IsNotEmpty({ message: 'Nome é obrigatório.' })
  name: string;

  // Validar que email é string
  // Validar que email é um email
  @IsString({ message: 'Email deve ser uma string.' })
  @IsEmail({}, { message: 'Email deve ser um email.' })
  @IsNotEmpty({ message: 'Email é obrigatório.' })
  email: string;

  // Validar que password é string
  // Validar que password tem no mínimo 6 caracteres
  @IsString({ message: 'Senha deve ser uma string.' })
  @IsNotEmpty({ message: 'Senha é obrigatória.' })
  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    },
    { message: 'Senha deve ser forte.' },
  )
  password: string;
}
