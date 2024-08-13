import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class FlowerDto {
  @IsString({ message: 'имя не строка ' })
  @ApiProperty({ example: 'edson', required: true })
  name: string;

  @IsString()
  @ApiProperty({ example: 'red', required: true })
  color: string;

  @IsNumber()
  @ApiProperty({ example: 6, required: true })
  price: number;

}

export type TFLowersUpdateDto = Partial<FlowerDto>;
//передать поляя который хотим обновить
