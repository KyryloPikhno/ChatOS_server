import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTableDto {
  @ApiProperty({
    example: 'Company 123',
    required: true,
  })
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  companyName: string;

  @ApiProperty({
    example: 'GTA',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(20)
  @Matches(/^[a-zA-Z0-9]+ ?([a-zA-Z0-9]+$){0,20}$/, {
    message: "The game name didn't match with RegExp :(",
  })
  gameName: string;

  @ApiProperty({
    example: 100,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(10000)
  totalPrice: number;

  @ApiProperty({
    example: '$',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(5)
  currency: string;

  @ApiProperty({
    example: false,
    required: false,
  })
  @IsBoolean()
  status: boolean;

  @ApiProperty({
    example: false,
    required: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  confirm: boolean;
}
