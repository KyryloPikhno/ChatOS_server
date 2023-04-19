import { IsBoolean, IsNotEmpty } from 'class-validator';

export class UpdateTableDto {
  @IsBoolean()
  @IsNotEmpty()
  readonly status: boolean;
}
