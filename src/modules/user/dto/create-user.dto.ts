import { IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  // Validar que nome é string
  @IsString({ message: 'Nome deve ser uma string.' })
  name: string;

  // Validar que email é string
  // Validar que email é um email
  @IsString({ message: 'Email deve ser uma string.' })
  @IsEmail({}, { message: 'Email deve ser um email.' })
  email: string;

  // Validar que password é string
  // Validar que password tem no mínimo 6 caracteres
  @IsString({ message: 'Senha deve ser uma string.' })
  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    },
    { message: 'Senha deve ter no mínimo 6 caracteres.' },
  )
  password: string;
}
