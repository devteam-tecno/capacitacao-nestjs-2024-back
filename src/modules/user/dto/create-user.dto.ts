export class CreateUserDto {
  // Validar que nome é string
  name: string;

  // Validar que email é string
  // Validar que email é um email
  email: string;

  // Validar que password é string
  // Validar que password tem no mínimo 6 caracteres
  password: string;
}
