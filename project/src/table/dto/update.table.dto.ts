import {IsEmail, IsNotEmpty, IsNumber, IsString, Max, MaxLength, Min, MinLength} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class UpdateTableDto {
  @ApiProperty({
    example: 'Kirill',
    required: true,
  })
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  name: string;

  @ApiProperty({
    example: 'mr.admin@i.ua',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 18,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(100)
  age: number;
}
